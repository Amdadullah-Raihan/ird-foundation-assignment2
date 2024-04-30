"use client";
import React, { useState } from "react";
import { FaGear } from "react-icons/fa6";
import Settings from "../components/settings/Settings";
import { RxCross2 } from "react-icons/rx";

const SettingsBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="p-2 text-white rounded-lg bg-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaGear />
      </button>
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 left-0 w-full h-full bg-white md:hidden transition-all duration-500 ease-in-out`}
      >
        <button
          className="absolute text-2xl top-3 right-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          {" "}
          <RxCross2 />
        </button>
        <Settings />
      </div>
    </div>
  );
};

export default SettingsBtn;
