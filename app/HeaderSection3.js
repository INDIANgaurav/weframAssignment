 



import React from "react";
import Image from "next/image";

import img from "../public/Frame 1000001069.jpg";

const HeaderSection3 = () => {
  const cards = [
    {
      image: img,
      date: "20 sep 2017",

      title: "7 Rules of Effective Branding",
      desc: "why branding is matter in business",
      Hashtags: ["Branding", "Branding", "Branding", "Branding"],
      bytton1: "Created",
      button2: "view",
    },
    {
      image: img,
      date: "20 sep 2017",

      title: "7 Rules of Effective Branding",
      desc: "why branding is matter in business",
      Hashtags: ["Branding", "Branding", "Branding", "Branding"],
      bytton1: "Created",
      button2: "view",
    },
    {
      image: img,
      date: "20 sep 2017",

      title: "7 Rules of Effective Branding",
      desc: "why branding is matter in business",
      Hashtags: ["Branding", "Branding", "Branding", "Branding"],
      bytton1: "Created",
      button2: "view",
    },
    {
      image: img,
      date: "20 sep 2017",

      title: "7 Rules of Effective Branding",
      desc: "why branding is matter in business",
      Hashtags: ["Branding", "Branding", "Branding", "Branding"],
      bytton1: "Created",
      button2: "view",
    },
    {
      image: img,
      date: "20 sep 2017",

      title: "7 Rules of Effective Branding",
      desc: "why branding is matter in business",
      Hashtags: ["Branding", "Branding", "Branding", "Branding"],
      bytton1: "Created",
      button2: "view",
    },
  ];
  return (
    <div>
      <div className="flex justify-between mt-10  mb-5">
        <h1>Top Articles </h1>
        <button className="text-[#9058FF] font-semibold text-md  ">See All</button>
      </div>

      <div className="flex gap-[20px]">
        {cards.map((items , index) => {
          return (
            <div key={index} className="w-[450px] h-[500px] ">
              <Image src={items.image} alt="photo" width={420} height={220} />

              <div className="flex justify-start gap-3">
                <h1 className="text-[#9058FF]">Business</h1>
                <h2>{items.date}</h2>
              </div>

              <div className="flex gap-3 item-center   ">
                <div>
                  <h1 className="text-[20px] font-semibold"> {items.title}</h1>
                  <p className="text-[#A0A3BD] ">{items.desc}</p>
                </div>
                <div>
                  <button
       className="bg-[#E3D5FF] text-[#7950F2] p-1 rounded-sm  "
                  >
                    {items.bytton1}
                  </button>
                </div>
              </div>

     <div  className="flex text-md gap-2 w-[380px] font-semibold bg-[#F8FAFB] text-[#A0A3BD] ">
                {items.Hashtags.map((item , index) => {
                  return (
                    <div key={index}>
                      <div>{item}</div>
                    </div>
                  );
                })}
              </div>

              <button className="  w-[300px]  ml-5 mt-1 bg-[#E8E9FF] ">{items.button2}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderSection3;
