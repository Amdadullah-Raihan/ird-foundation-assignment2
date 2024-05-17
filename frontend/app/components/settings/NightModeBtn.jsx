"use client";
import { useEffect, useState } from "react";

const NightModeBtn = () => {
  const [nightMode, setNightMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode((prevNightMode) => !prevNightMode);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setNightMode(true);
    }
  }, []);

  useEffect(() => {
    if (nightMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [nightMode]);

  return (
    <div className="flex justify-between mt-6">
      <p className="text-sm">নাইট মোড</p>
      <button
        className={`flex items-center w-10 p-1 h-5 rounded-full cursor-pointer ${
          nightMode ? "bg-primary " : "bg-gray-200"
        }`}
        onClick={toggleNightMode}
      >
        <p
          className={`w-3 h-3  bg-white dark:bg-green-300   rounded-full transform transition-transform ${
            nightMode ? "translate-x-5" : "translate-x-0"
          }`}
        ></p>
      </button>
    </div>
  );
};

export default NightModeBtn;
