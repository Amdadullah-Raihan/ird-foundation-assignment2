import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const HadithSkeleton = () => {
  return (
    <div
      className="grid w-full gap-4 overflow-hidden animate-pulse"
      style={{ maxHeight: "calc(100vh - 100px)" }}
    >
      <div className="w-full bg-white rounded-lg h-28 ">
        <div className="flex items-center w-full h-10 p-4 my-auto border-b">
          <div className="w-16 h-2 bg-gray-200" />{" "}
          <FaAngleRight className="text-gray-200" />
          <div className="w-12 h-2 bg-gray-200" />{" "}
          <FaAngleRight className="text-gray-200" />
          <div className="h-2 bg-gray-200 w-14" />{" "}
          <FaAngleRight className="text-gray-200" />
        </div>
      </div>
      <div className="w-full bg-white rounded-lg h-28 md:w-full">
        <div className="grid w-full gap-2 p-4 pb-2 my-auto border-b ">
          <div className="w-16 h-2 bg-gray-200" />{" "}
          <div className="w-1/2 h-2 bg-gray-200" />{" "}
        </div>
        <div className="grid w-full gap-2 p-4 pb-2 my-auto border-b ">
          <div className="w-full h-2 bg-gray-200" />{" "}
          <div className="w-full h-2 bg-gray-200" />{" "}
        </div>
      </div>
      <div className="grid w-full h-full gap-4 p-4 bg-white rounded-lg md:w-full">
        <div className="w-12 h-2 bg-gray-200"></div>
        <div className="w-full h-2 bg-gray-200" />{" "}
        <div className="w-full h-2 bg-gray-200" />{" "}
        <div className="w-full h-2 bg-gray-200" />{" "}
        <div className="w-full h-2 bg-gray-200" />{" "}
        <div className="my-6 border"></div>
        <div className="w-full h-2 bg-gray-200" />{" "}
        <div className="w-full h-2 bg-gray-200" />{" "}
        <div className="w-full h-2 bg-gray-200" />{" "}
        <div className="w-full h-2 bg-gray-200" />{" "}
        <div className="flex justify-end gap-3">
          <div className="w-5 h-5 bg-gray-200 rounded"></div>
          <div className="w-5 h-5 bg-gray-200 rounded"></div>
          <div className="w-5 h-5 bg-gray-200 rounded"></div>
          <div className="w-5 h-5 bg-gray-200 rounded"></div>
          <div className="w-5 h-5 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div className="grid w-full h-full gap-4 p-4 bg-white rounded-lg md:w-full">
        <div className="w-12 h-2 bg-gray-200"></div>
        <div className="w-full h-2 bg-gray-200" />{" "}
        <div className="w-full h-2 bg-gray-200" />{" "}
        <div className="w-full h-2 bg-gray-200" />{" "}
        <div className="w-full h-2 bg-gray-200" />{" "}
        <div className="my-6 border"></div>
        <div className="w-full h-2 bg-gray-200" />{" "}
        <div className="w-full h-2 bg-gray-200" />{" "}
        <div className="w-full h-2 bg-gray-200" />{" "}
        <div className="w-full h-2 bg-gray-200" />{" "}
        <div className="flex justify-end gap-3">
          <div className="w-5 h-5 bg-gray-200 rounded"></div>
          <div className="w-5 h-5 bg-gray-200 rounded"></div>
          <div className="w-5 h-5 bg-gray-200 rounded"></div>
          <div className="w-5 h-5 bg-gray-200 rounded"></div>
          <div className="w-5 h-5 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default HadithSkeleton;
