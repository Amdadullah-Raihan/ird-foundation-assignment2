import React from "react";

const SearchHadith = () => {
  return (
    <div className="flex items-center max-w-sm gap-2 px-2 border-2 rounded-md bg-blue-50 md:bg-white">
      <span className="py-2 "> 🔍</span>
      <input
        type="text"
        className="hidden py-2 focus:outline-none md:block"
        placeholder="Search Hadith "
      />
    </div>
  );
};

export default SearchHadith;
