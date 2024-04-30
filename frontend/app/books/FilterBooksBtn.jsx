"use client";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import TableOfContents from "../components/table-of-conents/TableOfContents";
import { RxCross2 } from "react-icons/rx";

const FilterBooksBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className="flex items-center w-full gap-2 p-3 bg-white rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full h-full gap-2"
      >
        <MdMenu className="text-2xl" />
        <span> Filter</span>
      </button>

      <div
        className={` ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-500 ease-in-out w-full h-full bg-whtie fixed top-0 left-0 z-20`}
      >
        <div className="flex justify-between p-3 py-6 bg-white">
          <p>ক্যাটাগরি</p>
          <button onClick={() => setIsOpen(!isOpen)}>
            <RxCross2 className="text-xl" />
          </button>
        </div>
        <TableOfContents />
      </div>
    </div>
  );
};

export default FilterBooksBtn;
