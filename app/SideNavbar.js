"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { LuMonitorSmartphone } from "react-icons/lu";
import { FaChartLine } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { useRouter } from "next/navigation";

const SideNavbar = () => {
  const router = useRouter();
 
  return (
    <div
      className="p-6 w-1/4  h-screen bg-gray-100 z-20 fixed top-0 
      lg:w-60 lg:left-0 peer:transition ease-out delay-150 duration-200  "
    >
      <div className="flex flex-col justify-start items-center text-black   ">
        <h1 className="text-base text-center cursor-pointer font-bold text-black border-b border-gray-500  w-full">
          Sidebar
        </h1>
        <div className="my-4 border-b w-full border-gray-100 ">
          <Link href="/"
            className="flex  justify-start items-center gap-4 pl-5 hover:bg-[#7950F2] hover:text-white
  p-2  rounded-md group cursor-pointer  hover:shadow-lg m-auto "
            
          >
            <GoHome />
            <h3>Dahsboard</h3>
          </Link>
        </div>
        <div className="my-4 border-b w-full border-gray-100  ">
          <Link
            href="/content"
            className="flex  justify-start items-center gap-4 pl-5 hover:bg-[#7950F2] hover:text-white
            -mb-9  p-2 rounded-md group cursor-pointer  hover:shadow-lg m-auto "
          >
            <IoDocumentTextOutline />
            <h3>Content</h3>
          </Link>
        </div>

        <div className="my-4 border-b w-full border-gray-100  ">
          <Link
            href="/team"
            className="flex  justify-start items-center gap-4 pl-5 hover:bg-[#7950F2] hover:text-white
            -mb-9  p-2 rounded-md group cursor-pointer  hover:shadow-lg m-auto "
          >
            <RiTeamLine />
            <h3>Team</h3>
          </Link>
        </div>

        <div className="my-4 border-b w-full border-gray-100  ">
          <div
            className="flex  justify-start items-center gap-4 pl-5 hover:bg-[#7950F2] hover:text-white
  p-2 -mb-9 rounded-md group cursor-pointer  hover:shadow-lg m-auto "
          >
            <FaRegUser />
            <h3>User</h3>
          </div>
        </div>
        <div className="my-4 border-b w-full border-gray-100  ">
          <div
            className="flex  justify-start items-center gap-4 pl-5 hover:bg-[#7950F2] hover:text-white
  p-2 -mb-9 rounded-md group cursor-pointer  hover:shadow-lg m-auto "
          >
            <LuMonitorSmartphone />
            <h3>App/Web</h3>
          </div>
        </div>
        <div className="my-4 border-b w-full border-gray-100  ">
          <div
            className="flex  justify-start items-center gap-4 pl-5 hover:bg-[#7950F2] hover:text-white
  p-2  -mb-9 rounded-md group cursor-pointer  hover:shadow-lg m-auto "
          >
            <FaChartLine />
            <h3>Analytics</h3>
          </div>
        </div>
        <div className="my-4 border-b w-full border-gray-100 ">
          <div
            className="flex  hover:text-white justify-start items-center gap-4 pl-5 hover:bg-[#7950F2]
  p-2 -mb-9 rounded-md group cursor-pointer  hover:shadow-lg m-auto "
          >
            <FaRegCirclePlay />
            <h3>Media</h3>
          </div>
        </div>
        <div className="my-4 border-b w-full border-gray-100 ">
          <div
            className="flex  hover:text-white justify-start items-center gap-4 pl-5 hover:bg-[#7950F2]
  p-2 -mb-9 rounded-md group cursor-pointer  hover:shadow-lg m-auto "
          >
            <IoNotificationsCircleOutline />
            <h3>Notification</h3>
          </div>
        </div>
        <div className="my-4 border-b w-full border-gray-100 ">
          <div
            className="flex  hover:text-white justify-start items-center gap-4 pl-5 hover:bg-[#7950F2]
  p-2 -mb-9 rounded-md group cursor-pointer  hover:shadow-lg m-auto "
          >
            <IoMdSettings />
            <h3>Settings</h3>
          </div>
        </div>
      </div>
      <div className="flex  justify-start items-center gap-4 pl-5 text-black bg-[#E8E9FF] hover:bg-[#]  p-2  mt-[200px] rounded-md group cursor-pointer  hover:shadow-lg m-auto ">
        <BiSupport />
        <h3>Contact Support</h3>
      </div>
    </div>
  );
};

export default SideNavbar;
