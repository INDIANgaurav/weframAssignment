"use client"


import React from 'react'
import Navbar from '../Navbar'
import SideNavbar from '../SideNavbar'
import Image from 'next/image'
import { FaCalendarAlt } from "react-icons/fa";
import image from "../../public/image 11.png"
import image2 from "../../public/Ellipse 3.png"
import image3 from "../../public/Rectangle 1729.png"
import { FaArrowLeftLong } from "react-icons/fa6";
import { LuArrowLeftSquare } from "react-icons/lu";
import { useRouter } from 'next/navigation'
const page = () => {

  const router = useRouter()
 

  return (
    <div>
      <SideNavbar />
        

        <div className='ml-[240px] mt-2 '>
          <div className='flex justify-evenly gap-[500px] items-center'>
            <div className='flex items-center gap-2 cursor-pointer' onClick={() => router.push('/')}  >
            <FaArrowLeftLong className='w-[24px]'/>
          <span className='text-[#1D1D1B] font-semibold text-[30px] '>  Stories</span>
            </div>
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
          </div>


<div className='  mt-5 flex justify-evenly gap-[100px] '>
<div className='flex items-center gap-4'>
    <div className='flex items-center gap-2'>
    <Image src={image2}></Image>
    <p>James Robert</p>
    </div>
    <div>
      <h1 className='text-[#58A4FF] text-[22px]     ' > Created on 13 January 2022</h1>
    </div>
    
</div>


<button className='bg-[#FAFAFA]' >Accessibility</button>



</div>
    


        </div>


<div className='ml-[340px] mt-8    '>
  <div className='relative   w-[1400px]  '>

    <Image src={image3} className=' absolute w-[1000px] h-[800px]  object-cover blur-sm  '   ></Image>
    <LuArrowLeftSquare className='absolute  h-10 w-10 text-white mt-[400px] ml-[200px]  ' />
    <Image src={image3} className=' absolute w-[500px] h-[700px]  mt-[50px] ml-[250px]  '   ></Image>
    <LuArrowLeftSquare className='absolute  h-10 w-10 text-white mt-[400px] ml-[760px] rotate-180  ' />
     
  </div>

 z
</div>



    </div>
  )
}

export default page