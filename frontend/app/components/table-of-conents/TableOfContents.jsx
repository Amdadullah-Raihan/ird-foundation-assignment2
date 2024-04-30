"use client";
import React, { useState } from "react";
import TopbarToc from "./TopbarToc";
import BooksTOC from "./BooksTOC";
import ChaptersTOC from "./ChaptersTOC";

const TableOfContents = () => {
  const [isBookOpen, setIsBookOpen] = useState(true);
  return (
    <div className="bg-white min-w-64 rounded-xl">
      <div>
        <TopbarToc isBookOpen={isBookOpen} setIsBookOpen={setIsBookOpen} />
      </div>
      <div className="p-4">{isBookOpen ? <BooksTOC /> : <ChaptersTOC />}</div>
    </div>
  );
};

export default TableOfContents;
