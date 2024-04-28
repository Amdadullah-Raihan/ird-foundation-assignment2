import React from "react";
import TableContentsLayout from "../components/home/table-of-contents/TableContentsLayout";
import Books from "../components/home/table-of-contents/Books";
import MainContents from "../components/home/MainContents";
import Settings from "../components/home/Settings";

const BooksPage = () => {
  return (
    <div className="flex gap-6 bg-blue-50">
      <div className="hidden lg:block">
        <TableContentsLayout>
          <Books />
        </TableContentsLayout>
      </div>
      <div className="flex-2">
        <MainContents />
      </div>
      <div className="hidden  lg:block">
        <Settings />
      </div>
    </div>
  );
};

export default BooksPage;
