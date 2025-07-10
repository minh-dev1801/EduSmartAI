import React, { useState } from "react";
import type { FormEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { setSearchTerm } from "../redux/searchSlice";

const Search: React.FC = () => {
  const [localSearchTerm, setLocalSearchTerm] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setSearchTerm(localSearchTerm));
    setLocalSearchTerm("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchTerm(e.target.value);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={localSearchTerm}
          onChange={handleChange}
          placeholder="Search..."
          className="w-full px-4 py-2 pr-10 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500 transition cursor-pointer"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
