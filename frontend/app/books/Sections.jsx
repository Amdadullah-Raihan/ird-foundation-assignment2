"use client";
import React, { useEffect, useState } from "react";
import SectionItem from "./SectionItem";
import Hadiths from "./Hadiths";

const Sections = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch("https://ihadis-server.vercel.app/section")
      .then((res) => res.json())
      .then((data) => setSections(data.section));
  }, []);

  return (
    <div className="flex flex-col w-full gap-4">
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
