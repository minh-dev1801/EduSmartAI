import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  return (
    <div className="fixed bottom-10 right-4">
      <button className="bg-blue-500 hover:bg-blue-400 hover:scale-105 transition-all text-white w-5 h-5 rounded-full shadow-lg ">
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTop;
