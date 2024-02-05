// import Image from "next/image";
import Link from "next/link"
import Navbar from "./Navbar";
import SideNavbar from "./SideNavbar";
import MainContent from "./MainContent";
export default function Home() {
  return (
   <div  className="w-full overflow-hidden">
    <div>

     <SideNavbar />
     <Navbar   />
    </div>

      <div className="   ml-[240px] mt-5">
         <MainContent/>
      </div>


     
     
   </div>
   
  );
}
