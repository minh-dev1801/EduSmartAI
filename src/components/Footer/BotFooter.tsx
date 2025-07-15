const BotFooter = () => {
  return (
    <>
      <div className="py-6 mt-6 border-t-[1px] border-b-[1px] border-gray-700">
        <div className="mb-6">
          <h3 className="font-medium md:font-semibold">
            Công ty Giáo dục và Đào tạo ANTOREE INTERNATIONAL PTE. LTD. (MST:
            201436698Z)
          </h3>
          <p>
            Trụ sở chính: 10 Anson Road, #27-15, International Plaza, Singapore
            079903
          </p>
        </div>
        <div>
          <h3 className="font-medium md:font-semibold">
            Đối tác đại diện tại Việt Nam: CÔNG TY TNHH PHÁT TRIỂN GIÁO DỤC
            ANTOREE (MST: 0313769851)
          </h3>
          <p>
            Trụ sở chính: 187/7 Điện Biên Phủ, P. Đa Kao, Q 1, TP Hồ Chí Minh,
            Việt Nam
          </p>
          <p>
            Văn phòng đại diện, tiếp khách và nhận thư tại TP Hồ Chí Minh: Số
            55A Trần Thái Tông, Phường 15, Quận Tân Bình, Hồ Chí Minh, Việt Nam
          </p>
        </div>
      </div>
      <div className="pt-4 flex flex-col md:flex-row justify-between items-center text-gray-400">
        <h3 className="font-semibold mb-3 md:mb-0 text-white">
          © 2025 Antoree Pte.Ltd
        </h3>
        <div className="flex flex-col md:flex-row  md:gap-4 md:mr-12">
          <a href="#" className="hover:text-blue-400 transition-colors">
            Chính sách bảo mật
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Điều khoản sử dụng
          </a>
        </div>
      </div>
    </>
  );
};

export default BotFooter;
