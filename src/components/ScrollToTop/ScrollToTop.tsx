import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggle = () => {
    if (window.pageYOffset >= 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggle);

    return () => {
      window.removeEventListener("scroll", toggle);
    };
  });

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-22 right-5">
      {isVisible && (
        <button
          onClick={backToTop}
          className="bg-blue-600 hover:bg-blue-500 hover:scale-105 transition-all text-white p-[18px] rounded-full shadow-lg cursor-pointer"
        >
          <FaArrowUp className="w-[20px] h-[20px]" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
