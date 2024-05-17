import React from "react";
import { GrSearch } from "react-icons/gr";

const TocSkeleton = () => {
  return (
    <div
      className="h-full overflow-hidden bg-white rounded-lg min-w-64 animate-pulse "
      style={{ maxHeight: "calc(100vh - 100px)" }}
    >
      {/* <div className="border-b p-[1px] flex gap-[1px]">
        <div className="w-1/2 h-12 bg-gray-200 "></div>
        <div className="w-1/2 h-12 bg-gray-200 "></div>
      </div> */}
      <div className="grid gap-3 p-4 ">
        <div className="flex items-center h-12 px-4 bg-gray-200 rounded-lg">
          <GrSearch className="text-gray-500 " />
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <div key={item} className="flex gap-2 p-2 bg-gray-200 rounded-lg">
            <div className="w-12 h-10 bg-gray-300 rounded-xl"></div>
            <div className="grid items-center w-full gap-1">
              <div className="w-full h-2 bg-gray-300"></div>
              <div className="w-full h-2 bg-gray-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TocSkeleton;
