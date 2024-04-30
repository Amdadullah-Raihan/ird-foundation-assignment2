"use client";
import React, { useState } from "react";
import TopbarToc from "./TopbarToc";
import BooksTOC from "./BooksTOC";
import ChaptersTOC from "./ChaptersTOC";

const TableOfContents = () => {
  const [isBookOpen, setIsBookOpen] = useState(true);
  return (
    <div className="bg-white rounded-lg min-w-64">
      <div>
        <TopbarToc isBookOpen={isBookOpen} setIsBookOpen={setIsBookOpen} />
      </div>
      <div className="p-3">{isBookOpen ? <BooksTOC /> : <ChaptersTOC />}</div>
    </div>
  );
};

export default TableOfContents;
