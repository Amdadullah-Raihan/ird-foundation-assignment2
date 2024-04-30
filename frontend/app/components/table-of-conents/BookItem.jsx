import React, { useState } from "react";

const BookItem = ({ book }) => {
  const [selected, setSelected] = useState(1);

  return (
    <div>
      <button
        className={`flex items-center w-full gap-4 p-3 rounded-lg hover:bg-green-100 ${
          selected === book.id && "bg-green-100"
        }`}
        onClick={() => setSelected(book.id)}
      >
        <span className="flex items-center justify-center w-10 h-12 text-white rounded-md hexagon bg-primary ">
          {book.abvr_code}
        </span>
        <p className="flex flex-col items-start gap-2">
          <span className="text-xs font-semibold"> {book.title} </span>
          <span className="text-[12px] text-gray-500">
            সর্বোমোট হাদিস - {book.number_of_hadis}
          </span>
        </p>
      </button>
    </div>
  );
};

export default BookItem;
