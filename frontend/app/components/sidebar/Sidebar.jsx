import React from "react";
import Link from "next/link";
import SidebarItem from "./SidebarItem";
import { RxHome } from "react-icons/rx";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { GrSend } from "react-icons/gr";

const Sidebar = () => {
  const path = "/books";
  const links = [
    { href: "/", icon: <RxHome />, text: "Home" },
    { href: "/books", icon: <IoBookOutline />, text: "Books" },
    { href: "/", icon: <MdOutlineBookmarkBorder />, text: "Bookmarks" },
    { href: "/", icon: <RxDashboard />, text: "Dashboard" },
    { href: "/", icon: <GrSend />, text: "Find Hadith" },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-[90vh] px-5 gap-6">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`${
            path === link.href ? "text-white primary-bg " : " text-gray-500"
          }   ${
            path !== link.href ? "hover:text-green-600 hover:bg-blue-50" : " "
          } p-2 rounded-md bg-white`}
        >
          <span className={`text-3xl `}>{link.icon}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
