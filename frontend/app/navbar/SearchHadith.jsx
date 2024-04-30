import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchHadith = () => {
  return (
    <div className="p-3 bg-gray-200 rounded-lg md:p-2 md:border md:bg-white md:flex md:items-center md:gap-2">
      <IoIosSearch className="" />
      <input
        type="text"
        placeholder="Search Hadith "
        className="hidden focus:outline-none placeholder:text-sm md:block"
      />
    </div>
  );
};

export default SearchHadith;
