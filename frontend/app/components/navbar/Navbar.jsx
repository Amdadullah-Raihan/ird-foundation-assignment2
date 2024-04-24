import React from "react";
import logo from "../../assests/iHadis-logo.png";
import Image from "next/image";
import SearchHadith from "./SearchHadith";
import SupportBtn from "./SupportBtn";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-6">
        <Image src={logo} />
        <div className="leading-5">
          <h6 className="font-bold">হাদিস সমূহ</h6>
          <small>হাদিস পড়ুন শিখুন এবং জানুন</small>
        </div>
      </div>
      <div className="flex gap-6">
        <SearchHadith />
        <SupportBtn />
      </div>
    </div>
  );
};

export default Navbar;
