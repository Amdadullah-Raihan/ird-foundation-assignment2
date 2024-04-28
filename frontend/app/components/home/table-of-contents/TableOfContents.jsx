"use client";
import React, { useState } from "react";
import TopBar from "./TopBar";
import SearchFilter from "./SearchFilter";
import Books from "./Books";
import Chapters from "./Chapters";

const TableOfContents = () => {
  const [isBookSelected, setIsBookSelected] = useState(true);
  return (
    <div className="flex-1 bg-white rounded-2xl">
      <TopBar
        isBookSelected={isBookSelected}
        setIsBookSelected={setIsBookSelected}
      />
      <div className="p-4">
        <SearchFilter />
      </div>
      <div className="px-4 pb-4">
        <div className={`${isBookSelected ? "block" : "hidden"}`}>
          <Books />
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
