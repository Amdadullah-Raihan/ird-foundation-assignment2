import React from "react";
import TableOfContentsLayout from "../../components/home/table-of-contents/TableContentsLayout";
import MainContents from "../../components/home/MainContents";
import Settings from "../../components/home/Settings";

const Chapters = () => {
  return (
    <div className="flex gap-6 bg-blue-50 ">
      <div>
        <TableOfContentsLayout>
          <div>Chaptes</div>
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
