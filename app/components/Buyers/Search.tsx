
'use client'
import {   Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
const SearchPage=()=>{
     const [searchValue,setSearchValue]=useState('')
    const router=useRouter()
        const search=()=>{
    if(searchValue.trim()!=='')
    router.push(`/searchresult?search=${searchValue}`)
        }
    
    const changeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    }


    return <form  onSubmit={(e) => {
    e.preventDefault();
    search();
  }} className="flex flex-1  items-center bg-white rounded-md px-3 py-2 mx-auto w-full rounded-[8px] border-[0.6px] border border-inputBorder lg:hidden">
          <input
            type="search"
            
            value={searchValue}
            onChange={changeSearchValue}
            placeholder="I’m looking for…."
            className="flex-1 outline-none text-sm text-gray-800 placeholder:text-gray-400"
          />
         <div className='flex items-center gap-1'>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" fill="none">
  <path d="M3.5 8.16667V5.83333C3.5 5.21449 3.74583 4.621 4.18342 4.18342C4.621 3.74583 5.21449 3.5 5.83333 3.5H8.16667M19.8333 3.5H22.1667C22.7855 3.5 23.379 3.74583 23.8166 4.18342C24.2542 4.621 24.5 5.21449 24.5 5.83333V8.16667M24.5 19.8333V22.1667C24.5 22.7855 24.2542 23.379 23.8166 23.8166C23.379 24.2542 22.7855 24.5 22.1667 24.5H19.8333M8.16667 24.5H5.83333C5.21449 24.5 4.621 24.2542 4.18342 23.8166C3.74583 23.379 3.5 22.7855 3.5 22.1667V19.8333" stroke="#172556" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14 17.5C15.933 17.5 17.5 15.933 17.5 14C17.5 12.067 15.933 10.5 14 10.5C12.067 10.5 10.5 12.067 10.5 14C10.5 15.933 12.067 17.5 14 17.5Z" stroke="#172556" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.6659 18.6678L16.4492 16.4512" stroke="#172556" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          <button type='submit' className="bg-primary text-white rounded-full p-1" onClick={search}>
          
         
<Search size={12} />
          </button>
         </div>
        </form>
}
export default SearchPage