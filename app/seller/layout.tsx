

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
        <div className="flex-1 container flex flex-col gap-8  min-h-screen bg-seller md:py-6">
                   <div className="lg:flex items-center lg:justify-between"><div className="lg:w-1/2"> <SearchPage /> </div>
                   
                    <div className="hidden lg:flex items-center gap-3">
                        <span className="p-2 rounded-full bg-notificationSellerBg"> <Link href={`/seller/notification`}><IoNotifications size={20} className="text-primary" /></Link> </span>
                                                <span className="p-2 rounded-full bg-notificationSellerBg"> <Link href={`/seller/communication`}> <SiGooglemessages size={20} className="text-primary" /></Link>  </span>

                        </div> </div>

<div>
              {children}
</div>
          
        </div>
      </main>
    );
  };
  
export default UserLayout