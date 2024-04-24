import React from "react";

const SearchFilter = () => {
  return (
    <div className="bg-blue-50 rounded-md flex items-center ">
      <span className="p-2 text-xl">🔍</span>
      <input
        type="text"
        name=""
        id=""
        className="h-full w-full bg-blue-50 py-2 rounded-md focus:outline-none"
        placeholder="Search For Filter"
      />
    </div>
  );
};

export default SearchFilter;
