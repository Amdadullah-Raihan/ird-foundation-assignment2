"use client";
import React, { useEffect, useState } from "react";
import SectionItem from "./SectionItem";
import Hadiths from "./Hadiths";

const Sections = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/section")
      .then((res) => res.json())
      .then((data) => setSections(data.section));
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {sections.map((section) => (
        <div key={section.id}>
          <SectionItem section={section} />
          <Hadiths sectionId={section.id} />
        </div>
      ))}
    </div>
  );
};

export default Sections;
