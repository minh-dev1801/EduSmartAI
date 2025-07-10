import type { JSX } from "react";

export const botResponseData: { [key: string]: JSX.Element | string } = {
  "học tiếng anh với người mỹ": (
    <div>
      Học tiếng Anh với người Mỹ là lựa chọn tuyệt vời để cải thiện phát âm và
      giao tiếp! Bạn có thể thử:
      <ul className="list-disc ml-4 mt-1">
        <li>
          <strong>Italki</strong> hoặc <strong>Preply</strong>: Kết nối với giáo
          viên bản xứ người Mỹ để học 1:1.
        </li>
        <li>
          <strong>Cambly</strong>: Trò chuyện trực tiếp với người Mỹ, phù hợp để
          luyện giao tiếp.
        </li>
        <li>
          <strong>Duolingo</strong> hoặc <strong>Rosetta Stone</strong>: Học từ
          vựng và ngữ pháp, có giọng Mỹ chuẩn.
        </li>
        <li>
          <strong>American English Pronunciation</strong>: Xem kênh YouTube như
          Rachel’s English để luyện phát âm.
        </li>
      </ul>
      Bạn muốn tập trung vào kỹ năng nào? Nói, viết, hay phát âm?
    </div>
  ),
  "học phát âm": (
    <div>
      Để cải thiện phát âm tiếng Anh kiểu Mỹ, bạn có thể:
      <ul className="list-disc ml-4 mt-1">
        <li>
          Xem <strong>Rachel’s English</strong> trên YouTube để học cách phát âm
          chuẩn Mỹ.
        </li>
        <li>
          Sử dụng app <strong>ELSA Speak</strong> để luyện phát âm với AI nhận
          diện giọng nói.
        </li>
        <li>
          Tham gia các lớp phát âm trên <strong>Italki</strong> với giáo viên
          Mỹ.
        </li>
      </ul>
      Bạn đã thử phương pháp nào chưa?
    </div>
  ),
  "học giao tiếp": (
    <div>
      Luyện giao tiếp tiếng Anh với người Mỹ thì cần thực hành nhiều! Gợi ý:
      <ul className="list-disc ml-4 mt-1">
        <li>
          Đăng ký <strong>Cambly</strong> để trò chuyện trực tiếp với người Mỹ.
        </li>
        <li>
          Tham gia các nhóm như <strong>Toastmasters</strong> hoặc các câu lạc
          bộ tiếng Anh online.
        </li>
        <li>
          Xem phim Mỹ như <em>Friends</em> và lặp lại các câu thoại để học cách
          nói tự nhiên.
        </li>
      </ul>
      Bạn có muốn mình gợi ý cách luyện nói hàng ngày không?
    </div>
  ),
  "học miễn phí": (
    <div>
      Có nhiều cách học tiếng Anh miễn phí với nội dung chuẩn Mỹ:
      <ul className="list-disc ml-4 mt-1">
        <li>
          Xem <strong>VOA Learning English</strong> để học qua video và bài báo.
        </li>
        <li>
          Sử dụng app <strong>Duolingo</strong> hoặc{" "}
          <strong>BBC Learning English</strong> (có một số nội dung giọng Mỹ).
        </li>
        <li>
          Tham gia các diễn đàn như <strong>Reddit r/EnglishLearning</strong> để
          trao đổi với người bản xứ.
        </li>
      </ul>
      Bạn thích học qua video, app, hay diễn đàn?
    </div>
  ),
  default:
    "Xin lỗi, mình chưa hiểu câu hỏi của bạn. Bạn có thể diễn đạt rõ hơn được không?",
};
