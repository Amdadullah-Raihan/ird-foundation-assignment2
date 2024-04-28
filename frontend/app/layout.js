import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iHadis ",
  description: "Developed by Amdadul Islam Raihan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex">
          <div className="hidden md:block">
            {" "}
            <Sidebar />
          </div>
          <div className="w-full p-6 bg-blue-50 rounded-2xl">{children}</div>
        </div>
        <div className="fixed bottom-0 block w-full py-5 bg-white border-t-2 border-t-[#2B9E76] pt md:hidden ">
          {" "}
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
