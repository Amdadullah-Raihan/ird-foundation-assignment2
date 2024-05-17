import React from "react";
import { GiBookmarklet, GiBookshelf } from "react-icons/gi";
import { LiaAngleRightSolid } from "react-icons/lia";

const HadithInfo = () => {
  return (
    <div className="w-full bg-white dark:bg-[#202020]   rounded-2xl">
      <div className="flex items-center p-3 text-xs text-gray-500  border-b dark:border-b-gray-700 bg-gray-50 dark:bg-[#202020]  rounded-t-2xl">
        <GiBookshelf className="" />
        <LiaAngleRightSolid /> Bukhari <LiaAngleRightSolid /> Hadith
        <LiaAngleRightSolid />3
      </div>
      <div className="flex items-center justify-between w-full p-3">
        <div className="flex items-center gap-3">
          <GiBookshelf className="text-3xl text-primary" />
          <div className="leading-10">
            <p className="">সহিহ বুখারী</p>
            <p className="text-xs">হাদিস নাম্বার - ৩</p>
          </div>
        </div>
        <p className="text-xl font-medium">صحيح البخاري</p>
      </div>
    </div>
  );
};

export default HadithInfo;
