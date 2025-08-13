
'use client';

import {  useState } from 'react';
import {  useParams } from 'next/navigation';

import ProductDetails from './components/ProductDetails';
interface HotelSchemaProps {
  product: any;
}
const HotelSchema = ({ product }: HotelSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "marketplace",
    "name": product.name,
    "description": product.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressRegion": "Ikeja",
      "addressCountry": "NG"
    },
    "url": `https://verseonehotel.netlify.app/rooms/${product._name}`,
    "telephone": "+234 9131 114 346"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

const Page =  () => {


  const params = useParams();
const rawCategory = params?.productdetails;

let name = '';
if (typeof rawCategory === 'string') {
  name = decodeURIComponent(rawCategory);
} else if (Array.isArray(rawCategory) && rawCategory.length > 0) {
  name = decodeURIComponent(rawCategory[0]);
}

console.log(name);
const products = [
  {
    name: "Samsung Galaxy S21",
    price: 180000,
    description: "Sleek and powerful smartphone, gently used.",
    negotiable: true,
    neatlyUsed: true,
    fixed: true,
    verifiedSeller: true,
    image: "/product.png",
  },
  {
    name: "HP Pavilion Laptop",
    price: 250000,
    description: "Reliable laptop with good battery life, lightly used.",
    negotiable: false,
    neatlyUsed: true,
    fixed: false,
    verifiedSeller: true,
    image: "/product.png",
  },
  {
    name: "Sony WH-1000XM4 Headphones",
    price: 95000,
    description: "Noise-cancelling headphones, brand new condition.",
    negotiable: true,
    neatlyUsed: false,
    image: "/product.png",
    fixed: true,
    verifiedSeller: true,
  },
  {
    name: "PlayStation 5",
    price: 450000,
    fixed: false,
    description: "Latest PS5 console, used a few times only.",
    negotiable: false,
    neatlyUsed: true,
    verifiedSeller: false,
    image: "/product.png",
  },
  {
    name: "PlayStation 5",
    price: 450000,
    fixed: false,
    description: "Latest PS5 console, used a few times only.",
    negotiable: false,
    neatlyUsed: true,
    verifiedSeller: false,
    image: "/product.png",
  },
];


const filteredProduct=products.find((item)=>item.name==name)
console.log(filteredProduct)
//  <div className="flex justify-start gap-4 items-center mb-5">
//          <h6 className="text-primary font-[600] text-[21px] md:text-[27px]">Recommended for you</h6>

     
        

     
//       </div>
  return (
    <div>
      {filteredProduct && <HotelSchema product={filteredProduct} />}
      {filteredProduct ? (
        <ProductDetails product={filteredProduct} />
      ) : (
        <div className='flex items-center justify-center fpnt-bold'>Product not found.</div>
      )}
    </div>
  );
};

export default Page;
