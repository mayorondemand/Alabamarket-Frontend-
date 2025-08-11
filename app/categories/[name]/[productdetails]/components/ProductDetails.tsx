







'use client';

import Image from 'next/image';
import Link from 'next/link';
import YouMightAlsoLike from './YouMightAlsoLike';
import { useState, useCallback } from 'react';
import { ArrowLeft, CheckCircle, MessageCircle,MessageSquareText, Phone, AlertCircle } from 'lucide-react';
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
];

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [activeImg, setActiveImg] = useState(product.image);

  // Memoized handlers
  const handleToggleImg = useCallback((img: string) => {
    setActiveImg(img);
  }, []);

  const handleMainImgClick = useCallback(() => {
    setActiveImg(product.image);
  }, [product.image]);

  return (
    <main className="container flex flex-col gap-8">
      {/* Back Link */}
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

      <div className="grid grid-cols-5 gap-10">
        {/* Left: Product Images */}
        <div className="col-span-3 flex flex-col gap-3">
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
                  className="rounded-lg w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="col-span-2 flex flex-col gap-6">
          {/* Price & Action */}
          <div className="flex flex-col gap-[30px] p-6 rounded-xl bg-categoryBg h-fit">
            <div className="flex w-fit flex-col gap-[6px]">
              <h4 className="text-primary text-[33px] font-[700]">₦{product.price.toLocaleString()}</h4>
              {product.fixed ? null : (
                <button className="text-primary p-[8px] rounded bg-neatBg">Negotiable</button>
              )}
            </div>
            <button className="py-[12px] text-[17px] rounded-[8px] font-500 w-full bg-primary text-white">
              Request video call
            </button>
          </div>

          {/* Seller Info */}
          <div className="bg-categoryBg p-6 rounded-xl w-full h-fit flex flex-col gap-6">
            <div className="flex items-center gap-[15px]">
              <Image
                alt={`${product.name} seller`}
                className="h-[64px] w-[64px] aspect-square"
                src="/eze.png"
                height={100}
                width={100}
              />
              <div className="flex flex-col gap-[6px]">
                <h4 className="text-primary font-semibold text-[21px] leading-[150%]">
                  Excel Home Electronics
                </h4>
                <div className="flex items-center gap-2">
                  {product.verifiedSeller && (
                    <span className="text-[11px] flex items-center gap-2 text-primary bg-[#DBFCD4] rounded py-1 px-2 w-fit">
                      <CheckCircle size={14} className="text-green-600" /> Verified Seller
                    </span>
                  )}
                  <span className="text-grey font-[400] text-[11px]">4 years on Alaba</span>
                </div>
              </div>
            </div>

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
          <div className="bg-categoryBg p-6 rounded-xl w-full h-fit flex flex-col gap-4">
            <h2 className="text-primary font-semibold text-[21px]">Safety tips</h2>
            <ul className="flex flex-col gap-2">
              {tips.map((tip, index) => (
                <li key={index} className="text-primary font-[400] text-[14px] flex items-start gap-2">
                  • {tip}
                </li>
              ))}
            </ul>
            <button className="py-[12px] text-[17px] mt-2 flex items-center gap-2 justify-center rounded-[8px] font-500 w-full bg-white text-red border border-red">
              <AlertCircle size={20} className="text-red" /> Report this listing
            </button>
          </div>
        </div>
      </div>

      {/* Product Name */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h6 className="text-primary font-[600] text-[27px] md:text-[41px]">{product.name}</h6>
        </div>
      </div>

      <YouMightAlsoLike />
    </main>
  );
}


















  
