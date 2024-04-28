import React from "react";
import TableOfContentsLayout from "./table-of-contents/TableContentsLayout.js";
import MainContents from "./MainContents";
import Settings from "./Settings";

const Home = () => {
  return (
    <div className="flex w-full gap-6">
      <div>
        <TableOfContentsLayout />
      </div>
    </div>
  );
};

export default Home;
