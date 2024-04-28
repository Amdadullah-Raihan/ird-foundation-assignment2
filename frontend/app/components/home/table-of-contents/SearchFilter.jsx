import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchFilter = () => {
  // to use filtering I have to use context api which would force me to change many components client component
  return (
    <div className="flex items-center rounded-md bg-blue-50 ">
      <span className="p-2 text-xl">
        <BiSearchAlt2 className="text-xl text-gray-600" />
      </span>
      <input
        type="text"
        name=""
        id=""
        className="w-full h-full py-2 rounded-md bg-blue-50 focus:outline-none"
        placeholder="Search For Filter"
      />
    </div>
  );
};

export default SearchFilter;
