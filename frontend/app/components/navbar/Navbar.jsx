import React from "react";
import logo from "../../assests/iHadis-logo.png";
import Image from "next/image";
import SearchHadith from "./SearchHadith";
import SupportBtn from "./SupportBtn";
import SettingsBtn from "./SettingsBtn";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
        <Image src={logo} />
        <div className="hidden leading-5 md:block">
          <h6 className="font-bold">হাদিস সমূহ</h6>
          <small>হাদিস পড়ুন শিখুন এবং জানুন</small>
        </div>
        <div>
          <p className="primary-color md:hidden">আল হাদিস</p>
        </div>
      </div>
      <div className="flex gap-2 md:gap-6">
        <SearchHadith />
        <SupportBtn />
        <SettingsBtn />
      </div>
    </div>
  );
};

export default Navbar;
