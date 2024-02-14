"use client";

import React, { useState } from "react";
import { Upload, Files, ShieldBan } from "lucide-react";
import Image from "next/image";

const SideNav = ({ router }) => {
  const menulist = [
    {
      id: 1,
      name: "upload",
      icon: Upload,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: Files,
      path: "/files",
    },
    {
      id: 3,
      name: "Upgrad",
      icon: ShieldBan,
      path: "/upgrade",
    },
  ];

  return (
    <div className="shadow-sm border-r h-full">
      <div className="p-5 border-b">
        <div className="text-center sm:text-left">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="Logo" width={60} height={50} />
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl ml-1 sm:ml-1">
              <i>RapidSend</i>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col item-center px-6 bg-white mt-4">
        {menulist.map((item, index) => (
          <a href={item.path}>
            <button
              key={item.id}
              className="mt-2 flex gap-2 p-4 px-0 hover:bg-gray-100 w-full text-black
            bg-blue-50"
            
            >
              <i>
                <item.icon />
              </i>
              <h2>{item.name}</h2>
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
