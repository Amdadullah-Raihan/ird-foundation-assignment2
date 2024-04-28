import React from "react";
import { GiBookmarklet } from "react-icons/gi";
import Hadith from "./Hadith";

const MainContents = async () => {
  const response = await fetch("http://localhost:5000/section");
  const sections = await response.json();
  // console.log(sections.section);

  return (
    <div className="">
      <div>
        {sections.section.map((section) => (
          <div key={section.id}>
            <div className="p-4 mb-6 bg-white gap-y-8 rounded-2xl">
              <p className="flex gap-4 mb-4">
                <GiBookmarklet className="text-3xl text-green-700" />
                {section.number}
              </p>
              <p className="text-sm font-semibold">{section.title}</p>
              {section.preface && (
                <p className="pt-2 mt-4 text-sm border-t">{section.preface}</p>
              )}
            </div>
            <div>
              <Hadith section_id={section.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContents;
