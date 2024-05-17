"use client"; // to avoid hydration error on mobile views
import React, { useEffect, useState } from "react";
import SupportCard from "./SupportCard";
import { useFontSizeContext } from "../../contexts/fontSizeContext";
import NightModeBtn from "./NightModeBtn";
import RangeSlider from "../input/RangeSlider";

const Settings = () => {
  const { arFontSize, trFontSize, setArFontSize, setTrFontSize } =
    useFontSizeContext();

  return (
    <div className="">
      <div className="p-4 bg-white dark:bg-[#202020]   rounded-lg min-w-64 md:max-w-64">
        <p className="font-semibold md:text-center">সেটিংস</p>
        <div>
          <p className="mt-6 mb-2 text-xs ">আরবি ফন্ট সিলেক্ট করুন</p>
          <select
            name="cars"
            id="cars"
            className="w-full p-2 border dark:bg-[#202020] dark:border-gray-700 dark:focus:border-gray-700 dark:focus:outline-none"
          >
            <option value="KDGQ">KDGQ</option>
            <option value="Me Quran">Me Quran</option>
            <option value="Al Mushaf">Al Mushaf</option>
            <option value="Amiri">Amiri</option>
            <option value="Arial">Arial</option>
          </select>
        </div>
        <div>
          <p className="mt-6 mb-2 text-xs ">এরাবিক ফন্ট সাইজ</p>
          <RangeSlider
            min={18}
            max={40}
            value={arFontSize}
            onChange={setArFontSize}
          />
        </div>
        <div>
          <p className="mt-6 mb-2 text-xs ">অনুবাদ ফন্ট সাইজ</p>
          <RangeSlider
            min={14}
            max={25}
            value={trFontSize}
            onChange={setTrFontSize}
          />
        </div>

        <NightModeBtn />
      </div>
      <div className="h-full p-4 lg:p-0 max-w-72">
        {" "}
        <SupportCard />
      </div>
    </div>
  );
};

export default Settings;
