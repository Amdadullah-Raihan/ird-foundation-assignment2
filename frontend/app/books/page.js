import React from "react";
import Home from "../components/home/Home";
import TableContentsLayout from "../components/home/table-of-contents/TableContentsLayout";
import Books from "../components/home/table-of-contents/Books";
import MainContents from "../components/home/MainContents";
import Settings from "../components/home/Settings";

const BooksPage = () => {
  return (
    <div className="flex gap-6 bg-blue-50">
      <div>
        <TableContentsLayout>
          <Books />
        </TableContentsLayout>
      </div>
      <div className="flex-grow">
        <MainContents />
      </div>
      <div>
        <Settings />
      </div>
    </div>
  );
};

export default BooksPage;
