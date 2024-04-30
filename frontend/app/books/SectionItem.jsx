import React from "react";
import { MdOutlineMenuBook } from "react-icons/md";

const SectionItem = ({ section }) => {
  return (
    <div className="p-3 bg-white rounded-lg">
      <div>
        <div className="flex items-center gap-2 md:gap-4 ">
          <MdOutlineMenuBook className="text-3xl text-primary" />
          <p className="font-semibold">{section.number}</p>
        </div>
        <div>
          <p className="mt-2 text-sm font-medium">{section.title}</p>
          <hr className="w-full my-5" />
          <p className="text-sm">{section.preface}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionItem;
