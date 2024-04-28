import React from "react";

const Settings = () => {
  return (
    <div className="flex-1 p-6 bg-white min-w-64 rounded-2xl text">
      <p className="text-center ">সেটিংস</p>
      <p className="mt-6 mb-2 text-xs ">আরবি ফন্ট সিলেক্ট করুন</p>
      <select name="cars" id="cars" className="w-full p-2 border">
        <option value="KDGQ">KDGQ</option>
        <option value="Me Quran">Me Quran</option>
        <option value="Al Mushaf">Al Mushaf</option>
        <option value="Amiri">Amiri</option>
        <option value="Arial">Arial</option>
      </select>
      <p className="mt-6 mb-2 text-xs ">এরাবিক ফন্ট সাইজ</p>
      <div className="z-0 flex items-center h-2 bg-gray-100 rounded-full">
        <div className="  z-10 h-2  primary-bg w-[26%] rounded-l-full"></div>
        <div className="w-3 h-3 -ml-2 rounded-full primary-bg"></div>
      </div>
      <p className="mt-6 mb-2 text-xs ">অনুবাদ ফন্ট সাইজ</p>
      <div className="z-0 flex items-center h-2 bg-gray-100 rounded-full">
        <div className="  z-10 h-2  primary-bg w-[46%] rounded-l-full"></div>
        <div className="w-3 h-3 -ml-2 rounded-full primary-bg"></div>
      </div>
      <div className="flex justify-between mt-6">
        <p className="text-sm">নাইট মোড</p>
        <div className="flex items-center w-10 h-5 bg-gray-200 rounded-full">
          <div className="w-3 h-3 m-1 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
