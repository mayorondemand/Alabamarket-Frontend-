'use client'
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Recommended from "@/app/seller/reviews/components/Recommended";
import { it } from "node:test";
import { styleText } from "util";
import { availableParallelism } from "os";
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

 
};
const savedItems=[
    {
        name:"LG Washing Machine",
        price:"400",
        stillAVailable:true,
        img:"/product.png",
        location:"Alaba Lagos",
        icon:<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
  <path d="M4.9987 2.66406C2.9737 2.66406 1.33203 4.30573 1.33203 6.33073C1.33203 9.9974 5.66536 13.3307 7.9987 14.1061C10.332 13.3307 14.6654 9.9974 14.6654 6.33073C14.6654 4.30573 13.0237 2.66406 10.9987 2.66406C9.7587 2.66406 8.66203 3.27973 7.9987 4.22206C7.66053 3.74053 7.21135 3.34753 6.68915 3.07634C6.16695 2.80514 5.58712 2.66373 4.9987 2.66406Z" fill="#172556" stroke="#172556" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>,
locationIcon:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5093 14.7586C7.5093 14.7586 2.66797 10.6813 2.66797 6.66927C2.66797 5.25478 3.22987 3.89823 4.23007 2.89803C5.23026 1.89784 6.58681 1.33594 8.0013 1.33594C9.41579 1.33594 10.7723 1.89784 11.7725 2.89803C12.7727 3.89823 13.3346 5.25478 13.3346 6.66927C13.3346 10.6813 8.4933 14.7586 8.4933 14.7586C8.22397 15.0066 7.78064 15.0039 7.5093 14.7586ZM8.0013 9.0026C8.30772 9.0026 8.61114 8.94225 8.89423 8.82499C9.17732 8.70773 9.43455 8.53586 9.65122 8.31919C9.86789 8.10252 10.0398 7.84529 10.157 7.5622C10.2743 7.27911 10.3346 6.97569 10.3346 6.66927C10.3346 6.36285 10.2743 6.05944 10.157 5.77634C10.0398 5.49325 9.86789 5.23603 9.65122 5.01936C9.43455 4.80269 9.17732 4.63081 8.89423 4.51355C8.61114 4.39629 8.30772 4.33594 8.0013 4.33594C7.38246 4.33594 6.78897 4.58177 6.35139 5.01936C5.9138 5.45694 5.66797 6.05043 5.66797 6.66927C5.66797 7.28811 5.9138 7.8816 6.35139 8.31919C6.78897 8.75677 7.38246 9.0026 8.0013 9.0026Z" fill="#112672"/>
</svg>
    },
     {
        name:"LG Washing Machine",
        price:"400",
        stillAVailable:false,
        img:"/product.png",
        location:"ikorodu, Lagos",
        icon:<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
  <path d="M4.9987 2.66406C2.9737 2.66406 1.33203 4.30573 1.33203 6.33073C1.33203 9.9974 5.66536 13.3307 7.9987 14.1061C10.332 13.3307 14.6654 9.9974 14.6654 6.33073C14.6654 4.30573 13.0237 2.66406 10.9987 2.66406C9.7587 2.66406 8.66203 3.27973 7.9987 4.22206C7.66053 3.74053 7.21135 3.34753 6.68915 3.07634C6.16695 2.80514 5.58712 2.66373 4.9987 2.66406Z" fill="#172556" stroke="#172556" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>,
locationIcon:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5093 14.7586C7.5093 14.7586 2.66797 10.6813 2.66797 6.66927C2.66797 5.25478 3.22987 3.89823 4.23007 2.89803C5.23026 1.89784 6.58681 1.33594 8.0013 1.33594C9.41579 1.33594 10.7723 1.89784 11.7725 2.89803C12.7727 3.89823 13.3346 5.25478 13.3346 6.66927C13.3346 10.6813 8.4933 14.7586 8.4933 14.7586C8.22397 15.0066 7.78064 15.0039 7.5093 14.7586ZM8.0013 9.0026C8.30772 9.0026 8.61114 8.94225 8.89423 8.82499C9.17732 8.70773 9.43455 8.53586 9.65122 8.31919C9.86789 8.10252 10.0398 7.84529 10.157 7.5622C10.2743 7.27911 10.3346 6.97569 10.3346 6.66927C10.3346 6.36285 10.2743 6.05944 10.157 5.77634C10.0398 5.49325 9.86789 5.23603 9.65122 5.01936C9.43455 4.80269 9.17732 4.63081 8.89423 4.51355C8.61114 4.39629 8.30772 4.33594 8.0013 4.33594C7.38246 4.33594 6.78897 4.58177 6.35139 5.01936C5.9138 5.45694 5.66797 6.05043 5.66797 6.66927C5.66797 7.28811 5.9138 7.8816 6.35139 8.31919C6.78897 8.75677 7.38246 9.0026 8.0013 9.0026Z" fill="#112672"/>
</svg>
    },
]
const Page=()=>{
const availableStyle=`px-2 py-1 rounded-[24px]  bg-white font-[400] `
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

    <div>                 <h6 className="text-primary  font-[700] text-[21px] mb-2 md:text-[33px]">Saved Items</h6>
    <p
            className="text-grey max-w-xl"
            style={{ fontSize: 17, fontWeight: 400, fontStyle: "normal" }}
          >
          Tap the save icon on any product you like to save it here for later.
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
        Nothing saved yet?
      </h2>

      {/* Description */}
      <p className="text-grey font-[400] text-[15px] md:text-[17px] max-w-md">
     Tap the save icon on any product you like to save it here for later.
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
  

  <div className="grid gap-5  lg:grid-cols-2">
    <div className="bg-inputBg p-4 flex flex-col gap-8 rounded-[24px] md:mt-10 h-fit">
        <div className="flex items-center justify-between">
            <h6 className="text-primary font-[700] text-[21px]">My Saved Items</h6>
            <p className="text-primary text-[12px] font-[500] cursor-pointer underline"> clear all </p>
        </div>
<div className="flex flex-col gap-4">
    
        {savedItems?.map((item,index)=>{
            return <div key={index} className="p-4    rounded-lg bg-active border border-savedBorder">
                <div className="flex items-center justify-between"> {item.stillAVailable? <button className={`${availableStyle} text-primary`}>Still Available </button>:<button className={`${availableStyle} text-red`}>Out of Stock</button>} <span className="p-1 rounded-full bg-white"> {item.icon} </span> </div>
                
                <div className="flex my-4 items-center gap-4 w-full">
                    <Image src={item.img} alt={`alaba market ${item.name}`} width={100} height={100} className="rounded-[8px] md:h-[110px] md:w-[110px]" />
      <div className="flex-1 flex flex-col gap-4"> 
                       <div className="flex flex-col gap-1">
                         <h5 className="text-primary text-[15px] font-[600] md:text-[27px]"> {item.name} </h5>
                        <p className="text-[#616A8C] text-[500]">  { " ₦ " +item.price.toLocaleString()} </p>
                        </div>
                <div className="hidden lg:flex items-center justify-between  w-full"> <span className="flex gap-1 items-center text-primary font-[14px]"> {item.locationIcon} {item.location }</span> <button className="text-primary border border-primary text-[11px] px-6 py-2 rounded font-[400]"> Chat seller  </button> </div>

                    </div>
                    </div>
                <div className="flex items-center justify-between  w-full lg:hidden"> <span className="flex gap-1 items-center text-primary font-[14px] "> {item.locationIcon} {item.location }</span> <button className="text-primary border border-primary text-[11px] px-6 py-2 rounded font-[400]"> Chat seller  </button> </div>

              
                
                 </div>
        })}
</div>




    </div>

<Recommended />
  </div>




</main>
}
export default Page



  