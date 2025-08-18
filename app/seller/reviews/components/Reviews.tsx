
'use client'
import React from "react";
import { useState } from "react";
import Link from "next/link";
const messages = [
  {
    id: 1,
    user: "Adanna Iyke",
    avatar: "https://i.pravatar.cc/100?img=1",
    time: "7 days ago",
    text: "This Buchymix air fryer has made cooking so easy. Very neat, new and original. I’d buy from this seller again.",
    likes: 1,
    comments: 1,
    isMine: false, // flex-start
  },
  {
    id: 2,
    user: "Excel Home Electronics",
    avatar: "https://i.pravatar.cc/100?img=2",
    time: "2 days ago",
    text: "Thank you so much for the review, I really appreciate it!",
    likes: 2,
    comments: 0,
    isMine: true, // flex-end
  },
];

export default function ChatFlow() {
     const options=[{name:'Most recent'},{name:"Earliest"}]
     const [open, setOpen] = useState(false);
      const [selected, setSelected] = useState<string>("Most recent");
  return (
    <div className=" w-full">
        <div className="flex justify-between gap-4 items-center mb-5">
         <h6 className="text-primary font-[700] text-[21px] md:text-[27px]"> {`(87) Reviews`} </h6>

       <div className="flex items-center gap-4">  
      
  
  <div className="relative w-full">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-fit rounded-[4px] py-[8px] px-2 border border-[#CDD0DC] bg-[#E4E5E9] text-[#172556] text-sm"
      >
        {selected}
        {/* Chevron (toggle between open/close) */}
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#172556"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="ml-2"
          >
            <path
              d="M12 6.33594L8 10.3359L4 6.33594H12Z"
              fill="#172556"
              stroke="#172556"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute mt-1 w-fit  rounded-[4px] border border-[#CDD0DC] bg-white shadow-md z-10">
          {options.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setSelected(item.name);
                setOpen(false);
              }}
              className="block w-fit shrink-0 text-left px-3 py-2 text-sm text-[#172556] hover:bg-[#E4E5E9]"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  
   </div>
  
        

     
      </div>
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`w-full flex  ${msg.isMine ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`p-4 border border-borderChat rounded-2xl text-left  w-fit ${
              msg.isMine
                ? "bg-inputBg "
                : "bg-white  mb-4   "
            }`}
          >
            {/* User Info */}
            <div className="flex items-center gap-2 mb-2">
              <img
                src={msg.avatar}
                alt={msg.user}
                className="w-8 h-8 rounded-full"
              />
              <div className="text-sm">
                <p className="font-semibold text-primary text-[17px]">{msg.user}</p>
                <span className="text-xs text-slate-500 text-lef">{msg.time}</span>
              </div>
            </div>

            {/* Message */}
            <p className="text-primary text-[14px] mb-3">{msg.text}</p>

            {/* Like & Comment */}
            <div className="flex items-center gap-4 text-slate-600 text-sm">
              {/* Like Button */}
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M10 6.66667L9.34267 6.55733C9.3268 6.6528 9.3319 6.75057 9.35762 6.84386C9.38334 6.93715 9.42907 7.02373 9.49161 7.09757C9.55416 7.17141 9.63204 7.23075 9.71983 7.27146C9.80762 7.31218 9.90323 7.33329 10 7.33333V6.66667Z"
                    fill="#172556"
                  />
                </svg>
                <span>{msg.likes}</span>
              </div>

              {/* Comment Button */}
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3.9987 13.6667L2.66536 13.6667..."
                    fill="#172556"
                  />
                </svg>
                <span>{msg.comments}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {messages.length>=10&&<div className="flex justify-end">
  <Link href={`#`} className="underline w-fit">
    <p className="text-primary mt-2 cursor-pointer text-[17px] font-[600]">See more </p>
  </Link>
</div>}
    </div>
  );
}
