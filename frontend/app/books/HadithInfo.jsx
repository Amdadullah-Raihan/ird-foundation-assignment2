import React from "react";
import { GiBookmarklet, GiBookshelf } from "react-icons/gi";
import { LiaAngleRightSolid } from "react-icons/lia";

const HadithInfo = () => {
  return (
    <div>
      {/* First two div will be dynamic in the real app */}
      <div className="w-full bg-white rounded-2xl">
        <div className="flex items-center pb-3 text-xs text-gray-500 bg-base-200 ">
          <GiBookshelf className="" />
          <LiaAngleRightSolid /> Bukhari <LiaAngleRightSolid /> Hadith
          <LiaAngleRightSolid />3
        </div>
        <div className="flex justify-between w-full">
          <div className="flex gap-3">
            <GiBookshelf className="text-3xl text-primary" />
            <div>
              <p className="mb-2">সহিহ বুখারী</p>
              <p className="text-xs">হাদিস নাম্বার - ৩</p>
            </div>
          </div>
          <p className="text-xl font-medium">صحيح البخاري</p>
        </div>
      </div>
    </div>
  );
};

export default HadithInfo;
