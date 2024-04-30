import React from "react";
import FilterBooksBtn from "./FilterBooksBtn";
import ChapterName from "./ChapterName";
import Section from "./Section";
import Hadith from "./Hadith";
import TableOfContents from "../components/table-of-conents/TableOfContents";

const Books = () => {
  return (
    <div className="flex gap-4">
      <div>
        <TableOfContents />
      </div>
      <div className="flex flex-col gap-3 lg:gap-4">
        <FilterBooksBtn />
        <ChapterName />
        <Section />
        <Hadith />
        <div className="py-8"></div>
      </div>
    </div>
  );
};

export default Books;
