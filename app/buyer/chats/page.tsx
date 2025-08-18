'use client'
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
type Message = {
  type: "system" | "sent" | "received";
  text: string;
  time?: string;
};

type ChatData = {
  name: string;
  avatar: string;
  price: string;
  product: string;
  verified: boolean;
  lastTime: string;
  unread?: number;
  messages: Message[];
};

const initialData: Record<number, ChatData> = {
  1: {
    name: "Excel Home Electronics",
    avatar: "EH",
    price: "₦540,000",
    product: "Buchymix 7L Air Fryer",
    verified: true,
    lastTime: "2 hrs ago",
    messages: [
      {
        type: "system",
        text:
          "Please avoid sharing personal or financial details here. Use clear questions and only deal with verified sellers.",
        time: "April 5, 2024",
      },
      { type: "sent", text: "Hi, is this item still available?" },
      {
        type: "received",
        text:
          "Yes, it's available. Nearly used. You can inspect it at our Alaba store or arrange pickup.",
      },
      { type: "sent", text: "Can you share the exact address?" },
      {
        type: "received",
        text: "13B Freedom Line, near Samsung Plaza, Alaba Int'l",
        time: "10:05",
      },
    ],
  },
  2: {
    name: "George & Sons Limited",
    avatar: "GS",
    price: "₦650,000",
    product: "Thermomix Cooking Machine",
    verified: false,
    lastTime: "3 hrs ago",
    unread: 1,
    messages: [
      {
        type: "received",
        text: "Hello! The Thermomix is available. Would you like to see it?",
      },
      { type: "sent", text: "How much for the 6600.000 to dispense?" },
      { type: "received", text: "The price is ₦650,000. It's in excellent condition." },
    ],
  },
  3: {
    name: "Mandarin Enterprises",
    avatar: "ME",
    price: "₦495,000",
    product: "Buchymix 7L Air Fryer",
    verified: false,
    lastTime: "1 hour ago",
    unread: 1,
    messages: [
      { type: "sent", text: "Is this still available?" },
      { type: "received", text: "Yes it's available. Brand new condition." },
    ],
  },
  4: {
    name: "God's Own Limited",
    avatar: "GO",
    price: "₦520,000",
    product: "Buchymix 7L Air Fryer",
    verified: false,
    lastTime: "2 days ago",
    messages: [
      { type: "received", text: "Good morning! The air fryer is ready for pickup." },
      { type: "sent", text: "What's the condition like?" },
    ],
  },
 
};
const Page=()=>{
   
return <main className="container flex flex-col gap-5 md:py-10 lg:py-0">
    <div className="flex items-center">
        <Link
          href="/"
          className="text-primary text-[14px] font-semibold flex items-center gap-2"
        >
          <span className="bg-[#E9ECF4] p-2 rounded-full">
            <ArrowLeft size={16} className="text-primary" />
          </span>
          Back to homepage
        </Link>
      </div>
    
<div className="flex flex-col gap-8">

    <div>                 <h6 className="text-primary  font-[700] text-[21px] mb-2 md:text-[33px]">Chat Inbox</h6>
    <p
            className="text-grey max-w-xl"
            style={{ fontSize: 17, fontWeight: 400, fontStyle: "normal" }}
          >
            Once you contact a seller or receive replies, your chats will show up here.
          </p>
</div>

<div className="flex flex-col items-center justify-center">
    <div className=" flex flex-col py-8 items-center justify-center w-fit rounded-lg text-center font-Poppins p-6 bg-filterBg md:w-3/5 md:py-16">
      {/* SVGs */}
      <div className="mb-8">
        {/* Desktop SVG */}
        <div className="hidden md:block">
          <svg xmlns="http://www.w3.org/2000/svg" width="125" height="124" viewBox="0 0 125 124" fill="none">
            <path d="M105.745 46.0339L100.578 54.9722L37.9067 18.8055L43.0733 9.86719L58.78 18.9089L65.8067 16.9972L88.1783 29.9139L90.09 36.9922L105.745 46.0339ZM31.5 98.1655V36.1655H57.695L93.5 56.8322V98.1655C93.5 100.906 92.4113 103.534 90.4734 105.472C88.5356 107.41 85.9072 108.499 83.1667 108.499H41.8333C39.0928 108.499 36.4644 107.41 34.5266 105.472C32.5887 103.534 31.5 100.906 31.5 98.1655Z" fill="#A68200"/>
          </svg>
        </div>
        {/* Mobile SVG */}
        <div className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" viewBox="0 0 81 80" fill="none">
            <path d="M68.4 29.7005L65.0667 35.4672L24.6333 12.1339L27.9667 6.36719L38.1 12.2005L42.6333 10.9672L57.0667 19.3005L58.3 23.8672L68.4 29.7005ZM20.5 63.3339V23.3339H37.4L60.5 36.6672V63.3339C60.5 65.102 59.7976 66.7977 58.5474 68.0479C57.2971 69.2981 55.6014 70.0005 53.8333 70.0005H27.1667C25.3986 70.0005 23.7029 69.2981 22.4526 68.0479C21.2024 66.7977 20.5 65.102 20.5 63.3339Z" fill="#A68200"/>
          </svg>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-primary font-[700] text-[28px] md:text-[36px] mb-3">
        No chats yet?
      </h2>

      {/* Description */}
      <p className="text-grey font-[400] text-[15px] md:text-[17px] max-w-md">
        You’ll get updates here when sellers reply, new listings match your search, 
        or something changes with your saved items.
      </p>

      <Link href={`/categories`}>
       <button
            className=" text-[17px] py-2 px-8 bg-primary text-white rounded-md mt-4"
          >
            Browse categories 
          </button></Link>
    </div>
</div>


  </div>




</main>
}
export default Page



  