import React from "react";
import TopBar from "./TopBar";
import SearchFilter from "./SearchFilter";
const TableContentsLayout = ({ children }) => {
  return (
    <div className="bg-white rounded-2xl min-w-64">
      <TopBar />
      <div className="p-4">
        <SearchFilter />
        <div className="py-6">{children}</div>
      </div>
    </div>
  );
};

export default TableContentsLayout;
