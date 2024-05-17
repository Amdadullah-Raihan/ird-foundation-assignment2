"use client";
import React, { useEffect, useState } from "react";
import HadithItem from "./HadithItem";
import { useApiContext } from "../contexts/apiContext";
import HadithSkeleton from "../components/skeletons/HadithSkeleton";

const Hadiths = ({ sectionId }) => {
  const { hadiths, isLoading } = useApiContext();
  console.log("use apiContext: ", useApiContext());

  const filteredHadith = hadiths.filter(
    (hadith) => hadith.section_id === sectionId
  );

  return (
    <div className="flex flex-col gap-4 mt-4">
      {isLoading ? (
        <HadithSkeleton />
      ) : (
        filteredHadith.map((hadith) => (
          <HadithItem key={hadith.id} hadith={hadith} />
        ))
      )}
    </div>
  );
};

export default Hadiths;
