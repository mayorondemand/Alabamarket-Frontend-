'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState,useEffect } from 'react';
const categories = [
  { name: 'UPS & Inverters', image: '/images/ups.png' },
  { name: 'Cable Trays', image: '/images/cable-trays.png' },
  { name: 'Switches & Sockets', image: '/images/switches.png' },
  { name: 'Refrigerators', image: '/images/refrigerators.png' },
  { name: 'Mixer Grinders', image: '/images/mixer-grinders.png' },
  { name: 'Fuse & Accessories', image: '/images/fuse.png' },
  { name: 'Switchboards & Panels', image: '/images/switchboards.png' },
  { name: 'Dishwashers', image: '/images/dishwashers.png' },
  { name: 'Battery & Chargers', image: '/images/battery.png' },
  { name: 'Fan & Appliances', image: '/images/fan.png' },
  { name: 'Lighting & Luminaries', image: '/images/lighting.png' },
  { name: 'Security Devices', image: '/images/security.png' },
  { name: 'Capacitor Bank', image: '/images/capacitor.png' },
  { name: 'Motors', image: '/images/motors.png' },
  { name: 'Fire Fighting Systems', image: '/images/fire-fighting.png' },
  { name: 'Video games', image: '/images/video-games.png' },
  { name: 'Solar Items', image: '/images/solar.png' },
  { name: 'Computer Accessories', image: '/images/computer.png' },
   { name: 'Fan & Appliances', image: '/images/fan.png' },
  { name: 'Lighting & Luminaries', image: '/images/lighting.png' },
  { name: 'Security Devices', image: '/images/security.png' },
  { name: 'Capacitor Bank', image: '/images/capacitor.png' },
  { name: 'Motors', image: '/images/motors.png' },
  { name: 'Fire Fighting Systems', image: '/images/fire-fighting.png' },
  { name: 'Video games', image: '/images/video-games.png' },
  { name: 'Solar Items', image: '/images/solar.png' },
  { name: 'Computer Accessories', image: '/images/computer.png' },
];

export default function Categories() {
    const [visibleCategories, setVisibleCategories] = useState(categories);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCategories(categories.slice(0, 14));
      } else {
        setVisibleCategories(categories);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className='bg-categoryBg py-[48px] px-[12px] rounded-lg'>
      <div className="grid grid-cols-3 gap-1  sm:grid-cols-3 md:gap-5 md:grid-cols-5  lg:grid-cols-9 ">
        {visibleCategories.map((cat, index) => (
          <Link
            key={index}
            href={`/search?name=${encodeURIComponent(cat.name)}`}
            className="flex flex-col items-center text-center mb-4 text-center md:mb-0"
          >
            <div className="rounded-full overflow-hidden">
              <Image
                // src={cat.image}
                src={'/categories.png'}
                alt={cat.name}
                width={80}
                height={80}
                className="object-cover h-[55px] w-[55px] md:h-[100px] md:w-[100px]"
              />
            </div>
            <p className="mt-2 text-sm text-primary font-medium">{cat.name}</p>
            
          </Link>
        ))}
      </div>


     <div className='flex items-center justify-end'>
         <div className="mt-6  inline-flex  items-center justify-end">
        <Link
          href="/categories"
                    className="text-primary text-[11px] font-semibold underline  flex items-center  gap-2 md:text-[17px]"

        >
          View all categories <span className='bg-[#E9ECF4] p-2 rounded-full'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M10.7828 8.66589L7.51612 11.9326C7.38279 12.0659 7.31879 12.2214 7.32412 12.3992C7.32945 12.577 7.39901 12.7326 7.53279 12.8659C7.66612 12.9881 7.82168 13.0521 7.99945 13.0579C8.17723 13.0637 8.33279 12.9997 8.46612 12.8659L12.8661 8.46589C12.9328 8.39922 12.9801 8.327 13.0081 8.24922C13.0361 8.17144 13.0497 8.08811 13.0488 7.99922C13.0479 7.91033 13.0339 7.827 13.0068 7.74922C12.9797 7.67144 12.9326 7.59922 12.8655 7.53255L8.46545 3.13255C8.34323 3.01033 8.19034 2.94922 8.00679 2.94922C7.82323 2.94922 7.66501 3.01033 7.53212 3.13255C7.39879 3.26589 7.33212 3.42433 7.33212 3.60789C7.33212 3.79144 7.39879 3.94966 7.53212 4.08255L10.7828 7.33255H3.33279C3.1439 7.33255 2.98545 7.39655 2.85745 7.52455C2.72945 7.65255 2.66568 7.81077 2.66612 7.99922C2.66656 8.18766 2.73057 8.34611 2.85812 8.47455C2.98568 8.603 3.1439 8.66677 3.33279 8.66589H10.7828Z" fill="#172556"/>
</svg></span> 
        </Link>
      </div>
     </div>
    </div>
  );
}
