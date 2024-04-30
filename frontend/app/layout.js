import React from "react";
import "./global.css";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import { Poppins } from "next/font/google";

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
    <html lang="en" className={poppins.className}>
      <body>
        <header className="">
          <Navbar />
        </header>
        <main className="flex">
          <aside className="items-center hidden md:flex">
            <Sidebar />
          </aside>
          <div className="w-full h-screen p-3 bg-gray-200 lg:p-4 md:rounded-2xl">
            {children}
          </div>
        </main>
        <div className="fixed bottom-0 left-0 w-full border-t md:max-w-16 md:hidden">
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
