"use client";
import React from "react";

const TopbarToc = ({ isBookOpen, setIsBookOpen }) => {
  return (
    <div className="flex items-center justify-between border-b ">
      <button
        className={`${
          isBookOpen ? "text-white bg-primary rounded-tl-xl" : ""
        } w-full py-2 text-center `}
        onClick={() => {
          setIsBookOpen(true);
        }}
      >
        বই
      </button>
      <button
        className={`${
          !isBookOpen ? "text-white bg-primary rounded-tr-xl" : ""
        } w-full py-2 text-center `}
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
