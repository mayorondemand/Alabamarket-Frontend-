







'use client';

import Image from 'next/image';
import Link from 'next/link';
import YouMightAlsoLike from './YouMightAlsoLike';
import { useState, useCallback } from 'react';
import MobileDescription from './MobileDescription';
import ProductHeader from './Description';
import { ArrowLeft, CheckCircle, MessageCircle,MessageSquareText, Phone, AlertCircle } from 'lucide-react';
import ReviewCard from './Reviews';
import VideoCallPopUp from './VideoCallPopUp';
import Report from './Report';
type Product = {
  name: string;
  image: string;
  verifiedSeller?: boolean;
  fixed?: boolean;
  price: number;
  description?: string;
  images?: string[]; // optional for future use
};

interface ProductDetailsProps {
  product: Product;
}

const tips = [
  "Don’t pay until you’ve inspected the product",
  "Meet at a safe public place",
  "Buy from verified sellers for extra trust",
]


export default function ProductDetails({ product }: ProductDetailsProps) {
  const [activeImg, setActiveImg] = useState(product.image);
    const [showPopUp, setShowPopUp] = useState(false);
const [showReport,setShowReport]=useState(false)
  // Memoized handlers
  const handleToggleImg = useCallback((img: string) => {
    setActiveImg(img);
  }, []);

  const handleMainImgClick = useCallback(() => {
    setActiveImg(product.image);
  }, [product.image]);

  return (
    <main className="container relative  flex flex-col gap-8">
      {/* Back Link */}
      <VideoCallPopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp} />
      <Report showReport={showReport} setShowReport={setShowReport} />
      <div className="flex items-center">
        <Link
          href="/"
          className="text-primary text-[14px] font-semibold flex items-center gap-2"
        >
          <span className="bg-[#E9ECF4] p-2 rounded-full">
            <ArrowLeft size={16} className="text-primary" />
          </span>
          Back to home page
        </Link>
      </div>

      {/* <div className="grid  gap-10 md:grid-cols-5"> */}
              <div className="flex gap-6 flex-col md:flex-row pb-12  ">


        {/* Left: Product Images */}
        <div className='md:flex-[3]'>
          <div className="hidden  md:flex flex-col gap-3 ">
          <div onClick={handleMainImgClick} className="cursor-pointer">
            <Image
              src={activeImg}
              width={1000}
              height={1000}
              alt={product.name}
              priority
              className="rounded-lg w-full object-cover lg:h-[586px]"
            />
          </div>

          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                onClick={() => handleToggleImg(product.image)}
                className="cursor-pointer"
              >
                <Image
                  src={product.image}
                  width={1000}
                  height={1000}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  priority
                  className="rounded-lg w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110 lg:h-[244px]"
                />
              </div>
            ))}
          </div>

      
      
        </div>
          <div className='hidden md:block'>
          <ProductHeader product={product} />
        </div>
                         <div className='hidden md:block'><ReviewCard /></div>

        </div>
<div className='md:hidden'>

          <MobileDescription product={product} showPopUp={showPopUp} setShowPopUp={setShowPopUp} />
            <ProductHeader product={product} />

</div>

        {/* Right: Product Info */}
       <div >
 <div className=" flex  flex-col gap-10 sticky top-20   md:flex-[2] lg:flex-[1] lg:gap-6 ">
          {/* Price & Action */}
          <div className="hidden md:flex flex-col gap-[30px] px-4 py-5 rounded-xl bg-categoryBg h-fit">
            <div className="flex w-fit flex-col gap-[6px]">
              <h4 className="text-primary text-[33px] font-[700]">₦{product.price.toLocaleString()}</h4>
              {product.fixed ?                 <button className="text-primary py-[7px] px-[7px] w-fit rounded  bg-neatBg">Fixed</button>
 : (
                <button className="text-primary py-[7px] px-[7px] w-fit rounded  bg-white">Negotiable</button>
              )}
            </div>
            <button onClick={(()=>{
            setShowPopUp(true)
           })} className="py-[12px] text-[17px] rounded-[8px] font-500 w-full bg-primary text-white flex items-center justify-center text-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
  <path d="M20.117 7.62379C19.9233 7.60142 19.7272 7.63618 19.553 7.72379L15 9.99879V13.9988L19.553 16.2738C19.7053 16.3499 19.8744 16.3858 20.0445 16.3783C20.2145 16.3707 20.3799 16.3198 20.5248 16.2305C20.6697 16.1412 20.7894 16.0164 20.8725 15.8678C20.9557 15.7193 20.9996 15.552 21 15.3818V8.61579C20.9997 8.37103 20.9097 8.13487 20.747 7.95205C20.5842 7.76922 20.3601 7.65243 20.117 7.62379Z" fill="white"/>
  <path d="M5 5C3.355 5 2 6.355 2 8V16C2 17.645 3.355 19 5 19H13C14.645 19 16 17.645 16 16V8C16 6.355 14.645 5 13 5H5Z" fill="white"/>
</svg>   Request video call
            </button>
          </div>

          {/* Seller Info */}
            
          <div className="bg-categoryBg p-4 rounded-xl w-full h-fit flex flex-col gap-6">
           <Link href={`/sellerprofile`}>
            <div className="flex items-center gap-[15px]">
              <Image
                alt={`${product.name} seller`}
                className="h-[64px] w-[64px] aspect-square"
                src="/eze.png"
                height={100}
                width={100}
              />
              <div className="flex flex-col gap-[6px]">
                <h4 className="text-primary font-[500] text-[16px] leading-[130%]">
                  Excel Home Electronics
                </h4>
                <div className="flex items-center gap-2">
                  {product.verifiedSeller && (
                    <span className="text-[11px] flex items-center gap-2 text-primary bg-[#DBFCD4] rounded py-1 px-2 w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
  <path d="M6.38802 7.9108L5.54219 7.07955C5.43524 6.9726 5.30166 6.91913 5.14144 6.91913C4.98122 6.91913 4.84258 6.97746 4.72552 7.09413C4.61858 7.20108 4.5651 7.33719 4.5651 7.50246C4.5651 7.66774 4.61858 7.80385 4.72552 7.9108L5.97969 9.16496C6.09635 9.28163 6.23247 9.33996 6.38802 9.33996C6.54358 9.33996 6.67969 9.28163 6.79635 9.16496L9.27552 6.6858C9.39219 6.56913 9.44799 6.43302 9.44294 6.27746C9.43788 6.12191 9.38208 5.9858 9.27552 5.86913C9.15885 5.75246 9.02041 5.6918 8.86019 5.68713C8.69997 5.68246 8.56133 5.73827 8.44427 5.85455L6.38802 7.9108ZM4.75469 13.19L3.90885 11.7608L2.30469 11.4108C2.15885 11.3816 2.04219 11.3064 1.95469 11.185C1.86719 11.0637 1.83316 10.9299 1.8526 10.7837L2.01302 9.1358L0.919271 7.88163C0.822049 7.77469 0.773438 7.6483 0.773438 7.50246C0.773438 7.35663 0.822049 7.23024 0.919271 7.1233L2.01302 5.86913L1.8526 4.22121C1.83316 4.07538 1.86719 3.9416 1.95469 3.81988C2.04219 3.69816 2.15885 3.62291 2.30469 3.59413L3.90885 3.24413L4.75469 1.81496C4.83247 1.68858 4.93941 1.60341 5.07552 1.55946C5.21163 1.51552 5.34774 1.52291 5.48385 1.58163L7.00052 2.2233L8.51719 1.58163C8.6533 1.5233 8.78941 1.51591 8.92552 1.55946C9.06163 1.60302 9.16858 1.68819 9.24635 1.81496L10.0922 3.24413L11.6964 3.59413C11.8422 3.6233 11.9589 3.69874 12.0464 3.82046C12.1339 3.94219 12.1679 4.07577 12.1484 4.22121L11.988 5.86913L13.0818 7.1233C13.179 7.23024 13.2276 7.35663 13.2276 7.50246C13.2276 7.6483 13.179 7.77469 13.0818 7.88163L11.988 9.1358L12.1484 10.7837C12.1679 10.9295 12.1339 11.0633 12.0464 11.185C11.9589 11.3068 11.8422 11.382 11.6964 11.4108L10.0922 11.7608L9.24635 13.19C9.16858 13.3164 9.06163 13.4015 8.92552 13.4455C8.78941 13.4894 8.6533 13.482 8.51719 13.4233L7.00052 12.7816L5.48385 13.4233C5.34774 13.4816 5.21163 13.489 5.07552 13.4455C4.93941 13.4019 4.83247 13.3167 4.75469 13.19Z" fill="#2DC20F"/>
</svg> Verified Seller
                    </span>
                  )}
                  <span className="text-grey font-[400] text-[11px]">4 years on Alaba</span>
                </div>
              </div>
            </div></Link>

            <div className="flex flex-col gap-2">
              <button className="py-[12px] text-[17px] rounded-[8px] font-500 w-full bg-white text-primary border border-primary flex items-center justify-center gap-2">
                <MessageSquareText size={20}  /> Chat with seller
              </button>
              <button className="py-[12px] text-[17px] rounded-[8px] font-500 w-full bg-white text-primary border border-primary flex items-center justify-center gap-2">
                <Phone size={18}  fill='primary'/> Show contact
              </button>

            </div>
          </div>

          {/* Safety Tips */}
          <div className="bg-categoryBg p-4 rounded-xl w-full h-fit flex flex-col gap-4">
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
</svg> Report this listing
            </button>
          </div>
        </div>
       </div>

                <div className='md:hidden'><ReviewCard /></div>

      </div>
            

     

      {/* Product Name */}
     
{/* <ReviewCard /> */}




      <YouMightAlsoLike />
    </main>
  );
}


















  
