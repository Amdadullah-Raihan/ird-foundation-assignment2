import React from "react";
import TableOfContents from "./table-of-contents/TableOfContents";
import MainContents from "./MainContents";
import Settings from "./Settings";

const Home = () => {
  return (
    <div className="flex gap-6 w-full">
      <div>
        <TableOfContents />
      </div>
      <div className="flex-grow">
        <MainContents />
      </div>
      <div>
        <Settings />
      </div>
    </div>
  );
};

export default Home;
