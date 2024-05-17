import React from "react";
import Image from "next/image";
import SearchHadith from "./SearchHadith";
import SettingsBtn from "./SettingsBtn";
import SupportBtn from "./SupportBtn";
import logo from "../assests/logo/iHadis-logo.png";

const Navbar = () => {
  return (
    <nav className="relative z-0 flex items-center justify-between px-4 py-3 bg-white dark:bg-[#202020]   md:py-4">
      <div className="flex gap-3 md:gap-4">
        <Image src={logo} alt="iHadis" className="w-10" />
        <div>
          <h6 className="text-sm font-bold">হাদিস সমূহ</h6>
          <small className="text-xs">হাদিস পড়ুন শিখুন এবং জানুন</small>
        </div>
      </div>
      <div className="flex gap-3 md:gap-4">
        <SearchHadith />
        <div className="lg:hidden">
          <SettingsBtn />
        </div>
        <div className="hidden lg:block">
          <SupportBtn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
