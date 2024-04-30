"use client";
import React, { useEffect, useState } from "react";
import HadithItem from "./HadithItem";

const Hadiths = ({ sectionId }) => {
  const [hadiths, setHadiths] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/hadith")
      .then((res) => res.json())
      .then((data) => setHadiths(data.hadith));
  }, []);

  const filteredHadith = hadiths.filter(
    (hadith) => hadith.section_id === sectionId
  );

  return (
    <div className="flex flex-col gap-4 mt-4">
      {filteredHadith.map((hadith) => (
        <HadithItem key={hadith.id} hadith={hadith} />
      ))}
    </div>
  );
};

export default Hadiths;
