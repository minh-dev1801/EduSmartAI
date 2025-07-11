import { Link } from "react-router";

const Avatar = () => {
  return (
    <>
      <button
        type="button"
        className="flex text-sm rounded-full border border-gray-300 bg-white p-2 cursor-pointer hover:scale-105 transition-all"
        id="user-menu-button"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
      >
        <img
          className="w-8 h-8 md:w-10 md:h-10 rounded-full"
          src="/images/avatar.jpg"
          alt="user photo"
        />
      </button>
      <div
        className="z-50 hidden mt-4 bg-white rounded-lg shadow-sm -translate-x-10"
        id="user-dropdown"
      >
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900">
            Minh Nguyen
          </span>
          <span className="block text-sm text-gray-500 truncate">
            minhnv1801@gmail.com
          </span>
        </div>
        <div className="h-[1px] bg-gray-300 mx-4"></div>
        <ul className="py-2">
          <li>
            <Link
              to="favourite-product"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Yêu thích
            </Link>
          </li>
          <li>
            <Link
              to="history-product"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Lịch sử
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Đăng xuất
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Avatar;
