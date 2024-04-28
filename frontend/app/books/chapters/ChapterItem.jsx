"use client";
import React, { useState } from "react";
import { FiHexagon } from "react-icons/fi";

const ChapterItem = ({ chapter }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="flex items-center gap-4 p-2 rounded-md hover:bg-green-50"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* <FiHexagon className={`${hover && "primary-color"} text-5xl`} /> */}
      <div
        className={`${
          hover && "primary-bg text-white "
        }  border-2 w-10 h-10 flex items-center justify-center rounded-xl border-[#2B9E76] transition-colors duration-150`}
      >
        {chapter.number}
      </div>
      <div>
        <p>{chapter.title}</p>
        <small>হাদিসের রেঞ্জ : {chapter.hadis_range}</small>
      </div>
    </div>
  );
};

export default ChapterItem;
