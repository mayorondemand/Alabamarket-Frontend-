
    


'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useCallback } from 'react';
import { ArrowLeft, CheckCircle, MessageCircle,MessageSquareText, Phone, AlertCircle } from 'lucide-react';
import ReviewCard from '../categories/[name]/[productdetails]/components/Reviews';
import SellerListing from './components/SellerListings';
import VideoCallPopUp from '../categories/[name]/[productdetails]/components/VideoCallPopUp';
import Report from '../categories/[name]/[productdetails]/components/Report';
type Product = {
  name: string;
  image: string;
  verifiedSeller?: boolean;
  fixed?: boolean;
  price: number;
  description?: string;
  images?: string[];
};

interface ProductDetailsProps {
  product: Product;
}

const tips = [
  "Don’t pay until you’ve inspected the product",
  "Meet at a safe public place",
  "Buy from verified sellers for extra trust",
];


const Page = () => {
  const sellerInfo = {
  name: "Excel Home Electronics",
  address: "13B Freedom Line, near Samsung Plaza, Alaba Int'l",
  verifiedSeller: true,
  yearsOnAlaba: 4,
  description: "We sell UK-used phones, TVs, laptops, and accessories at unbeatable prices. All gadgets are tested and come with limited warranty. Visit us in-store or chat with us online."
};
const [showPopUp,setShowPopUp]=useState(false)
const [showReport,setShowReport]=useState(false)
  return (
    <div className="container flex flex-col gap-4 md:py-10">
      <VideoCallPopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp}/>
      <Report  showReport={showReport} setShowReport={setShowReport}/>
<div className="flex items-center">
        <Link
          href="/search"
          className="text-primary text-[14px] font-semibold flex items-center gap-2"
        >
          <span className="bg-[#E9ECF4] p-2 rounded-full">
            <ArrowLeft size={16} className="text-primary" />
          </span>
          Back to listing 
        </Link>
      </div>
<div className='grid gap-5 md:flex'>
  
      <div className='flex items-center flex-col gap-5  xl:flex-row md:flex-[3] xl:gap-8'>
        <div className='h-full md:rounded-lg'>
          <Image src={'/farmer.png'} alt={sellerInfo.name} width={100} height={500} className='h-full w-[521px] object-cover md:rounded-lg' />
          

        </div>

          
          <div className=" p-4 rounded-xl w-full h-fit flex flex-col gap-[30px] xl:pr-20">
            {/* <div className="flex items-center gap-[15px]"> */}
            <div className="flex flex-col gap-[20px] md:gap-[14px]">
  <h4 className="text-primary font-[500] text-[27px] md:text-[33px] order-1">
    {sellerInfo.name}
  </h4>

  <span className="flex items-center text-productDetailsDescription text-[17px] gap-1 hidden md:flex order-2">
    {/* Location Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5093 14.7586C7.5093 14.7586 2.66797 10.6813 2.66797 6.66927C2.66797 5.25478 3.22987 3.89823 4.23007 2.89803C5.23026 1.89784 6.58681 1.33594 8.0013 1.33594C9.41579 1.33594 10.7723 1.89784 11.7725 2.89803C12.7727 3.89823 13.3346 5.25478 13.3346 6.66927C13.3346 10.6813 8.4933 14.7586 8.4933 14.7586C8.22397 15.0066 7.78064 15.0039 7.5093 14.7586ZM8.0013 9.0026C8.30772 9.0026 8.61114 8.94225 8.89423 8.82499C9.17732 8.70773 9.43455 8.53586 9.65122 8.31919C9.86789 8.10252 10.0398 7.84529 10.157 7.5622C10.2743 7.27911 10.3346 6.97569 10.3346 6.66927C10.3346 6.36285 10.2743 6.05944 10.157 5.77634C10.0398 5.49325 9.86789 5.23603 9.65122 5.01936C9.43455 4.80269 9.17732 4.63081 8.89423 4.51355C8.61114 4.39629 8.30772 4.33594 8.0013 4.33594C7.38246 4.33594 6.78897 4.58177 6.35139 5.01936C5.9138 5.45694 5.66797 6.05043 5.66797 6.66927C5.66797 7.28811 5.9138 7.8816 6.35139 8.31919C6.78897 8.75677 7.38246 9.0026 8.0013 9.0026Z"
        fill="#172556"
      />
    </svg>
    {sellerInfo.address}
  </span>

  <div className="flex items-center gap-4 order-3">
    {sellerInfo.verifiedSeller && (
      <span className="text-[15px] flex items-center gap-2 text-primary bg-[#DBFCD4] rounded-lg py-1 px-2 w-fit">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none"> <path d="M6.38802 7.9108L5.54219 7.07955C5.43524 6.9726 5.30166 6.91913 5.14144 6.91913C4.98122 6.91913 4.84258 6.97746 4.72552 7.09413C4.61858 7.20108 4.5651 7.33719 4.5651 7.50246C4.5651 7.66774 4.61858 7.80385 4.72552 7.9108L5.97969 9.16496C6.09635 9.28163 6.23247 9.33996 6.38802 9.33996C6.54358 9.33996 6.67969 9.28163 6.79635 9.16496L9.27552 6.6858C9.39219 6.56913 9.44799 6.43302 9.44294 6.27746C9.43788 6.12191 9.38208 5.9858 9.27552 5.86913C9.15885 5.75246 9.02041 5.6918 8.86019 5.68713C8.69997 5.68246 8.56133 5.73827 8.44427 5.85455L6.38802 7.9108ZM4.75469 13.19L3.90885 11.7608L2.30469 11.4108C2.15885 11.3816 2.04219 11.3064 1.95469 11.185C1.86719 11.0637 1.83316 10.9299 1.8526 10.7837L2.01302 9.1358L0.919271 7.88163C0.822049 7.77469 0.773438 7.6483 0.773438 7.50246C0.773438 7.35663 0.822049 7.23024 0.919271 7.1233L2.01302 5.86913L1.8526 4.22121C1.83316 4.07538 1.86719 3.9416 1.95469 3.81988C2.04219 3.69816 2.15885 3.62291 2.30469 3.59413L3.90885 3.24413L4.75469 1.81496C4.83247 1.68858 4.93941 1.60341 5.07552 1.55946C5.21163 1.51552 5.34774 1.52291 5.48385 1.58163L7.00052 2.2233L8.51719 1.58163C8.6533 1.5233 8.78941 1.51591 8.92552 1.55946C9.06163 1.60302 9.16858 1.68819 9.24635 1.81496L10.0922 3.24413L11.6964 3.59413C11.8422 3.6233 11.9589 3.69874 12.0464 3.82046C12.1339 3.94219 12.1679 4.07577 12.1484 4.22121L11.988 5.86913L13.0818 7.1233C13.179 7.23024 13.2276 7.35663 13.2276 7.50246C13.2276 7.6483 13.179 7.77469 13.0818 7.88163L11.988 9.1358L12.1484 10.7837C12.1679 10.9295 12.1339 11.0633 12.0464 11.185C11.9589 11.3068 11.8422 11.382 11.6964 11.4108L10.0922 11.7608L9.24635 13.19C9.16858 13.3164 9.06163 13.4015 8.92552 13.4455C8.78941 13.4894 8.6533 13.482 8.51719 13.4233L7.00052 12.7816L5.48385 13.4233C5.34774 13.4816 5.21163 13.489 5.07552 13.4455C4.93941 13.4019 4.83247 13.3167 4.75469 13.19Z" fill="#2DC20F"/> </svg>
        Verified Seller
      </span>
    )}
    <span className="text-grey font-[400] text-[14px]">
      {sellerInfo.yearsOnAlaba} years on Alaba
    </span>
  </div>
</div>

            {/* </div> */}
<div>
  <p className='text-[17px] font-[400 text-primary'> {sellerInfo.description} </p>
</div>
            <div className="flex flex-col gap-4 md:flex-row mb:gap-8">
              <button onClick={(()=>{
            setShowPopUp(true)
           })} className="py-[12px] text-[17px] wift rounded-[8px] font-500 w-full bg-primary text-white flex items-center justify-center text-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
  <path d="M20.117 7.62379C19.9233 7.60142 19.7272 7.63618 19.553 7.72379L15 9.99879V13.9988L19.553 16.2738C19.7053 16.3499 19.8744 16.3858 20.0445 16.3783C20.2145 16.3707 20.3799 16.3198 20.5248 16.2305C20.6697 16.1412 20.7894 16.0164 20.8725 15.8678C20.9557 15.7193 20.9996 15.552 21 15.3818V8.61579C20.9997 8.37103 20.9097 8.13487 20.747 7.95205C20.5842 7.76922 20.3601 7.65243 20.117 7.62379Z" fill="white"/>
  <path d="M5 5C3.355 5 2 6.355 2 8V16C2 17.645 3.355 19 5 19H13C14.645 19 16 17.645 16 16V8C16 6.355 14.645 5 13 5H5Z" fill="white"/>
</svg>   Request video call
            </button>
              <button className="py-[12px] w-fit text-[17px] rounded-[8px] font-500 w-full bg-white text-primary border border-primary flex items-center justify-center gap-2">
                <MessageSquareText size={20}  /> Chat with seller
              </button>
              

            </div>
          </div>
      </div>



      <div className="bg-filterBg p-4 rounded-xl w-full h-fit flex flex-col gap-4 md:flex-[1]">
            <h2 className="text-primary font-semibold text-[21px]">Safety tips</h2>
            <ul className="flex flex-col gap-2">
              {tips.map((tip, index) => (
                <li key={index} className="text-primary font-[400] text-[14px] flex items-start gap-2">
                  • {tip}
                </li>
              ))}
            </ul>
            <button onClick={(()=>{
              setShowReport(true)
              
            })} className="py-[12px] text-[17px] mt-2 flex items-center gap-2 justify-center rounded-[8px] font-500 w-full bg-white text-red border border-red">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 17C12.2833 17 12.521 16.904 12.713 16.712C12.905 16.52 13.0007 16.2827 13 16C12.9993 15.7173 12.9033 15.48 12.712 15.288C12.5207 15.096 12.2833 15 12 15C11.7167 15 11.4793 15.096 11.288 15.288C11.0967 15.48 11.0007 15.7173 11 16C10.9993 16.2827 11.0953 16.5203 11.288 16.713C11.4807 16.9057 11.718 17.0013 12 17ZM12 13C12.2833 13 12.521 12.904 12.713 12.712C12.905 12.52 13.0007 12.2827 13 12V8C13 7.71667 12.904 7.47933 12.712 7.288C12.52 7.09667 12.2827 7.00067 12 7C11.7173 6.99933 11.48 7.09533 11.288 7.288C11.096 7.48067 11 7.718 11 8V12C11 12.2833 11.096 12.521 11.288 12.713C11.48 12.905 11.7173 13.0007 12 13ZM9.075 21C8.80833 21 8.55433 20.95 8.313 20.85C8.07167 20.75 7.859 20.6083 7.675 20.425L3.575 16.325C3.39167 16.1417 3.25 15.929 3.15 15.687C3.05 15.445 3 15.1913 3 14.926V9.076C3 8.80933 3.05 8.55533 3.15 8.314C3.25 8.07267 3.39167 7.86 3.575 7.676L7.675 3.576C7.85833 3.39267 8.071 3.251 8.313 3.151C8.555 3.051 8.809 3.00067 9.075 3H14.925C15.1917 3 15.446 3.05 15.688 3.15C15.93 3.25 16.1423 3.39167 16.325 3.575L20.425 7.675C20.6083 7.85833 20.75 8.071 20.85 8.313C20.95 8.555 21 8.809 21 9.075V14.925C21 15.1917 20.95 15.446 20.85 15.688C20.75 15.93 20.6083 16.1423 20.425 16.325L16.325 20.425C16.1417 20.6083 15.929 20.75 15.687 20.85C15.445 20.95 15.191 21 14.925 21H9.075Z" fill="#E30808"/>
</svg> Report this seller 
            </button>
          </div>

</div>

<SellerListing />
      <ReviewCard />
    </div>
  );
};

export default Page;