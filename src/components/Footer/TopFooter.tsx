import {
  FaAndroid,
  FaAppStore,
  FaFacebook,
  FaSkype,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const TopFooter = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <div className="space-y-2">
        <h3 className="text-lg font-bold uppercase">Hỗ trợ khách hàng</h3>
        <div>
          <p className="font-semibold">Hotline:</p>
          <p>0877709376</p>
        </div>
        <div>
          <p className="font-semibold">Email:</p>
          <p>cskh@antoree.com</p>
        </div>
        <div>
          <p className="font-semibold">Phản hồi về dịch vụ:</p>
          <p>anh.pham2@antoree.com</p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-bold uppercase">Thông tin dịch vụ</h3>
        <ul className="space-y-1">
          <li>
            <a href="#" className="hover:text-blue-400 transition-all">
              Điều khoản sử dụng
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition-all">
              Chính sách bảo mật
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition-all">
              Chính sách hoàn tiền
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition-all">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition-all">
              Cam kết đầu ra
            </a>
          </li>
        </ul>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-bold uppercase">Kết nối với Antoree</h3>
        <p>
          <a href="#" className="hover:text-blue-400 transition-all">
            Cộng đồng
          </a>
        </p>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-all hover:scale-105 cursor-pointer">
          Trở thành giảng viên
        </button>
        <ul className="flex space-x-4 mt-4">
          <li>
            <a href="#" className="hover:text-blue-400 transition-all">
              <FaFacebook className="text-2xl" />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition-all">
              <FaYoutube className="text-2xl" />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition-all">
              <FaSkype className="text-2xl" />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition-all">
              <FaTwitter className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-bold uppercase">
          Tải ứng dụng trên điện thoại
        </h3>
        <button className="flex items-center bg-white text-black px-4 py-2 rounded-lg transition-all hover:scale-105 w-full justify-center cursor-pointer">
          <FaAndroid className="text-2xl mr-2" />
          <div className="text-left">
            <p className="text-xs">GET IT ON</p>
            <p className="text-sm font-bold">Google Play</p>
          </div>
        </button>
        <button className="flex items-center bg-white text-black px-4 py-2 rounded-lg transition-all hover:scale-105 w-full justify-center cursor-pointer">
          <FaAppStore className="text-2xl mr-2" />
          <div className="text-left">
            <p className="text-xs">Download on the</p>
            <p className="text-sm font-bold">App Store</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default TopFooter;
