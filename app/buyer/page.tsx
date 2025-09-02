
"use client";
import { useState } from "react";
import Profile from "./components/Profile";
import Notifications from "./components/Notifications";
import Link from "next/link";
import { User, Bell, Globe, HelpCircle,ArrowLeft, } from 'lucide-react';
import Language from "./components/Language";
import LogoutPopUp from "../components/LogoutPopUp";
const Page = () => {
  const [activePage, setActivePage] = useState<string>("profile");
  const [showMenu, setShowMenu] = useState(true); // mobile: show sidebar first
const [showLogout,setShowLogout]=useState(false)

  
    const menuItems = [
      { id: 'profile', label: 'Profile Settings', icon: <User size={20} />,component:     <Profile   /> },
      { id: 'notifications', label: 'Notification Preferences', icon: <Bell size={20} />, component:<Notifications  /> },
      { id: 'language', label: 'Language Preferences', icon: <Globe size={20} />,component:<Language  /> },
      { id: 'support', label: 'Help & Support', icon: <HelpCircle size={20} /> },
    ];


  return (
    <main className="container  h-fit flex flex-col gap-2 md:gap-16 ">
        <LogoutPopUp  showLogout={showLogout} setShowLogout={setShowLogout} />
      {/* --- Desktop: sidebar + content side-by-side --- */}
      <div className="flex flex-col gap-4">
       {activePage=="profile"? <div className="flex items-center">
        <Link
          href="/"
          className="text-primary text-[14px] font-semibold flex items-center gap-2"
        >
          <span className="bg-[#E9ECF4] p-2 rounded-full">
            <ArrowLeft size={16} className="text-primary" />
          </span>
          Back to homepage
        </Link>
      </div>: <div className="flex items-center">
        <p
        //   href="/"
          className="text-primary text-[14px] font-semibold flex items-center gap-2"
          onClick={(()=>{
            setActivePage('profile')
          })}
        >
          <span className="bg-[#E9ECF4] p-2 rounded-full">
            <ArrowLeft size={16} className="text-primary" />
          </span>
          Back to settings and account 
        </p>
      </div>}

               <div className={`${activePage=='profile'?``:`hidden md:block`} mb-5 md:mb-0`}>
                    <h6 className="text-primary  font-[700] text-[21px]  md:text-[33px]"> Settings and account   </h6>
    <p
            className="text-grey max-w-xl"
            style={{ fontSize: 17, fontWeight: 400, fontStyle: "normal" }}
          >
         Keep your profile up to date so sellers know who they’re chatting with.
          </p>
               </div>

   


  </div>
      
      <section className="lg:px-16">
        <div className="hidden  md:flex gap-5 w-full">
        <aside className="w-64 flex flex-col gap-3 bg-neatBg h-fit bg-gray-100 p-3 rounded-md">
          {menuItems.map((item) => (
           
           <button   key={item.id}
              className={`p-3  w-full flex items-center gap-4 rounded-md text-sm font-medium transition text-left cursor-pointer text-primary hover:bg-gray-400 rounded-md ${
                activePage === item.id ? "bg-active" : ""
              }`}
              onClick={() => setActivePage(item.id)}  >   <span className={`flex  text-primary items-center gap-2 ${item.id=='logout'?`text-red-500`:``}`}>
              {item.icon}
            </span>   <span className="text-[15px]">{item.label}</span> </button>
          
          ))}
          <div className='flex gap-2 items-center pl-2' > 
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C5.20435 2 4.44129 2.31607 3.87868 2.87868C3.31607 3.44129 3 4.20435 3 5V19C3 19.7956 3.31607 20.5587 3.87868 21.1213C4.44129 21.6839 5.20435 22 6 22H12C12.7956 22 13.5587 21.6839 14.1213 21.1213C14.6839 20.5587 15 19.7956 15 19V5C15 4.20435 14.6839 3.44129 14.1213 2.87868C13.5587 2.31607 12.7956 2 12 2H6ZM16.293 7.293C16.4805 7.10553 16.7348 7.00021 17 7.00021C17.2652 7.00021 17.5195 7.10553 17.707 7.293L21.707 11.293C21.8945 11.4805 21.9998 11.7348 21.9998 12C21.9998 12.2652 21.8945 12.5195 21.707 12.707L17.707 16.707C17.5184 16.8892 17.2658 16.99 17.0036 16.9877C16.7414 16.9854 16.4906 16.8802 16.3052 16.6948C16.1198 16.5094 16.0146 16.2586 16.0123 15.9964C16.01 15.7342 16.1108 15.4816 16.293 15.293L18.586 13H10C9.73478 13 9.48043 12.8946 9.29289 12.7071C9.10536 12.5196 9 12.2652 9 12C9 11.7348 9.10536 11.4804 9.29289 11.2929C9.48043 11.1054 9.73478 11 10 11H18.586L16.293 8.707C16.1055 8.51947 16.0002 8.26516 16.0002 8C16.0002 7.73484 16.1055 7.48053 16.293 7.293Z" fill="#E30808"/>
</svg>
    
                     <span className='text-[14px] font-400 text-red cursor-pointer' onClick={(()=>{
                    //     setShowPopUp(false)
                      setShowLogout(true)
                    
                     })}>Logout</span>

     </div>
        </aside>
{/*   */}
        {/* Content */}
        <section className="flex-1 overflow-y-auto rounded-md">              {menuItems.find((m) => m.id === activePage)?.component}
</section>
      </div>

      {/* --- Mobile: show either sidebar OR content --- */}
      <div className="flex  md:hidden w-full">
        {showMenu ? (
          // Sidebar only
           <aside className=" flex w-full flex-col gap-3 bg-neatBg h-fit  p-3 rounded-md md:w-64">
          {menuItems.map((item) => (
           
           <button   key={item.id}
              className={`p-2  w-full flex items-center gap-4 rounded-md text-sm font-medium transition text-left cursor-pointer text-primary hover:bg-gray-400 rounded-md ${
                activePage === item.id ? "bg-active" : ""
              }`}
              onClick={() => {
                setActivePage(item.id)
                setShowMenu(false)
              }}  >   <span className={`flex text-primary items-center gap-2 ${item.id=='logout'?`text-red-500`:``}`}>
              {item.icon}
            </span>   {item.label}</button>
          
          ))}
          <div className='flex gap-2 items-center pl-2' > 
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C5.20435 2 4.44129 2.31607 3.87868 2.87868C3.31607 3.44129 3 4.20435 3 5V19C3 19.7956 3.31607 20.5587 3.87868 21.1213C4.44129 21.6839 5.20435 22 6 22H12C12.7956 22 13.5587 21.6839 14.1213 21.1213C14.6839 20.5587 15 19.7956 15 19V5C15 4.20435 14.6839 3.44129 14.1213 2.87868C13.5587 2.31607 12.7956 2 12 2H6ZM16.293 7.293C16.4805 7.10553 16.7348 7.00021 17 7.00021C17.2652 7.00021 17.5195 7.10553 17.707 7.293L21.707 11.293C21.8945 11.4805 21.9998 11.7348 21.9998 12C21.9998 12.2652 21.8945 12.5195 21.707 12.707L17.707 16.707C17.5184 16.8892 17.2658 16.99 17.0036 16.9877C16.7414 16.9854 16.4906 16.8802 16.3052 16.6948C16.1198 16.5094 16.0146 16.2586 16.0123 15.9964C16.01 15.7342 16.1108 15.4816 16.293 15.293L18.586 13H10C9.73478 13 9.48043 12.8946 9.29289 12.7071C9.10536 12.5196 9 12.2652 9 12C9 11.7348 9.10536 11.4804 9.29289 11.2929C9.48043 11.1054 9.73478 11 10 11H18.586L16.293 8.707C16.1055 8.51947 16.0002 8.26516 16.0002 8C16.0002 7.73484 16.1055 7.48053 16.293 7.293Z" fill="#E30808"/>
</svg>
    
                     <span className='text-[14px] cursor-pointer font-400 text-red' onClick={(()=>{
                      setShowLogout(true)
                    
                     })}>Logout</span>

     </div>
        </aside>
        ) : (
          <section className="w-full">
                         {menuItems.find((m) => m.id === activePage)?.component}

          </section>
        )}
      </div>
      </section>
    </main>
  );
};

export default Page;
