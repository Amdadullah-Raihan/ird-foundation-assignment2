import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchContents = () => {
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-100 dark:bg-[#2C2C2C]  rounded-lg h-11 ">
      <IoIosSearch className="" />
      <input
        type="text"
        placeholder="Search For Filter "
        className="bg-gray-100 focus:outline-none placeholder:text-sm dark:bg-[#2C2C2C] "
      />
    </div>
  );
};

export default SearchContents;
