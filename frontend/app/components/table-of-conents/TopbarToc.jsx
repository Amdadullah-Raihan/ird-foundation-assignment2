"use client";
import React from "react";

const TopbarToc = ({ isBookOpen, setIsBookOpen }) => {
  return (
    <div className="flex items-center justify-between border-t border-b md:border-t-0 dark:border-b-gray-700 dark:border-t-gray-700">
      <button
        className={`${
          isBookOpen ? "text-white bg-primary md:rounded-tl-lg" : ""
        } w-full py-3 text-center `}
        onClick={() => {
          setIsBookOpen(true);
        }}
      >
        বই
      </button>
      <button
        className={`${
          !isBookOpen ? "text-white bg-primary md:rounded-tr-lg" : ""
        } w-full py-3 text-center `}
        onClick={() => {
          setIsBookOpen(false);
        }}
      >
        অধ্যায়
      </button>
    </div>
  );
};

export default TopbarToc;
