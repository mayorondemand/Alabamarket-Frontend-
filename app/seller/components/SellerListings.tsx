
'use client'

import Link from 'next/link'
// import SearchPage from '../components/Buyers/Search'
// import SearchPage from '@/app/components/Buyers/Search'
import { useState,  } from 'react'
// import Products from '@/app/components/Buyers/Products'
// import PriceFilter from '@/app/components/Buyers/PriceFilter'
import SellerProducts from './SellerProducts'
import Filter from './Filter'
function SellerListing() {

const[showReport,setShowReport]=useState(false)
const[linear,setLinear]=useState(false)

const options=[{name:'Most recent'},{name:"Earliest"}]
 const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>("Most recent");
  return (
    <main className="flex flex-col gap-4 mt-14 md:py-10">
      

      {/* <SearchPage /> */}
       <div className="flex justify-between gap-4 items-center mb-5">
         <h6 className="text-primary font-[600] text-[21px] md:text-[27px]"> {`Listings (56)`} </h6>

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
  </div> 
  {/* <select name="" id="" className='rounded-[4px] py-[8px] px-[12px] border-1 border-[#CDD0DC] bg-[#E4E5E9] hidden md:flex'>
    {options.map((item,index)=>{
        return <option key={index}> {item.name} </option>
    })}
  </select> */}
  <div className="relative w-full hidden md:block">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-fit rounded-[4px] py-[8px] px-2 border border-[#CDD0DC] bg-[#E4E5E9] text-[#172556] text-sm"
      >
        {selected}
        {/* Chevron (toggle between open/close) */}
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#172556"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="ml-2"
          >
            <path
              d="M12 6.33594L8 10.3359L4 6.33594H12Z"
              fill="#172556"
              stroke="#172556"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute mt-1 w-fit  rounded-[4px] border border-[#CDD0DC] bg-white shadow-md z-10">
          {options.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setSelected(item.name);
                setOpen(false);
              }}
              className="block w-fit shrink-0 text-left px-3 py-2 text-sm text-[#172556] hover:bg-[#E4E5E9]"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  
   </div>
  
        

     
      </div>
      
   <div className="relative w-full md:hidden">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full rounded-[4px] py-[8px] px-2 border border-[#CDD0DC] bg-[#E4E5E9] text-[#172556] text-sm"
      >
        {selected}
        {/* Chevron (toggle between open/close) */}
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#172556"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="ml-2"
          >
            <path
              d="M12 6.33594L8 10.3359L4 6.33594H12Z"
              fill="#172556"
              stroke="#172556"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute mt-1 w-full rounded-[4px] border border-[#CDD0DC] bg-white shadow-md z-10">
          {options.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setSelected(item.name);
                setOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-sm text-[#172556] hover:bg-[#E4E5E9]"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>

      <div className="grid grid-cols gap-4 xl:grid-cols-5 xl:gap-8">


{/* Desktop Sidebar xl and above) */}
<div className="bg-categoryBg xl:col-span-1 lg:sticky top-20 py-2 lg:px-4 xl:bg-filterBg rounded-md h-fit w-full xl:px-1">
  <Filter /> 
</div>


        <div className="xl:col-span-4">
          <SellerProducts linear={linear} />
        </div>
      </div>
    </main>
  )
}
export default SellerListing
// export default function Search() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex items-center justify-center min-h-screen">
//           <p className="text-gray-500 text-lg">Loading...</p>
//         </div>
//       }
//     >
//       <SearchContent />
//     </Suspense>
//   )
// }
