import React from "react";
import "./global.css";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import { Poppins } from "next/font/google";
import { FontSizeContextProvider } from "./contexts/fontSizeContext";
import { ApiContextProvider } from "./contexts/apiContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  // weight: ["400"],
});

export const metadata = {
  title: "iHadis - Replica",
  description: "Developed by Amdadul Islam Raihan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className} `}>
      <FontSizeContextProvider>
        <body className=" dark:text-[#8D9295] dark:bg-[#202020] ">
          <header className="z-0">
            <Navbar />
          </header>
          <main className="flex">
            <aside className="items-center hidden md:flex">
              <Sidebar />
            </aside>
            <div className="w-full max-h-screen p-3 bg-gray-200 lg:p-4 md:rounded-tl-2xl dark:bg-[#101010]">
              <ApiContextProvider>{children}</ApiContextProvider>
            </div>
          </main>
          <div className="fixed bottom-0 left-0 w-full border-t dark:border-t-gray-700 md:max-w-16 md:hidden">
            <Sidebar />
          </div>
        </body>
      </FontSizeContextProvider>
    </html>
  );
}
