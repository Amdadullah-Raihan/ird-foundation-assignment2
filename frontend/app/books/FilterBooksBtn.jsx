import React from "react";
import { MdMenu } from "react-icons/md";

const FilterBooksBtn = () => {
  return (
    <button className="flex items-center w-full gap-2 p-3 bg-white rounded-lg">
      <MdMenu className="text-2xl" />
      <span> Filter</span>
    </button>
  );
};

export default FilterBooksBtn;
