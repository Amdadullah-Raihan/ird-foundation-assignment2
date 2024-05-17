"use client";
import React from "react";
import FilterBooksBtn from "./FilterBooksBtn";
import ChapterName from "./ChapterName";
import Sections from "./Sections";
import TableOfContents from "../components/table-of-conents/TableOfContents";
import Settings from "../components/settings/Settings";
import { useApiContext } from "../contexts/apiContext";
import HadithSkeleton from "../components/skeletons/HadithSkeleton";
import TocSkeleton from "../components/skeletons/TocSkeleton";
import SettingSkeleton from "../components/skeletons/SettingSkeleton";

const Books = () => {
  const { isLoading } = useApiContext();
  return (
    <div className="flex gap-4">
      <div className="hidden md:block">
        {isLoading ? <TocSkeleton /> : <TableOfContents />}
      </div>
      {isLoading ? (
        <HadithSkeleton />
      ) : (
        <div className="flex flex-col w-full gap-4">
          <FilterBooksBtn />

          <div className="flex flex-col gap-4 overflow-y-auto max-height scrollable-div lg:gap-4 ">
            <ChapterName />
            <Sections />
            <div className="py-4 md:hidden md:py-0"></div>
          </div>
        </div>
      )}

      <div className="hidden lg:block">
        {isLoading ? <SettingSkeleton /> : <Settings />}
      </div>
    </div>
  );
};

export default Books;
