'use client';

import Image from "next/image";
import { Video } from "lucide-react";
import { IoVideocam } from "react-icons/io5";
import { LuDot } from "react-icons/lu";

type Call = {
  id: number;
  name: string;
  avatar: string;
  status: "past" | "incoming";
  message: string;
  time: string;
  date?: string;
};

const calls: Call[] = [
    {
    id: 2,
    name: "Chuks Oyinyechi",
    status: "incoming",
        avatar: "/eze.png",
    message: "Requesting a video call",
    time: "00:12",
  },
  {
    id: 1,
    name: "Lola Paulo",
    avatar: "/eze.png",
    status: "past",
    message: "You had a video call",
    time: "05:57",
    date: "Yesterday",
  },
  
];

const Page = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {calls.map((item) => (
        <div
          key={item.id}
          className="w-full flex flex-col gap-4  rounded-xl order border-[#E3E4E5] bg-white px-6 py-6 shadow-sm"
        >
          {/* Top Section */}
          <div className="flex items-start justify-between gap-3 flex-col md:flex-row">
            {/* Left: Avatar + Info */}
            <div className="flex items-center gap-3">
              <Image
                src={item.avatar}
                alt={item.name}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-primary text-[14px]">{item.name}</p>
                <p
                  className={`text-[10px] flex items-center gap-1 font-[300] `}
                >
                    <span className={` p-1 rounded-full ${
                    item.status === "incoming"
                      ? "bg-red"
                      : "bg-pause"
                  }`}> </span>
                  {/* <LuDot className={` ${
                    item.status === "incoming"
                      ? "text-red"
                      : "text-pause"
                  }`} size={20} /> */}
                  {item.message}
                </p>
              </div>
            </div>

            {/* Right: Time + Icon */}
           <div className="w-full mt-2 md:mt-0 md:w-fit"> <div
              className={`flex w-full items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm ${
                item.status === "incoming"
                  ? "border-liveColor border-1 bg-videoCallActiveBtnBg text-liveColor"
                  : "border-videoCallInactiveColor bg-videoCallInactiveBg text-videoCallInactiveColor"
              }`}
            > 
 
              <IoVideocam
                size={24}
                className={ `
                  ${item.status === "incoming"
                    ? "text-liveColor"
                    : "text-videoCallInactiveColor" }`
                }
              />
              <span>{item.time}</span>
            </div>
             
              <p className="mt-1 flex justify-end text-xs text-videoCallInactiveColor"> {item.date? `${item.date}`:`ongoing`} </p>
            
            
            </div>
          </div>

          {/* Footer Buttons */}
          <div className=" flex flex-col items-center gap-2 md:mt-4">
            {item.status === "past" ? (
              <>
                <button className="w-full rounded-lg bg-[#0a1a4f] py-3 text-white">
                  Go to chat
                </button>
                <button className="text-sm font-medium text-[#0a1a4f]  underline">
                  Request video call
                </button>
              </>
            ) : (
              <>
                <button className="w-full rounded-lg bg-[#0a1a4f] py-3 text-white">
                  Join now
                </button>
                <button className="text-sm font-medium underline text-red">
                  Decline
                </button>
              </>
            )}

            {/* Optional Date for past calls */}
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
