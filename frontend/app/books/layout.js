// app/layout.jsx
import React from "react";
import TopBar from "../components/home/table-of-contents/TopBar";
import SearchFilter from "../components/home/table-of-contents/SearchFilter";
import TableContentsLayout from "../components/home/table-of-contents/TableContentsLayout";

const Layout = ({ children }) => {
  return <div className="flex-1 bg-white rounded-2xl">{children}</div>;
};

export default Layout;
