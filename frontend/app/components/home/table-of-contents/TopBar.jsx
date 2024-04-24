"use client";

import React, { useState } from "react";

const TopBar = () => {
  const [isBookSelected, setIsBookSelected] = useState(true);

  return (
    <div className="border-b grid grid-cols-2">
      <button
        className={`${
          isBookSelected ? "primary-bg text-white" : ""
        } rounded-tl-2xl p-4`}
        onClick={() => setIsBookSelected(true)}
      >
        বই
      </button>
      <button
        className={`${
          !isBookSelected ? "primary-bg text-white" : ""
        } rounded-tr-2xl p-4`}
        onClick={() => setIsBookSelected(false)}
      >
        অধ্যায়
      </button>
    </div>
  );
};

export default TopBar;
