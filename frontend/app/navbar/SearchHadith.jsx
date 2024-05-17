import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchHadith = () => {
  return (
    <div className="p-3 bg-gray-200  rounded-lg md:p-2 md:border md:bg-white  dark:bg-[#2C2C2C] md:dark:dark:bg-[#202020]   md:flex md:items-center md:gap-2 dark:md:border-gray-700 dark:text-white">
      <IoIosSearch className="" />
      <input
        type="text"
        placeholder="Search Hadith "
        className="hidden focus:outline-none placeholder:text-sm md:block dark:bg-[#202020]  "
      />
    </div>
  );
};

export default SearchHadith;
