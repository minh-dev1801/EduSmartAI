import { AiOutlineWarning } from "react-icons/ai";

const ProductError = () => {
  return (
    <div className="col-span-full text-center mt-10">
      <div className="flex justify-center text-[50px] text-red-500 mb-2">
        <AiOutlineWarning />
      </div>
      <h1 className="text-xl text-gray-500 mb-8">Sản phẩm hiện không có</h1>
      <button
        onClick={() => window.location.reload()}
        className="text-white bg-blue-500 rounded transition hover:bg-blue-400 cursor-pointer px-6 py-2 mb-10"
      >
        Thử lại
      </button>
    </div>
  );
};

export default ProductError;
