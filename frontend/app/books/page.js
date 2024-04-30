import React from "react";
import FilterBooksBtn from "./FilterBooksBtn";
import ChapterName from "./ChapterName";
import Section from "./Section";

const Books = () => {
  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <FilterBooksBtn />
      <ChapterName />
      <Section />
    </div>
  );
};

export default Books;
