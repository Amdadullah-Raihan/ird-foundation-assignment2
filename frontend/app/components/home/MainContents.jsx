import React from "react";
import { GiBookmarklet, GiBookshelf } from "react-icons/gi";
import { LiaAngleRightSolid } from "react-icons/lia";

import Hadith from "./Hadith";

const MainContents = async () => {
  const response = await fetch("http://localhost:5000/section");
  const sections = await response.json();
  // console.log(sections.section);

  return (
    <div className="">
      <div>
        {/* First two div will be dynamic in the real app */}
        <div className="p-4 mb-6 bg-white rounded-2xl">
          <div className="flex items-center pb-3 text-sm text-gray-500 bg-base-200 ">
            <GiBookshelf className="" />
            <LiaAngleRightSolid /> Bukhari <LiaAngleRightSolid /> Hadith
            <LiaAngleRightSolid />3
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <GiBookshelf className="text-3xl primary-color" />
              <div>
                <p className="mb-2">সহিহ বুখারী</p>
                <p className="text-xs">হাদিস নাম্বার - ৩</p>
              </div>
            </div>
            <p className="text-xl font-medium">صحيح البخاري</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 mb-6 bg-white rounded-2xl">
          <span className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-lg primary-bg">
            ১{" "}
          </span>
          <p>ওহীর সূচনা অধ্যায়</p>
        </div>
        {sections.section.map((section) => (
          <div key={section.id}>
            <div className="p-4 mb-6 bg-white gap-y-8 rounded-2xl">
              <p className="flex gap-4 mb-4">
                <GiBookmarklet className="text-3xl primary-color" />
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
