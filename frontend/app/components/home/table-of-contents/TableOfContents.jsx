import React from "react";
import TopBar from "./TopBar";
import SearchFilter from "./SearchFilter";

const TableOfContents = () => {
  return (
    <div className="bg-white rounded-2xl flex-1">
      <TopBar />
      <div className="p-4">
        <SearchFilter />
      </div>
    </div>
  );
};

export default TableOfContents;
