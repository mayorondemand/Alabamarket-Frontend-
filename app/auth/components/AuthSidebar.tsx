// components/SidebarSlider.tsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
interface Slide {
  id: number;
  image: string;
  text: string;
  title:string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/image.png",
    text: "Built with the Alaba traders in mind. The market is now online.",
    title:"Your Trusted Alaba Market Online"
  },
  {
    id: 2,
    image: "/onboarding2.png",
    text: "We verify sellers and flag scams using smart AI. You’re safe here.",
    title:"Buy and Sell With Confidence"
  },
  {
    id: 3,
      image: "/product.png",
title:"Speak Your Language",
    text: "Use the app in Yoruba, Igbo, Pidgin, or English; we got you.",
  },
];

const AuthSidebar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen  overflow-hidden  shadow-lg">
    <div className="flex items-center absolute top-10 gap-4">
          <div  className="bg-yellow-400 rounded-md px-2 py-1 flex items-center gap-2">
                  <Image src="/ALABALOGO.png" alt="alaba-market-logo" className="" width={120} height={120} />
            
          </div>

        </div>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
             <div className="flex z-30 left-10 items-center absolute top-10 gap-4">
          <div  className="bg-yellow-400 rounded-md px-2 py-1 flex items-center gap-2">
                  <Image src="/ALABALOGO.png" alt="alaba-market-logo" className="" width={120} height={120} />
            
          </div>

        </div>
            {/* <Image src={'/product.png'} alt="omo" height={1000} width={1000}  /> */}
          {/* Dark overlay for text readability */}
          {/* <div className="absolute  inset-0 bg-black/40"></div> */}
          {/* Text at bottom */}
          <div className="absolute left-0   text-white font-[500] bottom-10 w-full text-left flex flex-col gap-4 px-4">
            <h2 className="z-30"> {slide.title} </h2>
            <p className="z-30 text-lg font-medium">{slide.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuthSidebar;
