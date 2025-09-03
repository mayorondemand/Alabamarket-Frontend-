

import Aside from "./components/Aside";
import Link from "next/link";
import { MapPin, Heart, User, Bell,MessageSquare,MessageSquareText } from 'lucide-react';
import { SiGooglemessages } from "react-icons/si";

import { IoNotifications } from "react-icons/io5";

import SearchPage from "../components/Buyers/Search";

const UserLayout= ({ children }) => {
 

    return (
    <main className="flex ">
<div>
    <Aside />
</div>
        <div className="flex-1 px-14  flex flex-col gap-8  min-h-screen bg-seller md:py-6">
                   <div className="lg:flex items-center lg:justify-between"><div className="lg:w-1/2"> <SearchPage /> </div>
                   
                    <div className="hidden lg:flex items-center gap-3">
                        <span className="p-2 rounded-full bg-notificationSellerBg"> <IoNotifications size={20} className="text-primary" /> </span>
                                                <span className="p-2 rounded-full bg-notificationSellerBg"> <SiGooglemessages size={20} className="text-primary" />  </span>

                        </div> </div>

<div>
              {children}
</div>
          
        </div>
      </main>
    );
  };
  
export default UserLayout