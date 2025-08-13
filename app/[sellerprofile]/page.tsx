
'use client';

import {  useParams } from 'next/navigation';
import AllSubCategories from '../categories/[name]/components/AllSubCategories';
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
const rawCategory = params?.sellerprofile;

let name = '';
if (typeof rawCategory === 'string') {
  name = decodeURIComponent(rawCategory);
} else if (Array.isArray(rawCategory) && rawCategory.length > 0) {
  name = decodeURIComponent(rawCategory[0]);
}

console.log(name);
const categories = [
  {
    name: 'Computer Accessories',
    subcategories: [
      { title: 'Keyboards & Mice', image: '/images/keyboard-mouse.png' },
      { title: 'External Hard Drives', image: '/images/external-drive.png' },
      { title: 'USB Hubs', image: '/images/usb-hub.png' },
      { title: 'Laptop Cooling Pads', image: '/images/cooling-pad.png' },
      { title: 'Webcams', image: '/images/webcam.png' },
      { title: 'Headsets & Microphones', image: '/images/headset.png' },
      { title: 'Monitors', image: '/images/monitor.png' },
    ],
    products: [
       {
    name: "Samsung Galaxy S21",
    price: 180000,
    description: "Sleek and powerful smartphone, gently used.",
    negotiable: true,
    neatlyUsed: true,
        fixed:true,
      verifiedSeller:true,

        img: "/product.png",

  },
  {
    name: "HP Pavilion Laptop",
    price: 250000,
    description: "Reliable laptop with good battery life, lightly used.",
    negotiable: false,
    neatlyUsed: true,
        fixed:false,
      verifiedSeller:true,

        image: "/product.png",

  },
  {
    name: "Sony WH-1000XM4 Headphones",
    price: 95000,
    description: "Noise-cancelling headphones, brand new condition.",
    negotiable: true,
    neatlyUsed: false,
        image: "/product.png",
            fixed:true,
                  verifiedSeller:true,



  },
  {
    name: "PlayStation 5",
    price: 450000,
    fixed:false,
    description: "Latest PS5 console, used a few times only.",
    negotiable: false,
    neatlyUsed: true,
          verifiedSeller:false,
    image: "/product.png",
  },
{
    name: "PlayStation 5",
    price: 450000,
    fixed:false,
    description: "Latest PS5 console, used a few times only.",
    negotiable: false,
    neatlyUsed: true,
          verifiedSeller:false,

    image: "/product.png",
  },
    ]
  },
  {
    name: 'Cable Trays',
    subcategories: [
      { title: 'Perforated Cable Trays', image: '/images/perforated-tray.png' },
      { title: 'Ladder Cable Trays', image: '/images/ladder-tray.png' },
      { title: 'Wire Mesh Trays', image: '/images/wire-mesh-tray.png' },
      { title: 'Solid Bottom Trays', image: '/images/solid-bottom-tray.png' },
      { title: 'Channel Cable Trays', image: '/images/channel-tray.png' },
    ],
    products: [
      { title: 'Aluminium Perforated Tray - 2m', image: '/images/perforated-tray.png', price: 45 },
      { title: 'Steel Ladder Tray - 3m', image: '/images/ladder-tray.png', price: 65 },
    ]
  },
  {
    name: 'Refrigerators',
    subcategories: [
      { title: 'Single Door', image: '/images/single-door-fridge.png' },
      { title: 'Double Door', image: '/images/double-door-fridge.png' },
      { title: 'Side-by-Side', image: '/images/side-by-side-fridge.png' },
      { title: 'Mini Fridges', image: '/images/mini-fridge.png' },
      { title: 'French Door', image: '/images/french-door-fridge.png' },
    ],
    products: [
      { title: 'Samsung Family Hub', image: '/images/samsung-family-hub.png', price: 2200 },
      { title: 'LG InstaView Door-in-Door', image: '/images/lg-instaview.png', price: 2500 },
      { title: 'Hisense Mini Fridge', image: '/images/hisense-mini.png', price: 150 },
    ]
  }
];


const filteredCategory=categories.filter((item)=>item.name==name)
console.log(filteredCategory)
  return (
    <div>
      <HotelSchema product={filteredCategory}  />
      <AllSubCategories categories={filteredCategory} />
     
    </div>
  );
};

export default Page;
