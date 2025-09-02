
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChatData,Message  } from "../page";
import Report from "@/app/categories/[name]/[productdetails]/components/Report";
import { Image as ImageIcon, Mic, Smile, Paperclip , Send,Phone } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';
import VideoCallPopUp from "@/app/categories/[name]/[productdetails]/components/VideoCallPopUp";
interface ChatPageProps {
  selectedChat: ChatData | null;
  setShowChatList: (show: boolean) => void; 
}


const ChatPage: React.FC<ChatPageProps> = ({ selectedChat, setShowChatList }) => {
    const [message,setMessage]=useState('')
    const [showContact,setShowContact]=useState(false)
        const [showReportBtn,setShowReportBtn]=useState(false)


const actions = [
  {
    name: "emoji",
    icon: <Smile size={20} className="text-gray-600" />,
    onClick: () => console.log("Open emoji picker"),
  },
 
  {
    name: "attachment",
    icon: <Paperclip size={20} className="text-gray-600" />,
    onClick: () => console.log("Attach file"),
  },
 
  
  message.trim()!==''
      ? {
          name: "send",
          icon: <Send size={20} className="text-" />,
          onClick: () => {
            console.log("Send message:", message);
            setMessage("");
          },
        }
      : {
          name: "voiceNote",
          icon: <Mic size={20} className="text-gray-600" />,
          onClick: () => console.log("Start recording voice note"),
        },
];
 let broadcast={
        text:
          "Please avoid sharing personal or financial details here. Use clear questions and only deal with verified sellers.",
        time: "April 5, 2024",
      }

const [showPopUp,setShowPopUp]=useState(false)
const [showReport,setShowReport]=useState(false)

console.log(selectedChat)
    const verifiedSeller=true

    let number={
      whatsapp:"913 111 4346",
      phone:'815 772 2944'
    }
    // <a href={`https://wa.me/234${number.whatsapp.replace(/\s+/g, '')}`}>

    const whatsapp =number.whatsapp.replace(/\s+/g, '');
  if (!selectedChat) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 bg-filterBg">
        <p className="text-grey text-[17px]">Select a chat to view messages</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col relative  h-full bg-filterBg  rounded-3xl relative ">
    
      <VideoCallPopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp}/>
      <Report  setShowReport={setShowReport} showReport={showReport}/>

          <div className="pb-3 px-4 flex items-center justify-between bg-white shadow-md round-tl-xl rounded-tr-3xl">

              <div className="flex items-center h-fit   gap-[10px]">
                 
              <Image
                alt={`${selectedChat.vendor} seller`}
                className="h-[45px] w-[45px] aspect-square md:h-[50px] w-[50px]"
                src={'/eze.png'}
                height={100}
                width={100}
              />
              <div className="flex flex-col gap-[6px]">
                <h4 className="text-primary font-[500] text-[12px] leading-[130%]  md:text-[16px]">
                  Excel Home Electronics
                </h4>
                <div className="flex items-center gap-1">
                  {verifiedSeller && (
                    <span className="text-[8px] flex items-center gap-2 text-primary bg-[#DBFCD4] rounded py-1 px-2 w-fit md:text-[11px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
  <path d="M6.38802 7.9108L5.54219 7.07955C5.43524 6.9726 5.30166 6.91913 5.14144 6.91913C4.98122 6.91913 4.84258 6.97746 4.72552 7.09413C4.61858 7.20108 4.5651 7.33719 4.5651 7.50246C4.5651 7.66774 4.61858 7.80385 4.72552 7.9108L5.97969 9.16496C6.09635 9.28163 6.23247 9.33996 6.38802 9.33996C6.54358 9.33996 6.67969 9.28163 6.79635 9.16496L9.27552 6.6858C9.39219 6.56913 9.44799 6.43302 9.44294 6.27746C9.43788 6.12191 9.38208 5.9858 9.27552 5.86913C9.15885 5.75246 9.02041 5.6918 8.86019 5.68713C8.69997 5.68246 8.56133 5.73827 8.44427 5.85455L6.38802 7.9108ZM4.75469 13.19L3.90885 11.7608L2.30469 11.4108C2.15885 11.3816 2.04219 11.3064 1.95469 11.185C1.86719 11.0637 1.83316 10.9299 1.8526 10.7837L2.01302 9.1358L0.919271 7.88163C0.822049 7.77469 0.773438 7.6483 0.773438 7.50246C0.773438 7.35663 0.822049 7.23024 0.919271 7.1233L2.01302 5.86913L1.8526 4.22121C1.83316 4.07538 1.86719 3.9416 1.95469 3.81988C2.04219 3.69816 2.15885 3.62291 2.30469 3.59413L3.90885 3.24413L4.75469 1.81496C4.83247 1.68858 4.93941 1.60341 5.07552 1.55946C5.21163 1.51552 5.34774 1.52291 5.48385 1.58163L7.00052 2.2233L8.51719 1.58163C8.6533 1.5233 8.78941 1.51591 8.92552 1.55946C9.06163 1.60302 9.16858 1.68819 9.24635 1.81496L10.0922 3.24413L11.6964 3.59413C11.8422 3.6233 11.9589 3.69874 12.0464 3.82046C12.1339 3.94219 12.1679 4.07577 12.1484 4.22121L11.988 5.86913L13.0818 7.1233C13.179 7.23024 13.2276 7.35663 13.2276 7.50246C13.2276 7.6483 13.179 7.77469 13.0818 7.88163L11.988 9.1358L12.1484 10.7837C12.1679 10.9295 12.1339 11.0633 12.0464 11.185C11.9589 11.3068 11.8422 11.382 11.6964 11.4108L10.0922 11.7608L9.24635 13.19C9.16858 13.3164 9.06163 13.4015 8.92552 13.4455C8.78941 13.4894 8.6533 13.482 8.51719 13.4233L7.00052 12.7816L5.48385 13.4233C5.34774 13.4816 5.21163 13.489 5.07552 13.4455C4.93941 13.4019 4.83247 13.3167 4.75469 13.19Z" fill="#2DC20F"/>
</svg> Verified Seller
                    </span>
                  )}
                   {/* {selectedChat.online?  */}
              <div className="flex items-center gap-1"> <span className="h-2 w-2 rounded-full bg-green-500"></span>  <span className="text-[11px] font-[400] text-grey h-fit"> {selectedChat.online?'online':`${selectedChat.lastTime}`} </span> 
              </div>
              
                </div>
              </div>
            </div>

            <div className="h-fit flex items-center gap-1 lg:gap-4"> 
                <span className="p-1 rounded-full bg-received cursor-pointer " onClick={(()=>{
                    setShowPopUp(true)
                })}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20.117 7.6277C19.9233 7.60532 19.7272 7.64008 19.553 7.7277L15 10.0027V14.0027L19.553 16.2777C19.7053 16.3538 19.8744 16.3897 20.0445 16.3822C20.2145 16.3746 20.3799 16.3237 20.5248 16.2344C20.6697 16.1451 20.7894 16.0203 20.8725 15.8717C20.9557 15.7232 20.9996 15.5559 21 15.3857V8.6197C20.9997 8.37494 20.9097 8.13878 20.747 7.95595C20.5842 7.77313 20.3601 7.65633 20.117 7.6277Z" fill="#172556"/>
  <path d="M5 5C3.355 5 2 6.355 2 8V16C2 17.645 3.355 19 5 19H13C14.645 19 16 17.645 16 16V8C16 6.355 14.645 5 13 5H5Z" fill="#172556"/>
</svg>
</span>
 <div onClick={(()=>{
  setShowReportBtn(!showReportBtn)
 })} className="p-1 relative cursor-pointer rounded-full bg-received"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10.5 6C10.5 5.79 10.5 5.6865 10.512 5.5995C10.5502 5.32456 10.677 5.0696 10.8733 4.87332C11.0696 4.67704 11.3246 4.55018 11.5995 4.512C11.685 4.5 11.79 4.5 12 4.5C12.21 4.5 12.3135 4.5 12.4005 4.512C12.6754 4.55018 12.9304 4.67704 13.1267 4.87332C13.323 5.0696 13.4498 5.32456 13.488 5.5995C13.5 5.685 13.5 5.79 13.5 6C13.5 6.21 13.5 6.3135 13.488 6.4005C13.4498 6.67544 13.323 6.9304 13.1267 7.12668C12.9304 7.32296 12.6754 7.44982 12.4005 7.488C12.315 7.5 12.21 7.5 12 7.5C11.79 7.5 11.6865 7.5 11.5995 7.488C11.3246 7.44982 11.0696 7.32296 10.8733 7.12668C10.677 6.9304 10.5502 6.67544 10.512 6.4005C10.5 6.315 10.5 6.21 10.5 6ZM10.5 12C10.5 11.79 10.5 11.6865 10.512 11.5995C10.5502 11.3246 10.677 11.0696 10.8733 10.8733C11.0696 10.677 11.3246 10.5502 11.5995 10.512C11.685 10.5 11.79 10.5 12 10.5C12.21 10.5 12.3135 10.5 12.4005 10.512C12.6754 10.5502 12.9304 10.677 13.1267 10.8733C13.323 11.0696 13.4498 11.3246 13.488 11.5995C13.5 11.685 13.5 11.79 13.5 12C13.5 12.21 13.5 12.3135 13.488 12.4005C13.4498 12.6754 13.323 12.9304 13.1267 13.1267C12.9304 13.323 12.6754 13.4498 12.4005 13.488C12.315 13.5 12.21 13.5 12 13.5C11.79 13.5 11.6865 13.5 11.5995 13.488C11.3246 13.4498 11.0696 13.323 10.8733 13.1267C10.677 12.9304 10.5502 12.6754 10.512 12.4005C10.5 12.315 10.5 12.21 10.5 12ZM10.5 18C10.5 17.7915 10.5 17.6865 10.512 17.5995C10.5504 17.3251 10.6772 17.0706 10.8731 16.8746C11.0691 16.6787 11.3236 16.5519 11.598 16.5135C11.6865 16.5015 11.79 16.5015 11.9985 16.5015C12.207 16.5015 12.3135 16.5015 12.399 16.5135C12.6734 16.5519 12.9279 16.6787 13.1239 16.8746C13.3198 17.0706 13.4466 17.3251 13.485 17.5995C13.497 17.6865 13.497 17.7915 13.497 18C13.497 18.2085 13.497 18.3135 13.485 18.4005C13.4466 18.6749 13.3198 18.9294 13.1239 19.1254C12.9279 19.3213 12.6734 19.4481 12.399 19.4865C12.312 19.4985 12.207 19.4985 11.9985 19.4985C11.79 19.4985 11.685 19.4985 11.598 19.4865C11.3236 19.4481 11.0691 19.3213 10.8731 19.1254C10.6772 18.9294 10.5504 18.6749 10.512 18.4005C10.5 18.3135 10.5 18.2085 10.5 18Z" fill="#172556"/>
</svg>
{showReportBtn&&
<div className="py-1 px-2 bg-white border z-10 rounded absolute -top-[4px] right-[30px]">
  <button onClick={(()=>{
  setShowReport(true)
  })}>report</button>
</div>
}
</div>
  
 
             </div>
          </div>
           <div className="fixd left-0 right-0 flex    flex-col  justify-between px-4 pt-2 gap-2 md:flex-row md:gap-4 md:items-center">

             <div className="flex items-center  gap-[10px]">
                
              <Image
                alt={`${selectedChat.vendor} seller`}
                className="h-[40px] w-[40px] aspect-square rounded-full md:w-[50px] md:h-[50px]"
                src={'/product.png'}
                height={100}
                width={100}
              />
              <div className="flex flex-col gap-[6px]">
                <h4 className="text-primary font-[500] text-[11px] leading-[130%] md:text-[16px]">
                  Excel Home Electronics 
                </h4>
              </div>
            </div>
            <h4 className="text-primary font-[600] text-[11px] md:text-[17px]"> {selectedChat.price}  </h4>
             
           
             

<div className="relative w-fit hidden md:block">
  {/* Trigger button */}
  <div
    onClick={() => setShowContact(!showContact)}
    className="cursor-pointer z-10 bg-white py-2 px-4 rounded-[8px] font-[500] border border-primary text-center flex items-center justify-center gap-2 w-52"
  >
    <span className="text-primary flex items-center gap-2">
      <Phone size={18} fill="primary" />
      Show contact
    </span>
    
  </div>

  {/* Dropdown content */}
  {showContact && (
    <div className="fixed flex flex-col gap-5 w-[205px]  bottom-50  bg-white border border-primary rounded-lg shadow-md animate-fadeIn p-3">
    
     <div className="flex items-center justify-between gap-2">  <div className="text-primary font-[500] text-[15px]">{number.phone}</div>
      <div >
        <span className="bg-[#FEF3CC] px-3 py-1 rounded text-sm cursor-pointer">
          Copy
        </span>
      </div> </div>
       <div className="flex items-center justify-between gap-2">  <div className="text-primary font-[500] text-[15px]">{number.whatsapp}</div>
    <a
        target="_blank"
        href={`https://wa.me/+234${whatsapp}`}
  rel="noopener noreferrer"
        className="flex items-center font-[500] gap-2 px-4 py-2 text-primary hover:bg-gray-50 rounded-lg"
      > <FaWhatsapp size={20} className="cursor-pointer" fill="primary" />  </a>
      </div>
    </div>
  )}
</div>

{/* Mobile dropdown (hidden on desktop) */}
<div className="relative w-full md:hidden">
  <div
    onClick={() => setShowContact(!showContact)}
    className="cursor-pointer z-10 bg-white py-[6px] px-2 w-full text-[15px] rounded-[8px] font-[500] border border-primary flex items-center justify-center gap-2"
  >
    <span className="text-primary flex items-center gap-2">
      <Phone size={18} fill="primary"/>
      Show contact
    </span>
   
  </div>

  {/* Dropdown content */}
  {showContact && (
    <div className="absolute flex flex-col gap-5 p-3 left-0 mt-1 w-full z-10 bg-white border border-primary rounded-lg shadow-md animate-fadeIn">
      {/*
        +234 9131 11 4346
    
    </div> */}
      <div className="flex items-center justify-between gap-2">  <div className="text-primary font-[500] text-[15px]">{number.phone}</div>
      <div >
        <a
        href="tel:+2349131114346"
        className="flex items-center font-[500] gap-2 px-4 py-2 text-primary hover:bg-gray-50 rounded-lg"
      > <Phone size={20} className="cursor-pointer" fill="primary" />  </a>

      </div> </div>
      
       <div className="flex items-center justify-between gap-2">    <div className="text-primary font-[500] text-[15px]">{number.whatsapp}</div>
            <a
        target="_blank"
        href={`https://wa.me/${whatsapp}`}
  rel="noopener noreferrer"
        className="flex items-center font-[500] gap-2 px-4 py-2 text-primary hover:bg-gray-50 rounded-lg"
      > <FaWhatsapp size={20} className="cursor-pointer" fill="primary" />  </a>

      </div>
     
    </div>
  )}
</div>






            </div>
      {/* Messages */}
      <div className="flex-1 px-4  overflow-y-scroll">
        <div className="mb-4 mt-8  m-auto flex flex-col items-center justify-center md:w-2/4">
                          <p className="text-[10px] mt-1 opacity-70">{broadcast.time}</p>

             <div
            className={` ${
           
                 "text-center  text-primary bg-transparent border flex gap-2 items-center rounded-md border-primary" // System message
            }  p-3 lg:text-left`}
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 17C12.2833 17 12.521 16.904 12.713 16.712C12.905 16.52 13.0007 16.2827 13 16C12.9993 15.7173 12.9033 15.48 12.712 15.288C12.5207 15.096 12.2833 15 12 15C11.7167 15 11.4793 15.096 11.288 15.288C11.0967 15.48 11.0007 15.7173 11 16C10.9993 16.2827 11.0953 16.5203 11.288 16.713C11.4807 16.9057 11.718 17.0013 12 17ZM12 13C12.2833 13 12.521 12.904 12.713 12.712C12.905 12.52 13.0007 12.2827 13 12V8C13 7.71667 12.904 7.47933 12.712 7.288C12.52 7.09667 12.2827 7.00067 12 7C11.7173 6.99933 11.48 7.09533 11.288 7.288C11.096 7.48067 11 7.718 11 8V12C11 12.2833 11.096 12.521 11.288 12.713C11.48 12.905 11.7173 13.0007 12 13ZM9.075 21C8.80833 21 8.55433 20.95 8.313 20.85C8.07167 20.75 7.859 20.6083 7.675 20.425L3.575 16.325C3.39167 16.1417 3.25 15.929 3.15 15.687C3.05 15.445 3 15.1913 3 14.926V9.076C3 8.80933 3.05 8.55533 3.15 8.314C3.25 8.07267 3.39167 7.86 3.575 7.676L7.675 3.576C7.85833 3.39267 8.071 3.251 8.313 3.151C8.555 3.051 8.809 3.00067 9.075 3H14.925C15.1917 3 15.446 3.05 15.688 3.15C15.93 3.25 16.1423 3.39167 16.325 3.575L20.425 7.675C20.6083 7.85833 20.75 8.071 20.85 8.313C20.95 8.555 21 8.809 21 9.075V14.925C21 15.1917 20.95 15.446 20.85 15.688C20.75 15.93 20.6083 16.1423 20.425 16.325L16.325 20.425C16.1417 20.6083 15.929 20.75 15.687 20.85C15.445 20.95 15.191 21 14.925 21H9.075Z" fill="#172556"/>
</svg> <p className="text-[12px] leading-tight">{broadcast?.text}</p>

           
          </div>
        </div>
        {selectedChat.messages.map((message: Message, index: number) => (
          <div
            key={index}
            className={`mb-4 w-3/4 md:w-2/4 ${
              message.type === "sent"
                ? "ml-auto bg-sent  text-primary rounded-tl-lg rounded-bl-lg rounded-br-lg"
                : message.type === "received"
                ? "mr-auto bg-receive text-primary rounded-tr-lg rounded-bl-lg rounded-br-lg"
                : "hidden text-center text-primary bg-transparent m-auto border rounded-md border-primary" // System message
            }  p-3`}
          >
           <div> <p className="text-[14px]">{message.text}</p>
            {message.time && (
              <p className="text-[10px] mt-1 opacity-70">{message.time}</p>
            )} </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="px-4 fixed left-0 right-0 bottom-0  flex gap-2 items-center shadow border-t border-sent py-2 bg-white  md:relative ">
        <div className=" w-fit flex justify-start gap-3 items-center">
        <div className="flex items-center gap-3">
      {actions.slice(0,2).map((action, index) => (
        <button
          key={index}
          onClick={action.onClick}
          className="p-2 rounded-full bg-emojiBg hover:bg-gray-200"
        >
          {action.icon}
        </button>
      ))}
    </div>
  
</div>
        <div className="flex-[4]">
            <input
          type="text"
          onChange={((e)=>{
            setMessage(e.target.value)
          })}
          placeholder="Type a message..."
          className="w-full p-2 rounded-lg border border-grey focus:outline-none"
        />
        </div>
      <div className="w-fit flex justify-end gap-3 items-center">
        <div className="flex items-center gap-3">
      {actions.slice(2,3).map((action, index) => (
        <button
          key={index}
          onClick={action.onClick}
          className="p-2 rounded-full bg-emojiBg hover:bg-gray-200"
        >
          {action.icon}
        </button>
      ))}
    </div>
  
</div>

      </div>
    </div>
  );
};

export default ChatPage;