
'use client'
import { usePathname } from 'next/navigation';
import {User_Routes} from '../config/sellerroutes'
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

import { BadgeCheck, MapPin } from 'lucide-react';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoLocationSharp,IoLogOut  } from "react-icons/io5";
import LogoutPopUp from '@/app/components/LogoutPopUp';
const Aside=()=>{
     const [isCollapsed, setIsCollapsed] = useState(false);
     const [showLogout,setShowLogout]=useState(false)
const pathname = usePathname();
const seller={
    name:"BrightTech Gadgets",
    location:"Alaba Int’l Market, Lagos ",
    btn:  <button
      
      className=" py-[8px] px-5  text-[14px] rounded-[8px] font-300 text-center w-full bg-white text-primary rounded-md"
    >       Edit store details 
     </button>,
     img:"/store.png",
     verify:true,
}

  return <div className='hidden lg:block'>
    <LogoutPopUp showLogout={showLogout} setShowLogout={setShowLogout} />
      <div className={`hidden lg:block h-[100vh]  w-64 border bg-red p-5`}></div>
     <aside
  className={` px-6 py-10  
     bg-primary overflow-y-scroll no-scrollbar text-white fixed  h-[100vh] left-0 top-0
    transition-all duration-300
    w-68
  `}
>

    <div className='mx-auto mb-20  flex flex-col items-center justify-center'>
       <div className='flex flex-col gap-3 items-center justify-center'>
        <Image className='rounded-full' alt={seller.name} src={seller.img} width={140} height={140} />
        <h4 className='flex gap-2 items-center'> {seller.name} {seller.verify&&      <RiVerifiedBadgeFill className='text-green-400'/>
} </h4>
      <div>  <p className='text-xs font-[100] flex gap-2 items-center'> <IoLocationSharp  size={18} />
 {seller.location} </p></div>
        <div>
            {seller.btn}
        </div>
       </div>
    </div>
  

  <div className=" flex flex-col gap-10">
    <nav className="flex-1 overflow-y-auto ">
      <ul className='flex flex-col gap-10'>
        {User_Routes.map((route) => (
          <li key={route.path}>
            <a
              href={route.path}
              className={`
                flex items-center gap-3 font-[200]  pr-3 pl-8 rounded-lg transition-colors
                ${pathname === route.path ? 'bg-sellerAsideActiveBg py-3 text-primary ' : 'hover:bg-white/10'}
                ${isCollapsed ? 'justify-center' : ''}
              `}
            >
              <span className={``}>
                {route.icon}
              </span>
              {!isCollapsed && route.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>

    {/* Logout Button - Added at the bottom */}
    <button
     onClick={(()=>{
        setShowLogout(true)
     })}
      className={`
       flex items-center gap-3 pr-3 pl-8  rounded-lg transition-colors
        bg-red-500 hover:bg-red-600 text-white
      `}
    >
     

      <IoLogOut  size={20} />
      {!isCollapsed && "Logout"}
    </button>
  </div>
</aside>
  </div>
}
export default Aside