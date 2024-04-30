import React from "react";
import Image from "next/image";
import SearchHadith from "./SearchHadith";
import SettingsBtn from "./SettingsBtn";
import logo from "../assests/logo/iHadis-logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex gap-4">
        <Image src={logo} alt="iHadis" className="w-10" />
        <div>
          <h6 className="text-sm font-bold">হাদিস সমূহ</h6>
          <small className="text-xs">হাদিস পড়ুন শিখুন এবং জানুন</small>
        </div>
      </div>
      <div className="flex gap-3 md:gap-4">
        <SearchHadith />
        <SettingsBtn />
      </div>
    </nav>
  );
};

export default Navbar;
