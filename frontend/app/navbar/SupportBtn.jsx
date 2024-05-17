import React from "react";
import { BiSolidDonateHeart } from "react-icons/bi";

const SupportBtn = () => {
  return (
    <button className="flex items-center h-full gap-2 px-4 text-sm text-white rounded-lg bg-primary ">
      সাপোর্ট করুন <BiSolidDonateHeart className="text-xl" />
    </button>
  );
};

export default SupportBtn;
