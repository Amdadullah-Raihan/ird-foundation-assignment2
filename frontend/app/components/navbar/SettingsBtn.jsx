"use client";
import React, { useState } from "react";
import { FaGear } from "react-icons/fa6";
import Settings from "../home/Settings";
import { RxCross2 } from "react-icons/rx";

const SettingsBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-center px-3 text-xl rounded-md primary-bg md:hidden">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <FaGear className="text-white" />
      </button>
      <div
        className={`fixed top-0 right-0 ${
          isOpen ? "translate-x-0" : "translate-x-[100%] "
        } h-full bg-white transition-transform duration-500 ease-in-out overflow-hidden`}
      >
        {isOpen && (
          <>
            <button
              className="absolute p-2 text-white bg-red-400 rounded-full top-4 right-4"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <RxCross2 />
            </button>
            <Settings />
          </>
        )}
      </div>
    </div>
  );
};

export default SettingsBtn;
