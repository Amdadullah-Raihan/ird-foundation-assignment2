import React from "react";
import FilterBooksBtn from "./FilterBooksBtn";
import ChapterName from "./ChapterName";
import Sections from "./Sections";
import TableOfContents from "../components/table-of-conents/TableOfContents";
import Settings from "../components/settings/Settings";

const Books = () => {
  return (
    <div className="flex gap-4">
      <div className="hidden md:block">
        <TableOfContents />
      </div>
      <div className="flex flex-col gap-3">
        <FilterBooksBtn />
        <div className="flex flex-col max-h-[87vh] gap-3 overflow-y-scroll scrollable-div lg:gap-4 z">
          <ChapterName />
          <Sections />
          <div className="py-8"></div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Settings />
      </div>
    </div>
  );
};

export default Books;
