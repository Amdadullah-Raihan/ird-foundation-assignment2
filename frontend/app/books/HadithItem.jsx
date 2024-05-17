import React from "react";
import { GoGear } from "react-icons/go";
import { TbBookmark, TbCopy, TbExternalLink, TbShare } from "react-icons/tb";
import { PiWarningOctagonLight } from "react-icons/pi";
import { useFontSizeContext } from "../contexts/fontSizeContext";

const Hadith = ({ hadith }) => {
  const { arFontSize, trFontSize } = useFontSizeContext();

  return (
    <div className="flex flex-col w-full gap-4 p-3 bg-white dark:bg-[#202020]   rounded-lg">
      <div className="flex items-center gap-2 font-medium text-primary ">
        <GoGear className="text-xl" />
        <span>{hadith.hadith_id}</span>
      </div>
      <div>
        <p style={{ fontSize: `${arFontSize}px` }} className="text-right">
          {hadith.ar}
        </p>
      </div>
      <div className="flex flex-col gap-3 text-sm">
        <p className="font-semibold text-primary">
          {hadith.narrator} থেকে বর্ণিত:
        </p>
        <p style={{ fontSize: `${trFontSize}px` }} className="leading-7">
          {hadith.bn}
        </p>
      </div>
      <div className="flex items-center justify-between mt-4 mb-2 ">
        <p className="text-sm ">
          হাদিসের মান:{" "}
          <span className="px-2 py-1 text-white rounded-md bg-primary">
            {hadith.grade}
          </span>
        </p>
        <div className="flex gap-4">
          <TbCopy />
          <TbBookmark />
          <TbShare />
          <PiWarningOctagonLight />
          <TbExternalLink />
        </div>
      </div>
    </div>
  );
};

export default Hadith;
