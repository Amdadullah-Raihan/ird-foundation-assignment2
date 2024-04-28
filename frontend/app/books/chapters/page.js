import React from "react";
import TableOfContentsLayout from "../../components/home/table-of-contents/TableContentsLayout";
import MainContents from "../../components/home/MainContents";
import Settings from "../../components/home/Settings";
import ChapterItem from "./ChapterItem";
import { TbHexagon } from "react-icons/tb";

export const getChapters = async () => {};

const Chapters = async () => {
  const response = await fetch("http://localhost:5000/chapter");
  const chapter = await response.json();

  return (
    <div className="flex gap-6 bg-blue-50 ">
      <div>
        <TableOfContentsLayout>
          <div>
            {chapter.chapter.map((cpt) => (
              <ChapterItem key={cpt.title} chapter={cpt} />
            ))}
          </div>
        </TableOfContentsLayout>
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

export default Chapters;
