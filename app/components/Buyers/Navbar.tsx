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
  return (
    <nav className="bg-primary py-3 container">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        
        <div className="flex items-center gap-4">
          <Link href="/" className="bg-yellow-400 rounded-md px-2 py-1 flex items-center gap-2">
                  <Image src="./ALABA LOGO.PNG" alt="alaba-market-logo" className="" width={120} height={120} />
            
          </Link>

          <div className="flex items-center text-white text-sm gap-1">
            <MapPin size={16} />
            <span>Lagos, Nigeria</span>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex flex-1 max-w-2xl items-center bg-white rounded-md px-3 py-2 mx-auto">
          <input
            type="text"
            value={searchValue}
            onChange={changeSearchValue}
            placeholder="I’m looking for…."
            className="flex-1 outline-none text-sm text-gray-800 placeholder:text-gray-400"
          />
          <ScanSearch size={18} className="text-primary mr-2 cursor-pointer" />
          <button className="bg-primary text-white rounded-full p-1" onClick={search}>
            <Search size={16} />
          </button>
        </div>

        <div className="flex items-center gap-4 text-white text-sm">
          <Link href="/saved" className="flex items-center gap-1 hover:underline">
            <Heart size={16} />
            <span>Saved items</span>
          </Link>
          <Link href="/auth" className="flex items-center gap-1 hover:underline">
            <User size={16} />
            <span>Sign in</span>
          </Link>
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
