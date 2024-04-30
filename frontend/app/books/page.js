import React from "react";
import FilterBooksBtn from "./FilterBooksBtn";
import ChapterName from "./ChapterName";

const Books = () => {
  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <FilterBooksBtn />
      <ChapterName />
    </div>
  );
};

export default Books;
