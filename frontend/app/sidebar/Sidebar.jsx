"use client";
import Link from "next/link";
import React from "react";
import { RxHome } from "react-icons/rx";
import { TbBook, TbBookmark, TbBooks } from "react-icons/tb";
import { GrSend } from "react-icons/gr";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const links = [
    {
      lebel: "Home",
      href: "/",
      icon: <RxHome />,
    },
    {
      lebel: "Books",
      href: "/books",
      icon: <TbBooks />,
    },
    {
      lebel: "Subjects",
      href: "/subjects",
      icon: <TbBook />,
    },
    {
      lebel: "Bookmarks",
      href: "/bookmarks",
      icon: <TbBookmark />,
    },
    {
      lebel: "News Letter",
      href: "/news-letter",
      icon: <GrSend />,
    },
  ];
  const path = usePathname();
  return (
    <aside className="flex w-full p-4 bg-white md:items-center justify-evenly md:flex-col md:gap-y-10">
      {links.map((link) => (
        <Link
          key={link.lebel}
          href={link.href}
          className={`${
            path === link.href
              ? " bg-primary text-white "
              : "hover:text-primary hover:bg-gray-100"
          } text-2xl md:text-3xl text-gray-500 p-2  rounded-lg`}
        >
          {link.icon}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
