import React from "react";
import { FaAngleDown } from "react-icons/fa6";

const SettingSkeleton = () => {
  return (
    <div className="grid gap-4 min-w-64">
      <div className="grid gap-6 p-4 bg-white rounded-lg">
        <div>
          <div className="w-1/2 h-2 mx-auto mb-4 bg-gray-200"></div>
          <div className="flex items-center justify-end h-10 p-2 bg-gray-200 rounded-md">
            <FaAngleDown className="text-gray-400" />
          </div>
        </div>
        <div className="grid gap-5">
          <div className="w-1/2 h-2 bg-gray-200"></div>
          <div className="relative w-full h-2 bg-gray-200 rounded-lg">
            <div className="w-5 h-5 -mt-[6px] ml-28 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <div className="grid gap-5">
          <div className="w-3/12 h-2 bg-gray-200"></div>
          <div className="relative w-full h-2 bg-gray-200 rounded-lg">
            <div className="w-5 h-5 -mt-[6px] ml-24 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="grid gap-6 p-4 bg-white rounded-lg ">
        <div className="grid gap-2">
          <div className="w-full h-2 bg-gray-200"></div>
          <div className="w-3/12 h-2 bg-gray-200"></div>
        </div>
        <div className="grid gap-2">
          <div className="w-full h-2 bg-gray-200"></div>
          <div className="w-full h-2 bg-gray-200"></div>
          <div className="w-full h-2 bg-gray-200"></div>
          <div className="w-full h-2 bg-gray-200"></div>
          <div className="w-1/2 h-2 bg-gray-200"></div>
        </div>
        <div className="grid gap-2">
          <div className="w-full h-2 bg-gray-200"></div>
          <div className="w-1/3 h-2 bg-gray-200"></div>
        </div>
        <button className="p-5 mx-auto bg-gray-200 rounded-lg w-36 "></button>
      </div>
    </div>
  );
};

export default SettingSkeleton;
