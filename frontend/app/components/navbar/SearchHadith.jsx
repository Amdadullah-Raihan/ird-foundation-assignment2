import React from "react";

const SearchHadith = () => {
  return (
    <div className="flex items-center max-w-sm gap-2 px-2 border-2 rounded-md">
      🔍
      <input
        type="text"
        className="py-2 focus:outline-none"
        placeholder="Search Hadith"
      />
    </div>
  );
};

export default SearchHadith;
