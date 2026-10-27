/* ============================================================
   ROADMAP – nguồn dữ liệu duy nhất của toàn site.
   Mỗi tuần = 6 bài + 1 ngày "Ôn tập & Mini test" (tự sinh).
   Mã kỹ năng: L=Listening R=Reading S=Speaking W=Writing V=Vocabulary O=Overview
   Khi viết xong 1 bài (lessons/dayNN.html) -> thêm số NN vào mảng ready.
   ============================================================ */
window.ROADMAP = {
  ready: [1, 2],
  weeks: [
    { w: 1, theme: "Nền tảng & Chẩn đoán", goal: "Hiểu cấu trúc đề 4 kỹ năng, nhận diện từ loại, làm quen Part 1 và phát âm cơ bản.",
      items: [
        ["O", "Tổng quan TOEIC 4 kỹ năng & lộ trình"],
        ["R", "Part 5: Nhận diện từ loại"],
        ["L", "Part 1: Tranh người & vật"],
        ["V", "Từ vựng: Office & Workplace"],
        ["S", "Speaking Q1–2: Read a text aloud"],
        ["W", "Writing Q1–5: Viết câu theo tranh"]
      ] },
    { w: 2, theme: "Câu hỏi – đáp & Email cơ bản", goal: "Nắm thì, hòa hợp chủ vị; nghe Part 2; viết email ngắn.",
      items: [
        ["R", "Part 5: Thì & hòa hợp chủ vị"],
        ["L", "Part 2: Câu hỏi Wh-"],
        ["L", "Part 2: Yes/No & câu hỏi lịch sự"],
        ["V", "Từ vựng: Hiring & Personnel"],
        ["S", "Speaking Q3: Describe a picture"],
        ["W", "Writing Q6–7: Respond to a written request"]
      ] },
    { w: 3, theme: "Hội thoại & Ý kiến", goal: "Chiến lược Part 3, bị động và V-ing/to V, bắt đầu nói và viết nêu ý kiến.",
      items: [
        ["R", "Part 5: Bị động & V-ing / to V"],
        ["L", "Part 3: Chiến lược đọc trước câu hỏi"],
        ["L", "Part 3: Hội thoại văn phòng & lịch hẹn"],
        ["V", "Từ vựng: Marketing & Sales"],
        ["S", "Speaking Q4–6: Respond to questions"],
        ["W", "Writing Q8: Cấu trúc bài luận nêu ý kiến"]
      ] },
    { w: 4, theme: "Thông báo & Tài chính", goal: "Giới từ, liên từ; Part 4; nói theo thông tin cho sẵn.",
      items: [
        ["R", "Part 5: Giới từ & liên từ"],
        ["L", "Part 4: Thông báo & voicemail"],
        ["L", "Part 4: Quảng cáo, bản tin, hướng dẫn viên"],
        ["V", "Từ vựng: Finance & Banking"],
        ["S", "Speaking Q7–9: Respond using information provided"],
        ["W", "Writing Q1–5 nâng cao: dùng 2 từ cho sẵn"]
      ] },
    { w: 5, theme: "Đại từ, Part 6 & Du lịch", goal: "Mệnh đề quan hệ, chiến lược Part 6, đề xuất giải pháp.",
      items: [
        ["R", "Part 5: Đại từ & mệnh đề quan hệ"],
        ["R", "Part 6: Chiến lược điền từ vào đoạn văn"],
        ["R", "Part 6: Chọn câu điền vào chỗ trống"],
        ["V", "Từ vựng: Travel & Events"],
        ["S", "Speaking Q10: Propose a solution"],
        ["W", "Writing Q6–7: Email nâng cao"]
      ] },
    { w: 6, theme: "Part 7 mở đầu (giữa lộ trình)", goal: "Đọc lướt, scanning, các dạng văn bản đơn; Part 3 có biểu đồ; nêu ý kiến.",
      items: [
        ["R", "Part 7: Đọc lướt & scanning (đoạn đơn)"],
        ["R", "Part 7: Email & Letter"],
        ["R", "Part 7: Notice, Advertisement, Form"],
        ["L", "Part 3: Hội thoại có biểu đồ"],
        ["S", "Speaking Q11: Express an opinion"],
        ["W", "Writing Q8: Triển khai ý & ví dụ"]
      ] },
    { w: 7, theme: "Nâng cao Part 5, 7 & Phát âm", goal: "So sánh, điều kiện; câu hỏi suy luận; bẫy Part 2; phát âm nâng cao.",
      items: [
        ["R", "Part 5: So sánh & câu điều kiện"],
        ["R", "Part 7: Câu hỏi suy luận & NOT"],
        ["L", "Part 2: Bẫy phát âm tương tự & trả lời gián tiếp"],
        ["V", "Từ vựng: Technology & Office equipment"],
        ["S", "Speaking: Trọng âm & ngữ điệu nâng cao"],
        ["W", "Writing: Lỗi sai thường gặp"]
      ] },
    { w: 8, theme: "Đoạn kép/ba & Mô phỏng", goal: "Part 7 nhiều đoạn, ý định người nói, mô phỏng Speaking/Writing.",
      items: [
        ["R", "Part 7: Double passages"],
        ["R", "Part 7: Triple passages"],
        ["L", "Part 4: Ý định người nói (speaker's intent)"],
        ["V", "Từ vựng: Manufacturing & Logistics"],
        ["S", "Speaking: Mô phỏng Q1–6"],
        ["W", "Writing: Mô phỏng Q1–8"]
      ] },
    { w: 9, theme: "Tốc độ & Tổng ôn", goal: "Tăng tốc độ làm bài, shadowing, ghi chú nhanh, chỉnh sửa bài viết.",
      items: [
        ["R", "Part 5 & 6: Ôn bẫy từ vựng – ngữ pháp"],
        ["R", "Part 7: Điền câu & từ đồng nghĩa"],
        ["L", "Part 1–2: Nghe tốc độ cao & shadowing"],
        ["L", "Part 3–4: Ghi chú nhanh & dự đoán"],
        ["S", "Speaking: Mô phỏng Q7–11"],
        ["W", "Writing: Tự chấm & chỉnh sửa bài viết"]
      ] },
    { w: 10, theme: "Mô phỏng đề #1", goal: "Làm đề đầy đủ bấm giờ, phân tích lỗi, vá điểm yếu.",
      items: [
        ["T", "Full test L&R #1 (bấm giờ)"],
        ["T", "Phân tích lỗi sai test #1"],
        ["L", "Luyện bổ sung điểm yếu Listening"],
        ["R", "Luyện bổ sung điểm yếu Reading"],
        ["S", "Speaking: Mô phỏng đủ 11 câu #1"],
        ["W", "Writing: Mô phỏng đủ 8 câu #1"]
      ] },
    { w: 11, theme: "Mô phỏng đề #2", goal: "Củng cố từ vựng, collocations; đề mô phỏng thứ hai.",
      items: [
        ["T", "Full test L&R #2 (bấm giờ)"],
        ["T", "Phân tích lỗi sai test #2"],
        ["V", "Ôn từ vựng tổng hợp"],
        ["V", "Collocations & idioms thường gặp"],
        ["S", "Speaking: Mô phỏng đủ 11 câu #2"],
        ["W", "Writing: Mô phỏng đủ 8 câu #2"]
      ] },
    { w: 12, theme: "Mô phỏng đề #3 & Ngày thi", goal: "Nước rút, chiến lược ngày thi, mô phỏng cuối.",
      items: [
        ["T", "Full test L&R #3 (bấm giờ)"],
        ["T", "Phân tích lỗi sai test #3"],
        ["R", "Ôn bẫy Part 5, 6"],
        ["R", "Ôn bẫy Part 3, 4, 7"],
        ["O", "Chiến lược ngày thi & tâm lý"],
        ["T", "Mô phỏng cuối Speaking & Writing"]
      ] }
  ]
};
