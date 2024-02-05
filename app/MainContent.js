"use client";

import React from "react";
// import Image from 'next/image'
// import projectIcon from "../public/project icon.png";
// import clientIcon from "../public/client icon.png";
// import adsIcon from "../public/ads.png";
// import notificationIcon from "../public/Notificaton icon.png";
import { GrArticle } from "react-icons/gr";
import { BiCategoryAlt } from "react-icons/bi";
import { MdAutoStories } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";
import HeaderSection2 from "./HeaderSection2";
import HeaderSection3 from "./HeaderSection3";

// import Team from "./Team";/

const MainContent = () => {
  const arr = [
    {
      id: 1,
      title: "Articles",
      updates: "4950 New Updates",
      icon: <GrArticle />,
    },
    {
      id: 2,
      title: "Categories",
      updates: "10,275 New Updates",
      icon: <BiCategoryAlt />,
    },
    {
      id: 3,
      title: "Stories",
      updates: "4193 New Updates",
      icon: <MdAutoStories />,
    },
    {
      id: 4,
      title: "Advertisement",
      updates: "275 New Updates",
      icon: <RiAdvertisementFill />,
    },
  ];

  return (
    <div className="mt-10 ml-5">
      <div className=" mb-3 ">
        <h1 className="text-xl font-bold">Hello Admin,</h1>
        <h5 className="text-[#A0A3BD]">this is what we got you for today</h5>
      </div>

      <div className="flex  justify-around cursor-pointer ">
        {arr.map((item) => {
          return (
            <div>
              <div className="flex items-center space-x-2  ">
                <div className=" header-icons ">{item.icon}</div>
                <div>
                  <h1>{item.title}</h1>
                  <p>{item.updates}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col   ">
        {/* section2 */}

        <HeaderSection2 />

        {/* section 3 */}

        <HeaderSection3 />
      </div>

      {/* kamals card */}
      {/* <div>

    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">7 Rules of Effective Branding</div>
        <p className="text-gray-700 text-base">
          Why Branding matters for your Business
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Branding</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Communication</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Branding</span>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          View
        </button>
      </div>
    </div>
export default ArticleCard;

    </div> */}
    </div>
  );
};

export default MainContent;
