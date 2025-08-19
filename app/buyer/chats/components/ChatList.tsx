

"use client";

import React from "react";
import Image from "next/image";

type Message = {
  type: "system" | "sent" | "received";
  text: string;
  time?: string;
};

type ChatData = {
  vendor: string;
  avatar: string;
  price: string;
  product: string;
  verified: boolean;
  lastTime: string;
  unread?: number;
  messages: Message[];
};

interface ChatListProps {
  initialData: ChatData[];
  onChatSelect: (chat: ChatData) => void; 
}

const ChatList: React.FC<ChatListProps> = ({ initialData, onChatSelect }) => {
  return (
    <div className="bg-[#F5F6FC] rounded-3xl h-full">
      {initialData.map((chat, index) => {
        const lastMessage = chat.messages[chat.messages.length - 1]?.text;

        return (
          <div
            key={index}
            className={`cursor-pointer flex items-center gap-3 py-4 px-4 border-b border-grey hover:bg-activeChat ${index==0?'rounded-tl-3xl rounded-tr-3xl bg-activeChat':'bg-transparent'}`}
            onClick={() => onChatSelect(chat)} 
          >
            <div className="relative w-12 h-12 shrink-0">
              <Image
                src={'/product.png'}
                alt={chat.vendor}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-[400] text-primary">
                {chat.vendor}
              </p>
              <p className="text-[14px] font-[600] text-primary truncate">
                {chat.product}
              </p>
              <p className="text-[11px] font-[400] text-grey truncate">
                {lastMessage}
              </p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs text-gray-400">{chat.lastTime}</span>
              {chat.unread ? (
                <span className="mt-1 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {chat.unread}
                </span>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatList;