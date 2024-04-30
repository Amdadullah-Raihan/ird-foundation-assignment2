import React, { useState } from "react";

const ChapterItem = ({ chapter }) => {
  const [selected, setSecelted] = useState(1);

  return (
    <div>
      <button
        className={`flex items-center gap-4 w-full p-3 rounded-lg hover:bg-green-100 ${
          selected === chapter.id && "bg-green-100"
        }`}
      >
        <p className="flex items-center justify-center w-10 h-12 text-white hexagon bg-primary">
          {chapter.number}
        </p>
        <p className="flex flex-col items-start gap-2">
          <span className="text-xs font-semibold">{chapter.title}</span>
          <span className="text-[11px] text-gray-500">
            হাদিসের রেঞ্জ : {chapter.hadis_range}
          </span>
        </p>
      </button>
    </div>
  );
};

export default ChapterItem;
