// Import the useClient pragma at the top of your file
"use client";

import React, { useState } from "react";
import { X } from "lucide-react"; // Assuming X is an icon for deletion
import { UserButton } from "@clerk/nextjs";
import { Upload, Files, ShieldBan, AlignJustify} from "lucide-react";
import Image from "next/image";

const TopHeader = () => {
  // Use the useClient pragma to mark this component as a client component


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

  const [showSidebar, setShowSidebar] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
    setActiveIndex(null); // Reset activeIndex when closing the sidebar
  };



  return (
    <div className="flex p-5 border-b items-center justify-between md:justify-end">
      <div className="md:hidden cursor-pointer" onClick={toggleSidebar}>
        {showSidebar ? <X size={24} /> : <AlignJustify size={24} />}
      </div>
      <div className="flex items-center md:hidden">
        <Image src="/logo.svg" alt="Logo" width={50} height={50} />
        <button>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl ml-1 sm:ml-1">
            <i>RapidSend</i>
          </h1>
        </button>
      </div>
      <UserButton />
      {showSidebar && (
        <div className=" md:hidden flex fixed bottom-0 left-0 h-16 w-full bg-slate-100 p-3">
          
        {menulist.map((item, index) => (
            <a href={item.path}>
          <button
            key={item.id}
            className={`  texts-center mb-3 ml-4 flex gap-2 p-4 px-0 hover:bg-gray-100 w-full text-black
              ${activeIndex === index ? 'bg-blue-50 text-primary' : null}`}
            onClick={() => setActiveIndex}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </button>
          </a> 
        ))}
         
        </div>
      )}
    </div>
  );
};

export default TopHeader;
