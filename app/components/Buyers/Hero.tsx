
'use client';

import SearchPage from "./Search";
const Hero=()=>{
   
return <div className="flex flex-col gap-1 items-center text-center justify-center">
    <h1 className="text-primary text-[33px]   font-[700] leading-[42px] lg:text-[52px] ">
Find trusted electronics from Alaba sellers
    </h1>

   <p className="text-description text-[17px] md:text-[21px] mb-4 lg:mb-0 lg:mt-2">Built with the Alaba traders in mind. The market is now online.</p>

  <SearchPage />
</div>
}
export default Hero