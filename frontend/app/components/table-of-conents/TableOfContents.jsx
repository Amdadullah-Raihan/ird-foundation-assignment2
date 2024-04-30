"use client";
import React, { useState } from "react";
import TopbarToc from "./TopbarToc";
import BooksTOC from "./BooksTOC";
import ChaptersTOC from "./ChaptersTOC";
import SearchContents from "./SearchContents";

const TableOfContents = () => {
  const [isBookOpen, setIsBookOpen] = useState(true);
  return (
    <div className="h-full bg-white rounded-lg min-w-64">
      <div>
        <TopbarToc isBookOpen={isBookOpen} setIsBookOpen={setIsBookOpen} />
      </div>
      <div className="p-3 md:p-4">
        <SearchContents />
      </div>
      <div className="px-3 md:px-4">
        {isBookOpen ? <BooksTOC /> : <ChaptersTOC />}
      </div>
    </div>
  );
};

export default TableOfContents;
