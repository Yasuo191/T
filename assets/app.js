/* TOEIC Roadmap – logic dùng chung. Tiến độ lưu trong localStorage của trình duyệt. */
(function () {
  const R = window.ROADMAP;
  const KEY = "toeic_done_v1";
  const ROOT = document.body.dataset.root || "";
  const SK = { O: ["Tổng quan", "o"], L: ["Listening", "l"], R: ["Reading", "r"], S: ["Speaking", "s"],
               W: ["Writing", "w"], V: ["Từ vựng", "v"], T: ["Mô phỏng", "t"], X: ["Ôn tập", "x"] };
  const pad = n => String(n).padStart(2, "0");
  const getDone = () => { try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) { return []; } };
  const setDone = a => { try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) {} };
  const lessonUrl = d => `${ROOT}lessons/day${pad(d)}.html`;

  // Làm phẳng lộ trình thành danh sách ngày (mỗi tuần: 6 bài + 1 ngày ôn tập)
  const DAYS = [];
  R.weeks.forEach(wk => {
    const list = wk.items.concat([["X", "Ôn tập tuần " + wk.w + " & Mini test"]]);
    list.forEach((it, i) => DAYS.push({ day: (wk.w - 1) * 7 + i + 1, week: wk.w, skill: it[0], title: it[1] }));
  });
  const isReady = d => R.ready.includes(d);

  /* ---------------- Trang chủ ---------------- */
  function renderIndex() {
    const box = document.getElementById("weeks");
    if (!box) return;
    let filter = "ALL";
    const draw = () => {
      const done = getDone();
      const total = DAYS.length, n = done.filter(d => DAYS.some(x => x.day === d)).length;
      document.getElementById("s-done").textContent = n + "/" + total;
      document.getElementById("s-pct").textContent = Math.round(n / total * 100) + "%";
      document.getElementById("s-bar").style.width = (n / total * 100) + "%";
      document.getElementById("s-ready").textContent = R.ready.length + "/" + (total - R.weeks.length);
      const open = new Set([...box.querySelectorAll("details[open]")].map(d => d.dataset.w));
      if (!box.children.length) open.add("1");
      box.innerHTML = R.weeks.map(wk => {
        const ds = DAYS.filter(x => x.week === wk.w);
        const wdone = ds.filter(x => done.includes(x.day)).length;
        const cards = ds.filter(x => filter === "ALL" || x.skill === filter).map(x => {
          const sk = SK[x.skill], ok = done.includes(x.day), ready = isReady(x.day), review = x.skill === "X";
          const inner = `<div class="dno">Ngày<b>${x.day}</b></div>
            <div class="dtitle"><span class="tag ${sk[1]}">${sk[0]}</span><br>${x.title}</div>
            <div class="st">${ok ? "✅" : ready ? "▶️" : review ? "🔁" : "🔒"}</div>`;
          if (ready) return `<a class="day ${ok ? "done" : ""}" href="${lessonUrl(x.day)}">${inner}</a>`;
          if (review) return `<div class="day ${ok ? "done" : ""}" data-toggle="${x.day}" style="cursor:pointer" title="Bấm để đánh dấu đã ôn">${inner}</div>`;
          return `<div class="day soon">${inner}</div>`;
        }).join("");
        return `<details class="week" data-w="${wk.w}" ${open.has(String(wk.w)) ? "open" : ""}>
          <summary><span class="wno">Tuần ${wk.w}</span>
          <span class="wmeta"><b>${wk.theme}</b><small>${wk.goal}</small></span>
          <span class="wprog">${wdone}/${ds.length}</span></summary>
          <div class="days">${cards || "<p style='padding:8px;color:var(--muted)'>Không có bài thuộc bộ lọc này.</p>"}</div></details>`;
      }).join("");
      box.querySelectorAll("[data-toggle]").forEach(el => el.onclick = () => {
        const d = +el.dataset.toggle, a = getDone();
        setDone(a.includes(d) ? a.filter(x => x !== d) : a.concat(d)); draw();
      });
    };
    const fbox = document.getElementById("filters");
    fbox.innerHTML = `<button class="chip on" data-f="ALL">Tất cả</button>` +
      ["L", "R", "S", "W", "V", "T"].map(k => `<button class="chip" data-f="${k}">${SK[k][0]}</button>`).join("");
    fbox.onclick = e => {
      const b = e.target.closest("[data-f]"); if (!b) return;
      filter = b.dataset.f;
      fbox.querySelectorAll(".chip").forEach(c => c.classList.toggle("on", c === b));
      draw();
    };
    draw();
  }

  /* ---------------- Bài học ---------------- */
  function renderLesson() {
    const day = +document.body.dataset.day;
    if (!day) return;
    const cur = DAYS.find(x => x.day === day);
    const ready = R.ready.slice().sort((a, b) => a - b);
    const idx = ready.indexOf(day);
    const prev = ready[idx - 1], next = ready[idx + 1];
    const top = document.getElementById("top");
    if (top) top.innerHTML = `<a class="brand" href="${ROOT}index.html">TOEIC 12W</a>
      <span class="crumb">Tuần ${cur ? cur.week : "?"} › Ngày ${day}${cur ? " · " + cur.title : ""}</span><span class="sp"></span>
      <span class="pill" id="pill"></span>`;
    const foot = document.getElementById("foot");
    if (foot) foot.innerHTML = `<div class="pager">
      <a class="btn ghost" ${prev ? `href="${lessonUrl(prev)}"` : 'aria-disabled="true"'}>← Bài trước</a>
      <button class="btn" id="mark"></button>
      <a class="btn ghost" ${next ? `href="${lessonUrl(next)}"` : 'aria-disabled="true"'}>Bài sau →</a></div>`;
    const mark = document.getElementById("mark");
    const sync = () => {
      const ok = getDone().includes(day);
      if (mark) { mark.textContent = ok ? "✓ Đã hoàn thành (bấm để bỏ)" : "Đánh dấu hoàn thành"; mark.classList.toggle("ok", ok); }
      const pill = document.getElementById("pill"); if (pill) pill.textContent = ok ? "✓ Hoàn thành" : "Đang học";
    };
    if (mark) mark.onclick = () => { const a = getDone(); setDone(a.includes(day) ? a.filter(x => x !== day) : a.concat(day)); sync(); };
    sync();

    // Mini quiz: trang bài học khai báo window.QUIZ = [{q,o:[...],a:index,e:"giải thích"}]
    const qz = document.getElementById("quiz");
    if (qz && window.QUIZ) {
      let right = 0, answered = 0;
      qz.innerHTML = window.QUIZ.map((q, i) => `<div class="qq" id="qq${i}">
        <div class="qt">${i + 1}. ${q.q}</div>
        ${q.o.map((o, k) => `<div class="qo" data-i="${i}" data-k="${k}"><i>${"ABCD"[k]}</i><span>${o}</span></div>`).join("")}
        <div class="qe"><b>Đáp án: ${"ABCD"[q.a]}.</b> ${q.e}</div></div>`).join("") + `<div class="score" id="score"></div>`;
      qz.onclick = e => {
        const el = e.target.closest(".qo"); if (!el) return;
        const i = +el.dataset.i, k = +el.dataset.k, box = document.getElementById("qq" + i);
        if (box.classList.contains("locked")) return;
        box.classList.add("locked");
        const q = window.QUIZ[i];
        box.querySelectorAll(".qo").forEach(o => { const kk = +o.dataset.k; if (kk === q.a) o.classList.add("ok"); else if (kk === k) o.classList.add("bad"); });
        answered++; if (k === q.a) right++;
        document.getElementById("score").textContent = `Kết quả: ${right}/${answered} câu đúng (${window.QUIZ.length} câu)`;
      };
    }
  }

  renderIndex();
  renderLesson();
})();
