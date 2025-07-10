import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { setPriceRange, clearPriceRange } from "../redux/priceSlice";

const priceList = [
  { id: 1, name: "< 500K", value: "<500K" },
  { id: 2, name: "500K - 1M", value: "500K-1M" },
  { id: 3, name: "> 1M", value: ">1M" },
];

const PriceFilter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedRange = useSelector(
    (state: RootState) => state.priceFilter.selectedRange
  );

  const handlePriceChange = (value: string) => {
    if (value === selectedRange) {
      dispatch(clearPriceRange());
    } else {
      dispatch(setPriceRange(value));
    }
  };

  return (
    <div className="w-full max-w-lg">
      <div className="flex flex-wrap gap-3">
        {priceList.map((price) => (
          <button
            key={price.id}
            onClick={() => handlePriceChange(price.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition ${
              selectedRange === price.value
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {price.name}
          </button>
        ))}
        <button
          onClick={() => dispatch(clearPriceRange())}
          className="px-4 py-2 rounded-lg text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 transition cursor-pointer"
        >
          Xóa bộ lọc
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;
