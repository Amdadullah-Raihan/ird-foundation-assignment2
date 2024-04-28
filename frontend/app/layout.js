import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BooksContextProvider } from "./contexts/BooksContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iHadis ",
  description: "Developed by Amdadul Islam Raihan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BooksContextProvider>
          <Navbar />
          <div className="flex">
            <Sidebar />
            <div className="w-full p-6 bg-blue-50 rounded-2xl">{children}</div>
          </div>
        </BooksContextProvider>
      </body>
    </html>
  );
}
