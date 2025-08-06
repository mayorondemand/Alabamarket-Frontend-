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
      className={`p-1 rounded-full flex items-center justify-center ${
        whiteBg ? 'bg-white text-primary' : 'text-white'
      }`}
    >
      {icon}
    </span>
  </Link>
);
  return (
    <nav className="bg-primary py-3 container">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        
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
          <ScanSearch size={18} className="text-primary mr-2 cursor-pointer" />
          <button type='submit' className="bg-primary text-white rounded-full p-1" onClick={search}>
            <Search size={18} />
          </button>
        </form>

        {/* {user?<div className="flex items-center gap-4 text-white text-sm">
          <Link href="/saved" className="flex items-center gap-1 hover:underline">
            <Heart size={18}  className='text-white fill-white'/>
            <span>Saved items</span>
          </Link>
          <Link href="/auth" className="flex items-center gap-1 hover:underline">
            <User size={18} className='text-white fill-white' />
            <span>Sign in</span>
          </Link>
          <Link
            href="/sell"
            className="bg-white text-primary font-medium px-4 py-2 rounded-md hover:opacity-90"
          >
            Sell now
          </Link>
        </div>:
        <div className="flex items-center gap-4 text-white text-sm">
             <Link href="/saved" className="flex items-center gap-1 hover:underline">
            <span className='p-1 bg-white rounded-full flex flex-col items-center justify-center'>
                <Bell size={18} className='fill-primary text-primary' />
            </span>
          
          </Link>
          <Link href="/auth" className="flex items-center gap-1 hover:underline">
           <span className='p-1 bg-white rounded-full flex flex-col items-center justify-center'>
                          <MessageSquare size={18} className='fill-primary text-primary' />

            </span>
          </Link>
          <Link href="/saved" className="flex items-center gap-1 hover:underline">
            <span className='p-1 bg-white rounded-full flex flex-col items-center justify-center'>
                <Heart size={18} className='fill-primary text-primary' />
            </span>
          
          </Link>
          <Link href="/auth" className="flex items-center gap-1 hover:underline">
           <span className='p-1 bg-white rounded-full flex flex-col items-center justify-center'>
                          <User size={18} className='fill-primary text-primary' />

            </span>
          </Link>
          <Link
            href="/sell"
            className="bg-white text-primary font-medium px-4 py-2 rounded-md hover:opacity-90"
          >
            Sell now
          </Link>
        </div>} */}
<div className="flex items-center gap-4 text-sm">
  <IconLink
    href="/saved"
    label="Saved items"
    icon={<Heart size={18} className={isAuthenticated ? 'fill-white' : 'fill-primary'} />}
    whiteBg={!isAuthenticated}
  />

  <IconLink
    href="/auth"
    label="Sign in"
    icon={<User size={18} className={isAuthenticated ? 'fill-white' : 'fill-primary'} />}
    whiteBg={!isAuthenticated}
  />

  {!isAuthenticated && (
    <>
      <IconLink
        href="/notifications"
        label="Notifications"
        icon={<Bell size={18} className="fill-primary" />}
        whiteBg
      />
      <IconLink
        href="/messages"
        label="Messages"
        icon={<MessageSquare size={18} className="fill-primary" />}
        whiteBg
      />
    </>
  )}

  <Link
    href="/sell"
    className="bg-white text-primary font-medium px-4 py-2 rounded-md hover:opacity-90"
  >
    Sell now
  </Link>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
