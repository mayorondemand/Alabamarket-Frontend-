
'use client';

import Link from 'next/link';
import SearchPage from '../components/Buyers/Search';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Products from './components/Products';
import PriceFilter from '../components/Buyers/PriceFilter';
export default function Search() {
     const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const decodedName = name ? decodeURIComponent(name) : '';
    const [linear,setLinear]=useState(true)
  // Removed invalid isFallback check
//   const categories = [
//   {
//     name: 'Computer Accessories',
//     products: [
//       { title: 'Keyboards & Mice', image: '/images/keyboard-mouse.png' },
//       { title: 'External Hard Drives', image: '/images/external-drive.png' },
//       { title: 'USB Hubs', image: '/images/usb-hub.png' },
//       { title: 'Laptop Cooling Pads', image: '/images/cooling-pad.png' },
//       { title: 'Webcams', image: '/images/webcam.png' },
//       { title: 'Headsets & Microphones', image: '/images/headset.png' },
//       { title: 'Monitors', image: '/images/monitor.png' },
//     ],
//   },
//   {
//     name: 'Cable Trays',
//     products: [
//       { title: 'Perforated Cable Trays', image: '/images/perforated-tray.png' },
//       { title: 'Ladder Cable Trays', image: '/images/ladder-tray.png' },
//       { title: 'Wire Mesh Trays', image: '/images/wire-mesh-tray.png' },
//       { title: 'Solid Bottom Trays', image: '/images/solid-bottom-tray.png' },
//       { title: 'Channel Cable Trays', image: '/images/channel-tray.png' },
//     ],
//   },
//   {
//     name: 'Switches & Sockets',
//     products: [
//       { title: 'Light Switches', image: '/images/light-switch.png' },
//       { title: 'Power Sockets', image: '/images/power-socket.png' },
//       { title: 'Smart Plugs', image: '/images/smart-plug.png' },
//       { title: 'Dimmer Switches', image: '/images/dimmer-switch.png' },
//       { title: 'USB Wall Sockets', image: '/images/usb-wall-socket.png' },
//     ],
//   },
//   {
//     name: 'Refrigerators',
//     products: [
//       { title: 'Single Door', image: '/images/single-door-fridge.png' },
//       { title: 'Double Door', image: '/images/double-door-fridge.png' },
//       { title: 'Side-by-Side', image: '/images/side-by-side-fridge.png' },
//       { title: 'Mini Fridges', image: '/images/mini-fridge.png' },
//       { title: 'French Door', image: '/images/french-door-fridge.png' },
//     ],
//   },
//   {
//     name: 'Mixer Grinders',
//     products: [
//       { title: 'Table Top Grinders', image: '/images/table-top-grinder.png' },
//       { title: 'Juicer Mixer Grinders', image: '/images/juicer-mixer.png' },
//       { title: 'Heavy Duty Grinders', image: '/images/heavy-duty-grinder.png' },
//       { title: 'Mini Mixers', image: '/images/mini-mixer.png' },
//     ],
//   },
//   {
//     name: 'Fuse & Accessories',
//     products: [
//       { title: 'Glass Tube Fuses', image: '/images/glass-fuse.png' },
//       { title: 'Cartridge Fuses', image: '/images/cartridge-fuse.png' },
//       { title: 'Fuse Holders', image: '/images/fuse-holder.png' },
//       { title: 'Resettable Fuses', image: '/images/resettable-fuse.png' },
//       { title: 'High Voltage Fuses', image: '/images/high-voltage-fuse.png' },
//     ],
//   },
//   {
//     name: 'Switchboards & Panels',
//     products: [
//       { title: 'Distribution Boards', image: '/images/distribution-board.png' },
//       { title: 'Control Panels', image: '/images/control-panel.png' },
//       { title: 'Meter Boards', image: '/images/meter-board.png' },
//       { title: 'Industrial Panels', image: '/images/industrial-panel.png' },
//       { title: 'Weatherproof Boards', image: '/images/weatherproof-board.png' },
//     ],
//   },
// ];
  return (
    <main className="container flex flex-col gap-4 md:py-10">
        <div className="flex items-center gap-4 mb-4 justify-between">
          <div className='flex items-center gap-4 '>
             <Link href={`/`}> <h6 className="font-[400]  text-prevPage text-[14px] md:text-[21px]">Home</h6></Link>
             <Link href={`/categories`}> <p
              className=" text-[14px]  font-[500] text-prevPage md:text-[17px]"
            >
              All categories 
            </p></Link>
           
             <p
              className="text-primary text-[14px]  font-[500] underline md:text-[17px]"
            >
             {decodedName}
            </p>
          </div>
           <div className="flex items-center gap-4">  <div  onClick={(()=>{
    setLinear(false)
   })} className="bg-collpse h-fit  p-3  rounded-full cursor-pointer ">

   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3.45691 11.171H20.5428C22.0801 11.171 22.8532 10.418 22.8532 8.87091V5.03391C22.8532 3.49705 22.0801 2.75391 20.5432 2.75391H3.45648C1.91963 2.75391 1.14648 3.49705 1.14648 5.03391V8.87134C1.14648 10.4185 1.91963 11.1715 3.45648 11.1715M3.45648 21.2463H20.5423C22.0796 21.2463 22.8528 20.5032 22.8528 18.9565V15.1092C22.8528 13.5822 22.0796 12.8292 20.5428 12.8292H3.45648C1.91963 12.8292 1.14648 13.5822 1.14648 15.1092V18.9565C1.14648 20.5032 1.91963 21.2463 3.45648 21.2463Z" fill="#8B92AA"/>
</svg></div>
         <div  onClick={(()=>{
    setLinear(true)
   })} className="bg-collpse h-fit  p-3  rounded-full cursor-pointer">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 21H7.675V16.325H3V21ZM9.675 21H14.325V16.325H9.675V21ZM16.325 21H21V16.325H16.325V21ZM3 14.325H7.675V9.675H3V14.325ZM9.675 14.325H14.325V9.675H9.675V14.325ZM16.325 14.325H21V9.675H16.325V14.325ZM3 7.675H7.675V3H3V7.675ZM9.675 7.675H14.325V3H9.675V7.675ZM16.325 7.675H21V3H16.325V7.675Z" fill="#172556"/>
</svg>
  </div></div>
          </div>
        <SearchPage />


<div className='grid grid-cols gap-4 md:grid-cols-5'>
   <div className='sticky top-20 md:col-span-1 bg-categoryBg py-2 px-4 rounded-md h-fit'> <PriceFilter  /></div>
    
        <div className='md:col-span-4 '>
            <Products linear={linear} />
        </div>
</div>


    </main>
  );
}0