'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Heart, User, ScanSearch, Search,Bell,MessageSquare, } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const Navbar = () => {
const [searchValue,setSearchValue]=useState('')
const router=useRouter()
    const search=()=>{
if(searchValue.trim()!=='')
router.push(`/searchresult?search=${searchValue}`)
    }

const changeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSearchValue(e.target.value);
}
let isAuthenticated=false
const IconLink = ({
  href,
  label,
  icon,
  whiteBg,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  whiteBg?: boolean;
}) => (
  <Link href={href} aria-label={label} className="hover:underline">
    <span
      className={`p-2 rounded-full flex items-center justify-center ${
        whiteBg ? 'bg-white text-primary' : 'text-white'
      }`}
    >
      {icon}
    </span>
  </Link>
);
const [showPopUp,setShowPopUp]=useState(false)
  return (
   <> 
   {/* desktop navbar */}
   <nav className="fixed bg-primary py-6   left-0 right-0 top-0 z-50 backdrop-blur hidden md:block">
      <div className="flex container items-center justify-between gap-4 flex-wrap">
        
        <div className="flex items-center gap-4">
          <Link href="/" className="bg-yellow-400 rounded-md px-2 py-1 flex items-center gap-2">
                  <Image src="/ALABA LOGO.PNG" alt="alaba-market-logo" className="" width={120} height={120} />
            
          </Link>

          <div className="flex items-center text-white text-sm gap-1">
            <MapPin size={18} className='fill-white text-primary' />
            <span>Lagos, Nigeria</span>
          </div>
        </div>

        <form  onSubmit={(e) => {
    e.preventDefault();
    search();
  }} className="flex flex-1 max-w-2xl items-center bg-white rounded-md px-3 py-2 mx-auto">
          <input
            type="search"
            
            value={searchValue}
            onChange={changeSearchValue}
            placeholder="I’m looking for…."
            className="flex-1 outline-none text-sm text-gray-800 placeholder:text-gray-400"
          />
          <ScanSearch size={21} className="text-primary mr-2 cursor-pointer" />
          <button type='submit' className="bg-primary text-white rounded-full p-1" onClick={search}>
            <Search size={18} />
          </button>
        </form>

        
<div className="flex items-center gap-6 text-sm">
  <IconLink
    href="/saved"
    label="Saved items"
    icon={<Heart size={20} className={isAuthenticated ? 'fill-white' : 'fill-primary'} />}
    whiteBg={!isAuthenticated}
  />

  <IconLink
    href="/auth"
    label="Sign in"
    icon={<User size={20} className={isAuthenticated ? 'fill-white' : 'fill-primary'} />}
    whiteBg={!isAuthenticated}
  />

  {!isAuthenticated && (
    <>
      <IconLink
        href="/notifications"
        label="Notifications"
        icon={<Bell size={20} className="fill-primary" />}
        whiteBg
      />
      <IconLink
        href="/messages"
        label="Messages"
        icon={<MessageSquare size={20} className="fill-primary" />}
        whiteBg
      />
    </>
  )}

  <Link
    href="/sell"
    className="bg-white text-primary font-medium px-8 py-3 rounded-md hover:opacity-90"
  >
    Sell now
  </Link>
</div>

      </div>
    </nav>
    
{/* mobile navbar */}
     <nav className="bg-white py-[14px]  fixed left-0 right-0 top-0 z-50 backdrop-blur shadow-md  md:hidden">
      <div className="flex container items-center justify-between gap-4 flex-wrap">
        
        <div className="flex items-center gap-4">
          <Link href="/" className="bg-yellow-400 rounded-md px-2 py-1 flex items-center gap-2">
                  <Image src="/ALABA LOGO.PNG" alt="alaba-market-logo" className="" width={120} height={120} />
            
          </Link>

         
        </div>

       

        
{!isAuthenticated?<div className="flex items-center gap-[24px] text-sm">

  <div className='bg-[#EFEEEE] p-2 rounded-full'>
   <Link href={`/saved`}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 24" fill="none">
  <path d="M20.7048 15.9989C20.627 15.9052 20.5506 15.8114 20.4756 15.7209C19.4443 14.4736 18.8204 13.7208 18.8204 10.1897C18.8204 8.36156 18.3831 6.86156 17.5211 5.73656C16.8854 4.90547 16.0262 4.275 14.8937 3.80906C14.8791 3.80096 14.8661 3.79032 14.8553 3.77766C14.4479 2.41359 13.3333 1.5 12.0761 1.5C10.8189 1.5 9.70466 2.41359 9.29732 3.77625C9.28646 3.78847 9.27363 3.79877 9.25935 3.80672C6.61654 4.89469 5.33216 6.98203 5.33216 10.1883C5.33216 13.7208 4.70919 14.4736 3.677 15.7195C3.602 15.81 3.5256 15.9019 3.44779 15.9975C3.24679 16.2399 3.11944 16.5348 3.08081 16.8473C3.04218 17.1598 3.09389 17.4769 3.22982 17.7609C3.51904 18.3703 4.13544 18.7486 4.83904 18.7486H19.3183C20.0186 18.7486 20.6308 18.3708 20.9209 17.7642C21.0574 17.4801 21.1096 17.1628 21.0713 16.8499C21.033 16.537 20.9058 16.2417 20.7048 15.9989ZM12.0761 22.5C12.7534 22.4995 13.418 22.3156 13.9993 21.9679C14.5806 21.6202 15.057 21.1217 15.3779 20.5252C15.3931 20.4966 15.4005 20.4646 15.3996 20.4322C15.3987 20.3999 15.3895 20.3684 15.3728 20.3407C15.3561 20.313 15.3325 20.2901 15.3043 20.2742C15.2761 20.2583 15.2443 20.25 15.212 20.25H8.94107C8.90869 20.2499 8.87683 20.2582 8.8486 20.274C8.82037 20.2899 8.79672 20.3128 8.77997 20.3405C8.76321 20.3682 8.75392 20.3997 8.75299 20.4321C8.75206 20.4645 8.75952 20.4965 8.77466 20.5252C9.09554 21.1216 9.57184 21.6201 10.1531 21.9678C10.7343 22.3155 11.3988 22.4994 12.0761 22.5Z" fill="#172556"/>
</svg></Link>
  </div>

  <div className='bg-[#EFEEEE] p-2 rounded-full' onClick={() => {
        setShowPopUp(true);
      }}>
   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
  <path d="M4 7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7C20 7.26522 19.8946 7.51957 19.7071 7.70711C19.5196 7.89464 19.2652 8 19 8H5C4.73478 8 4.48043 7.89464 4.29289 7.70711C4.10536 7.51957 4 7.26522 4 7ZM4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11H19C19.2652 11 19.5196 11.1054 19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071C19.5196 12.8946 19.2652 13 19 13H5C4.73478 13 4.48043 12.8946 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12ZM4 17C4 16.7348 4.10536 16.4804 4.29289 16.2929C4.48043 16.1054 4.73478 16 5 16H19C19.2652 16 19.5196 16.1054 19.7071 16.2929C19.8946 16.4804 20 16.7348 20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17Z" fill="#172556"/>
</svg>
  </div>

  

  
</div>:<div className="flex items-center gap-[24px] text-sm">

  <div className='bg-[#EFEEEE] p-2 rounded-full'>
   <Link href={`/saved`}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 29 28" fill="none">
  <path d="M8.82487 4.66602C5.28112 4.66602 2.4082 7.53893 2.4082 11.0827C2.4082 17.4993 9.99154 23.3327 14.0749 24.6895C18.1582 23.3327 25.7415 17.4993 25.7415 11.0827C25.7415 7.53893 22.8686 4.66602 19.3249 4.66602C17.1549 4.66602 15.2357 5.74343 14.0749 7.39252C13.4831 6.54983 12.697 5.86209 11.7832 5.3875C10.8693 4.91291 9.8546 4.66543 8.82487 4.66602Z" fill="#172556" stroke="#172556" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></Link>
  </div>

  <div className='bg-[#EFEEEE] p-2 rounded-full'>
   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 24" fill="none">
  <path d="M21.7241 20.6256C21.6583 20.7396 21.5636 20.8343 21.4495 20.9002C21.3355 20.966 21.2061 21.0006 21.0744 21.0006H3.07443C2.94284 21.0005 2.8136 20.9657 2.6997 20.8998C2.58579 20.8339 2.49122 20.7393 2.42548 20.6253C2.35975 20.5113 2.32516 20.382 2.3252 20.2504C2.32523 20.1188 2.35988 19.9896 2.42568 19.8756C3.85349 17.4072 6.0538 15.6372 8.62161 14.7981C7.35146 14.042 6.36463 12.8898 5.81266 11.5185C5.2607 10.1473 5.17413 8.63272 5.56625 7.20749C5.95836 5.78226 6.80748 4.52515 7.9832 3.62921C9.15892 2.73327 10.5962 2.24805 12.0744 2.24805C13.5526 2.24805 14.9899 2.73327 16.1657 3.62921C17.3414 4.52515 18.1905 5.78226 18.5826 7.20749C18.9747 8.63272 18.8882 10.1473 18.3362 11.5185C17.7842 12.8898 16.7974 14.042 15.5272 14.7981C18.0951 15.6372 20.2954 17.4072 21.7232 19.8756C21.7891 19.9895 21.824 20.1188 21.8241 20.2505C21.8243 20.3821 21.7898 20.5115 21.7241 20.6256Z" fill="#172556"/>
</svg>
  </div>

  

  
</div>
}


      </div>
    </nav>

    
<div className={`fixed font-Poppins inset-0 bg-[rgba(57,64,58,0.35)] backdrop-blur-[3.5px] flex items-end justify-center z-50    z-50 transition-all duration-300 ease-in-out
 transform ${
    showPopUp ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none'
  }`}>
  <div className="bg-white p-6 rounded-tr-[24px] rounded-tl-[24px] shadow-lg  w-full">
   

    <div className='flex flex-col gap-[60px]'>
      <div className='flex items-top justify-between'>
      <div className='flex items-top gap-[15px]'>  <Image alt='username' className='h-[64px] w-[64px] aspect-square' src={'/eze.png'} height={100} width={100}/>  <div className='flex flex-col gap-[6px]'> <h4 className='class="text-primary font-Poppins text-[21px] font-semibold leading-[150%]"'>Soporuchi Eze</h4> <p className="text-primary font-Poppins text-[14px] font-normal leading-[20px]"
>soporuchi45@gmail.com</p> <Link href={`/user`} className='text-[#172556] mt-[7px] font-Poppins text-[14px] font-semibold leading-[150%] underline
'>View profile</Link> </div> </div>
      <div className='cursor-pointer' onClick={() => {
        setShowPopUp(false);
      }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_365_31154"  maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
    <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M14.8289 9.17188L9.17188 14.8289M9.17188 9.17188L14.8289 14.8289" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </mask>
  <g mask="url(#mask0_365_31154)">
    <path d="M0 0H24V24H0V0Z" fill="#E30808"/>
  </g>
</svg></div>

    </div>

    <button
      
      className=" py-[12px] text-[17px] rounded-[8px] font-500 text-center w-full bg-primary text-white rounded-md"
    >
      Sell now
    </button>
    </div>
  </div>
</div>

    </>




  );
};

export default Navbar;
