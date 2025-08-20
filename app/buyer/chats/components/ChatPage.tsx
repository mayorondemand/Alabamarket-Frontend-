
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChatData,Message  } from "../page";
import Link from "next/link";
// Rename lucide-react's Image
import { Image as ImageIcon,  Mic, Smile, Paperclip , Send, MessageSquareText,Phone,AlertCircle, createLucideIcon, ArrowLeft,CheckCircle, MessageCircle } from "lucide-react";



import VideoCallPopUp from "@/app/categories/[name]/[productdetails]/components/VideoCallPopUp";
interface ChatPageProps {
  selectedChat: ChatData | null;
  setShowChatList: (show: boolean) => void; // To toggle back to ChatList on mobile
}


const ChatPage: React.FC<ChatPageProps> = ({ selectedChat, setShowChatList }) => {
    const [message,setMessage]=useState('')
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
const [showPopUp,setShowPopUp]=useState(false)
console.log(selectedChat)
    const verifiedSeller=true
  if (!selectedChat) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 bg-filterBg">
        <p className="text-grey text-[17px]">Select a chat to view messages</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col relative h-full bg-filterBg rounded-3xl relative">
      {/* Header */}
      {/* <div className="flex items-center gap-3 p-4 border-b border-grey">
      
        <div className="relative w-10 h-10 shrink-0">
          <Image
            src={selectedChat.avatar}
            alt={selectedChat.vendor}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <p className="text-[16px] font-[600] text-primary">
            {selectedChat.vendor} omo 
          </p>
          <p className="text-[14px] font-[400] text-grey">
            {selectedChat.product} - {selectedChat.price}
          </p>
        </div>
      </div> */}
{/* <Link href={`/profile`}> */}
      <VideoCallPopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp}/>

          <div className="py-4 px-4 flex items-center justify-between bg-white shadow-md round-tl-xl rounded-tr-3xl">

              <div className="flex items-center   gap-[10px]">
                  <button
          className="lg:hidden p-2"
          onClick={() => setShowChatList(true)} 
        >
          <ArrowLeft size={20} className="text-primary" />
        </button>
              <Image
                alt={`${selectedChat.vendor} seller`}
                className="h-[50px] w-[50px] aspect-square"
                src={'/eze.png'}
                height={100}
                width={100}
              />
              <div className="flex flex-col gap-[6px]">
                <h4 className="text-primary font-[500] text-[16px] leading-[130%]">
                  Excel Home Electronics
                </h4>
                <div>
                  {verifiedSeller && (
                    <span className="text-[11px] flex items-center gap-2 text-primary bg-[#DBFCD4] rounded py-1 px-2 w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
  <path d="M6.38802 7.9108L5.54219 7.07955C5.43524 6.9726 5.30166 6.91913 5.14144 6.91913C4.98122 6.91913 4.84258 6.97746 4.72552 7.09413C4.61858 7.20108 4.5651 7.33719 4.5651 7.50246C4.5651 7.66774 4.61858 7.80385 4.72552 7.9108L5.97969 9.16496C6.09635 9.28163 6.23247 9.33996 6.38802 9.33996C6.54358 9.33996 6.67969 9.28163 6.79635 9.16496L9.27552 6.6858C9.39219 6.56913 9.44799 6.43302 9.44294 6.27746C9.43788 6.12191 9.38208 5.9858 9.27552 5.86913C9.15885 5.75246 9.02041 5.6918 8.86019 5.68713C8.69997 5.68246 8.56133 5.73827 8.44427 5.85455L6.38802 7.9108ZM4.75469 13.19L3.90885 11.7608L2.30469 11.4108C2.15885 11.3816 2.04219 11.3064 1.95469 11.185C1.86719 11.0637 1.83316 10.9299 1.8526 10.7837L2.01302 9.1358L0.919271 7.88163C0.822049 7.77469 0.773438 7.6483 0.773438 7.50246C0.773438 7.35663 0.822049 7.23024 0.919271 7.1233L2.01302 5.86913L1.8526 4.22121C1.83316 4.07538 1.86719 3.9416 1.95469 3.81988C2.04219 3.69816 2.15885 3.62291 2.30469 3.59413L3.90885 3.24413L4.75469 1.81496C4.83247 1.68858 4.93941 1.60341 5.07552 1.55946C5.21163 1.51552 5.34774 1.52291 5.48385 1.58163L7.00052 2.2233L8.51719 1.58163C8.6533 1.5233 8.78941 1.51591 8.92552 1.55946C9.06163 1.60302 9.16858 1.68819 9.24635 1.81496L10.0922 3.24413L11.6964 3.59413C11.8422 3.6233 11.9589 3.69874 12.0464 3.82046C12.1339 3.94219 12.1679 4.07577 12.1484 4.22121L11.988 5.86913L13.0818 7.1233C13.179 7.23024 13.2276 7.35663 13.2276 7.50246C13.2276 7.6483 13.179 7.77469 13.0818 7.88163L11.988 9.1358L12.1484 10.7837C12.1679 10.9295 12.1339 11.0633 12.0464 11.185C11.9589 11.3068 11.8422 11.382 11.6964 11.4108L10.0922 11.7608L9.24635 13.19C9.16858 13.3164 9.06163 13.4015 8.92552 13.4455C8.78941 13.4894 8.6533 13.482 8.51719 13.4233L7.00052 12.7816L5.48385 13.4233C5.34774 13.4816 5.21163 13.489 5.07552 13.4455C4.93941 13.4019 4.83247 13.3167 4.75469 13.19Z" fill="#2DC20F"/>
</svg> Verified Seller
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="h-fit flex items-center gap-4"> 
                <span className="p-1 rounded-full bg-received cursor-pointer hidden lg:block" onClick={(()=>{
                    setShowPopUp(true)
                })}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20.117 7.6277C19.9233 7.60532 19.7272 7.64008 19.553 7.7277L15 10.0027V14.0027L19.553 16.2777C19.7053 16.3538 19.8744 16.3897 20.0445 16.3822C20.2145 16.3746 20.3799 16.3237 20.5248 16.2344C20.6697 16.1451 20.7894 16.0203 20.8725 15.8717C20.9557 15.7232 20.9996 15.5559 21 15.3857V8.6197C20.9997 8.37494 20.9097 8.13878 20.747 7.95595C20.5842 7.77313 20.3601 7.65633 20.117 7.6277Z" fill="#172556"/>
  <path d="M5 5C3.355 5 2 6.355 2 8V16C2 17.645 3.355 19 5 19H13C14.645 19 16 17.645 16 16V8C16 6.355 14.645 5 13 5H5Z" fill="#172556"/>
</svg>
</span>
  <span className="p-1 cursor-pointer rounded-full bg-received"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10.5 6C10.5 5.79 10.5 5.6865 10.512 5.5995C10.5502 5.32456 10.677 5.0696 10.8733 4.87332C11.0696 4.67704 11.3246 4.55018 11.5995 4.512C11.685 4.5 11.79 4.5 12 4.5C12.21 4.5 12.3135 4.5 12.4005 4.512C12.6754 4.55018 12.9304 4.67704 13.1267 4.87332C13.323 5.0696 13.4498 5.32456 13.488 5.5995C13.5 5.685 13.5 5.79 13.5 6C13.5 6.21 13.5 6.3135 13.488 6.4005C13.4498 6.67544 13.323 6.9304 13.1267 7.12668C12.9304 7.32296 12.6754 7.44982 12.4005 7.488C12.315 7.5 12.21 7.5 12 7.5C11.79 7.5 11.6865 7.5 11.5995 7.488C11.3246 7.44982 11.0696 7.32296 10.8733 7.12668C10.677 6.9304 10.5502 6.67544 10.512 6.4005C10.5 6.315 10.5 6.21 10.5 6ZM10.5 12C10.5 11.79 10.5 11.6865 10.512 11.5995C10.5502 11.3246 10.677 11.0696 10.8733 10.8733C11.0696 10.677 11.3246 10.5502 11.5995 10.512C11.685 10.5 11.79 10.5 12 10.5C12.21 10.5 12.3135 10.5 12.4005 10.512C12.6754 10.5502 12.9304 10.677 13.1267 10.8733C13.323 11.0696 13.4498 11.3246 13.488 11.5995C13.5 11.685 13.5 11.79 13.5 12C13.5 12.21 13.5 12.3135 13.488 12.4005C13.4498 12.6754 13.323 12.9304 13.1267 13.1267C12.9304 13.323 12.6754 13.4498 12.4005 13.488C12.315 13.5 12.21 13.5 12 13.5C11.79 13.5 11.6865 13.5 11.5995 13.488C11.3246 13.4498 11.0696 13.323 10.8733 13.1267C10.677 12.9304 10.5502 12.6754 10.512 12.4005C10.5 12.315 10.5 12.21 10.5 12ZM10.5 18C10.5 17.7915 10.5 17.6865 10.512 17.5995C10.5504 17.3251 10.6772 17.0706 10.8731 16.8746C11.0691 16.6787 11.3236 16.5519 11.598 16.5135C11.6865 16.5015 11.79 16.5015 11.9985 16.5015C12.207 16.5015 12.3135 16.5015 12.399 16.5135C12.6734 16.5519 12.9279 16.6787 13.1239 16.8746C13.3198 17.0706 13.4466 17.3251 13.485 17.5995C13.497 17.6865 13.497 17.7915 13.497 18C13.497 18.2085 13.497 18.3135 13.485 18.4005C13.4466 18.6749 13.3198 18.9294 13.1239 19.1254C12.9279 19.3213 12.6734 19.4481 12.399 19.4865C12.312 19.4985 12.207 19.4985 11.9985 19.4985C11.79 19.4985 11.685 19.4985 11.598 19.4865C11.3236 19.4481 11.0691 19.3213 10.8731 19.1254C10.6772 18.9294 10.5504 18.6749 10.512 18.4005C10.5 18.3135 10.5 18.2085 10.5 18Z" fill="#172556"/>
</svg>
</span>
             </div>
          </div>
           <div className="flex  flex-col  justify-between px-4 pt-2 gap-2 md:flex-row md:gap-4 md:items-center">

             <div className="flex items-center  gap-[10px]">
                
              <Image
                alt={`${selectedChat.vendor} seller`}
                className="h-[50px] w-[50px] aspect-square rounded-full"
                src={'/product.png'}
                height={100}
                width={100}
              />
              <div className="flex flex-col gap-[6px]">
                <h4 className="text-primary font-[500] text-[16px] leading-[130%]">
                  Excel Home Electronics
                </h4>
                
              </div>
            </div>
            <h4 className="text-primary font-[600]"> {selectedChat.price}  </h4>
            <div className="flex flex-col gap-2 w-full lg:w-fit">
              <button onClick={(()=>{
            setShowPopUp(true)
           })} className="py-[6px] text-[17px] px-2 w-full rounded-[8px] font-500 w-full bg-primary text-white flex items-center justify-center text-center gap-2 lg:hidden ">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
  <path d="M20.117 7.62379C19.9233 7.60142 19.7272 7.63618 19.553 7.72379L15 9.99879V13.9988L19.553 16.2738C19.7053 16.3499 19.8744 16.3858 20.0445 16.3783C20.2145 16.3707 20.3799 16.3198 20.5248 16.2305C20.6697 16.1412 20.7894 16.0164 20.8725 15.8678C20.9557 15.7193 20.9996 15.552 21 15.3818V8.61579C20.9997 8.37103 20.9097 8.13487 20.747 7.95205C20.5842 7.76922 20.3601 7.65243 20.117 7.62379Z" fill="white"/>
  <path d="M5 5C3.355 5 2 6.355 2 8V16C2 17.645 3.355 19 5 19H13C14.645 19 16 17.645 16 16V8C16 6.355 14.645 5 13 5H5Z" fill="white"/>
</svg>   Request video call
            </button>
              <button  className="py-[6px] px-2 z-10 w-full text-[17px] rounded-[8px] font-500 w-full bg-white text-primary border border-primary flex items-center justify-center gap-2 ">
                <MessageSquareText size={20}  /> Show contact 
              </button>
              </div>
              

            </div>
      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto ">
        {selectedChat.messages.map((message: Message, index: number) => (
          <div
            key={index}
            className={`mb-4 ${
              message.type === "sent"
                ? "ml-auto bg-sent text-primary rounded-tl-lg rounded-bl-lg rounded-br-lg"
                : message.type === "received"
                ? "mr-auto bg-received text-primary rounded-tr-lg rounded-bl-lg rounded-br-lg"
                : "text-center text-grey bg-transparent m-auto" // System message
            } max-w-[70%] p-3`}
          >
           <div className=""> <p className="text-[14px]">{message.text}</p>
            {message.time && (
              <p className="text-[10px] mt-1 opacity-70">{message.time}</p>
            )} </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="px-4 flex gap-2 items-center shadow border-t border-sent bg-white py-6">
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
      <div className="flex-[0.8] flex justify-end gap-3 items-center">
        <div className="flex items-center gap-3">
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={action.onClick}
          className="p-2 rounded-full bg-emojiBg hover:bg-gray-200"
        >
          {action.icon}
        </button>
      ))}
    </div>
  {/* <span
    className="flex items-center justify-center p-1 rounded-full bg-emojiBg cursor-pointer"
    // onClick={() => setShowPopUp(true)}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M9.29085 21.0012C8.46467 20.9973 7.64753 20.829 6.887 20.5062C6.12646 20.1835 5.43771 19.7127 4.86085 19.1212C4.28832 18.5786 3.8284 17.9284 3.50743 17.2078C3.18646 16.4872 3.01073 15.7104 2.99029 14.9219C2.96986 14.1333 3.10512 13.3484 3.38835 12.6122C3.67157 11.876 4.09719 11.2028 4.64085 10.6312L12.0009 3.20123C12.3935 2.80844 12.862 2.49953 13.3777 2.29325C13.8934 2.08697 14.4456 1.98762 15.0009 2.00123C15.5956 2.00326 16.1839 2.12367 16.7316 2.35545C17.2793 2.58723 17.7754 2.92574 18.1909 3.35123C19.0178 4.14747 19.4974 5.23775 19.5255 6.38541C19.5536 7.53307 19.1279 8.6455 18.3409 9.48123L10.9409 16.9112C10.7038 17.1499 10.4218 17.339 10.1111 17.4678C9.80036 17.5965 9.46718 17.6623 9.13085 17.6612C8.76753 17.6617 8.40779 17.5894 8.07287 17.4486C7.73795 17.3077 7.43464 17.1012 7.18085 16.8412C6.67358 16.3501 6.38062 15.6786 6.36564 14.9727C6.35066 14.2668 6.61487 13.5835 7.10085 13.0712L13.9309 6.21123C14.1252 6.08214 14.3586 6.02508 14.5907 6.04995C14.8227 6.07481 15.0387 6.18004 15.2013 6.34739C15.3639 6.51475 15.4629 6.7337 15.4811 6.96634C15.4992 7.19898 15.4355 7.43064 15.3009 7.62123L8.47085 14.4812C8.35696 14.6184 8.30152 14.7949 8.31649 14.9726C8.33145 15.1503 8.41562 15.315 8.55085 15.4312C8.69156 15.5729 8.88126 15.6552 9.08085 15.6612C9.15479 15.6623 9.2282 15.6487 9.29685 15.6212C9.36551 15.5938 9.42804 15.553 9.48085 15.5012L16.8709 8.07123C17.2857 7.61041 17.5025 7.00486 17.4744 6.38548C17.4463 5.7661 17.1756 5.18264 16.7208 4.76123C16.2984 4.32267 15.724 4.06269 15.1157 4.03479C14.5075 4.00689 13.9116 4.21319 13.4509 4.61123L6.06085 12.0012C5.7015 12.3872 5.42201 12.8404 5.23848 13.3348C5.05494 13.8292 4.97099 14.355 4.99143 14.882C5.01188 15.409 5.13633 15.9267 5.35762 16.4054C5.57891 16.8841 5.89267 17.3143 6.28085 17.6712C6.67013 18.0748 7.13592 18.3967 7.65101 18.6182C8.16611 18.8397 8.72018 18.9563 9.28085 18.9612C9.76427 18.9652 10.2437 18.8735 10.6916 18.6916C11.1395 18.5097 11.5471 18.2411 11.8909 17.9012L19.2809 10.4712C19.3734 10.378 19.4835 10.3039 19.6047 10.2532C19.7259 10.2025 19.8559 10.1761 19.9873 10.1757C20.1187 10.1752 20.2489 10.2006 20.3705 10.2505C20.4921 10.3003 20.6026 10.3737 20.6959 10.4662C20.7891 10.5588 20.8632 10.6689 20.9139 10.7901C20.9646 10.9113 20.9909 11.0413 20.9914 11.1727C20.9919 11.3041 20.9665 11.4343 20.9166 11.5559C20.8667 11.6774 20.7934 11.788 20.7009 11.8812L13.3109 19.3112C12.7862 19.8452 12.1606 20.2696 11.4705 20.5597C10.7804 20.8498 10.0395 20.9999 9.29085 21.0012Z" fill="#797E90"/>
</svg>
  </span>

   <span
    className="flex items-center justify-center p-1 rounded-full bg-emojiBg cursor-pointer"
    // onClick={() => setShowPopUp(true)}
  >
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20.0396 2.32442C21.0556 1.96942 22.0316 2.94542 21.6766 3.96142L15.7516 20.8914C15.3666 21.9894 13.8366 22.0514 13.3646 20.9884L10.5056 14.5564L14.5296 10.5314C14.6621 10.3892 14.7342 10.2012 14.7308 10.0069C14.7274 9.81259 14.6486 9.62721 14.5112 9.4898C14.3738 9.35238 14.1884 9.27367 13.9941 9.27024C13.7998 9.26681 13.6118 9.33894 13.4696 9.47142L9.44461 13.4954L3.01261 10.6364C1.94961 10.1634 2.01261 8.63442 3.10961 8.24942L20.0396 2.32442Z" fill="#172556"/>
</svg>
  </span> */}
</div>

      </div>
    </div>
  );
};

export default ChatPage;