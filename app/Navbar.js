import React from "react";
import Image from 'next/image'
import { FaCalendarAlt } from "react-icons/fa";
import image from "../public/image 11.png"
const Navbar = () => {
  const current = new Date();
  const date = `${current.getDate()}-${
    current.getMonth() + 1
  }-${current.getFullYear()}`;
  return (
    <>
      <div className="bg-gray-200  p-2 w-full ml-[240px]">
        <div className="container ">
          <div className="flex items-center gap-2  ">
            <div className="ml-4 flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 p-2 rounded-md outline-none"
              />
            </div>
            <div className="flex  ml-[500px] items-center gap-1 border border-gray-400 rounded-md  p-2  ">
              <h1 className="text-black"> {date}</h1>
              <FaCalendarAlt className="calendar text-blue-600 font-bold" />
            </div>


            <div>
              
              
<button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className=" w-[297px]  flex justify-evenly items-center text-sm pe-1 font-medium text-gray-900 rounded-md hover:text-blue-600   border border-slate-700 p-2   " type="button">
 <div className="flex items-center">

<Image
      src={image}
      width={25}
      height={25}
      className="rounded-sm "
      alt="Picture of the author"
      />
 
 <h1>Akshita Patel</h1>
      </div>
<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

 
<div id="dropdownAvatarName" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div class="font-medium ">Pro User</div>
      <div class="truncate">name@flowbite.com</div>
    </div>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div class="py-2">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
</div>



            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
