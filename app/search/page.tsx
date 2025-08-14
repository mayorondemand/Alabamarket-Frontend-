
'use client'

import Link from 'next/link'
import SearchPage from '../components/Buyers/Search'
import { useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'
import Products from './components/Products'
import PriceFilter from '../components/Buyers/PriceFilter'

function SearchContent() {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const decodedName = name ? decodeURIComponent(name) : ''
  const [linear, setLinear] = useState(true)
const[showReport,setShowReport]=useState(false)
  return (
    <main className="container flex flex-col gap-4 md:py-10">
      <div className="flex items-center gap-4 mb-4 justify-between">
        <div className="flex items-center gap-4 ">
          <Link href={`/`}>
            <h6 className="font-[400] text-prevPage text-[14px] md:text-[21px]">Home</h6>
          </Link>
          <Link href={`/categories`}>
            <p className="text-[14px] font-[500] text-prevPage md:text-[17px]">All categories</p>
          </Link>
          <p className="text-primary text-[14px] font-[500] underline md:text-[17px]">{decodedName}</p>
        </div>

        <div className="flex items-center gap-4">
          <div
            onClick={() => {
              setLinear(false)
            }}
            className="bg-collpse h-fit p-3 rounded-full cursor-pointer"
          >
            {/* collapse icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
              <path
                d="M3.45691 11.171H20.5428C22.0801 11.171 22.8532 10.418 22.8532 8.87091V5.03391C22.8532 3.49705 22.0801 2.75391 20.5432 2.75391H3.45648C1.91963 2.75391 1.14648 3.49705 1.14648 5.03391V8.87134C1.14648 10.4185 1.91963 11.1715 3.45648 11.1715M3.45648 21.2463H20.5423C22.0796 21.2463 22.8528 20.5032 22.8528 18.9565V15.1092C22.8528 13.5822 22.0796 12.8292 20.5428 12.8292H3.45648C1.91963 12.8292 1.14648 13.5822 1.14648 15.1092V18.9565C1.14648 20.5032 1.91963 21.2463 3.45648 21.2463Z"
                fill="#8B92AA"
              />
            </svg>
          </div>

          <div
            onClick={() => {
              setLinear(true)
            }}
            className="bg-collpse h-fit p-3 rounded-full cursor-pointer"
          >
            {/* grid icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
              <path
                d="M3 21H7.675V16.325H3V21ZM9.675 21H14.325V16.325H9.675V21ZM16.325 21H21V16.325H16.325V21ZM3 14.325H7.675V9.675H3V14.325ZM9.675 14.325H14.325V9.675H9.675V14.325ZM16.325 14.325H21V9.675H16.325V14.325ZM3 7.675H7.675V3H3V7.675ZM9.675 7.675H14.325V3H9.675V7.675ZM16.325 7.675H21V3H16.325V7.675Z"
                fill="#172556"
              />
            </svg>
          </div>
        </div>
      </div>

      <SearchPage />
<div className='flex item-center justify-end xl:hidden'>
          <p className='underline text-primary text-[14px] font-[600]' onClick={() => {
        setShowReport(true);
      }}>filter search </p>

</div>
<button className='text-primary p-[12px] bg-resultLenghtBg rounded-[12px] text-[14px] font-[500] w-fit'> 200 products found </button>
      <div className="grid grid-cols gap-4 xl:grid-cols-5">
       {/* Mobile/Tablet Overlay (lg and below) */}
<div
  className={`
    fixed font-Poppins  inset-0 bg-[rgba(57,64,58,0.35)] backdrop-blur-[3.5px]
    flex items-start md: z-50 transition-all duration-300 ease-in-out
    ${showReport ? 'opacity-100 pointer-events-auto traslate-x-0' : 'opacity-0 pointer-events-none traslate-x-full'}
    xl:hidden
  `}
>
         
  <div className="bg-white  py-8 px-4 h-3/4 w-full">
      {/* <div className=' flex items-center justify-end   ' ><div className='cursor-pointer mt-2 mb-8' onClick={() => {
        setShowReport(false);
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_365_35066"maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
    <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M14.8289 9.17188L9.17188 14.8289M9.17188 9.17188L14.8289 14.8289" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </mask>
  <g mask="url(#mask0_365_35066)">
    <path d="M0 0H24V24H0V0Z" fill="#E30808"/>
  </g>
</svg>
      </div>
</div> */}
    <PriceFilter setShowReport={ setShowReport} />
  </div>
</div>

{/* Desktop Sidebar (xl and above) */}
<div className="hidden xl:block xl:col-span-1 lg:sticky top-20 py-2 px-4 xl:bg-filterBg rounded-md h-fit w-full xl:px-1">
  <PriceFilter setShowReport={ setShowReport} />
</div>


        <div className="xl:col-span-4">
          <Products linear={linear} />
        </div>
      </div>
    </main>
  )
}

export default function Search() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-500 text-lg">Loading...</p>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  )
}
