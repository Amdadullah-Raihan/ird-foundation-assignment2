// Chapters.js

import React from "react";
import TableOfContentsLayout from "../../components/home/table-of-contents/TableContentsLayout";
import MainContents from "../../components/home/MainContents";
import Settings from "../../components/home/Settings";
import ChapterItem from "./ChapterItem";
import { TbHexagon } from "react-icons/tb";

const Chapters = async () => {
  const response = await fetch("https://ihadis-server.vercel.app/chapter");
  const data = await response.json();
  const chapters = data.chapter;

  return (
    <div className="flex gap-6 bg-blue-50">
      <div className="hidden w-1/4 md:block">
        <TableOfContentsLayout>
          <div>
            {chapters?.map((chapter) => (
              <ChapterItem key={chapter.title} chapter={chapter} />
            ))}
          </div>
        </TableOfContentsLayout>
      </div>
      <div className="flex-grow">
        <MainContents />
      </div>
      <div className="hidden w-1/4 md:block">
        <Settings />
      </div>
    </div>
  );
};

export default Chapters;
