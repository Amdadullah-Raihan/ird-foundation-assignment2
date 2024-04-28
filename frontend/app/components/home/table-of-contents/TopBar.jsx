"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const TopBar = () => {
  const path = usePathname();
  const links = [
    {
      url: "/books",
      lebel: "Books",
    },
    {
      url: "/books/chapters",
      lebel: "chapters",
    },
  ];
  return (
    <div className="grid h-10 grid-cols-2 border-b ">
      {links.map((link) => (
        <Link
          key={link.url}
          className={`${path === link.url ? "primary-bg text-white" : ""} ${
            path === "/books" ? "rounded-tl-2xl" : " rounded-tr-2xl"
          } flex items-center justify-center `}
          href={link.url}
        >
          {link.lebel}
        </Link>
      ))}
    </div>
  );
};

export default TopBar;
