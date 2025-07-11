import { Link } from "react-router";
import Logo from "./Header/Logo";
import Avatar from "./Header/Avatar";
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 shadow fixed top-0 left-0 right-0 z-100">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 md:p-4">
        <Logo />
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Avatar />
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="p-2  text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer transition-all"
          >
            <MdMenu className="w-6 h-6" />
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                to=""
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0"
              >
                Trang chủ
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 bg-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Giới thiệu
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 bg-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Dịch vụ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 bg-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Bảng giá
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 bg-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Liên hệ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
