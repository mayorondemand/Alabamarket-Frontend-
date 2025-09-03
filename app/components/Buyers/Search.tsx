
'use client'

import { useRouter } from 'next/navigation'
import { useState, Suspense } from 'react'
import {ScanSearch, Search} from 'lucide-react'
function SearchPageInner() {
  const [searchValue, setSearchValue] = useState('')
  const router = useRouter()

  const search = () => {
    if (searchValue.trim() !== '') {
      router.push(`/search?search=${searchValue}`)
    }
  }

  const changeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
   
     <form  onSubmit={(e) => {
    e.preventDefault();
    search();
  }} className="flex flex-1 items-center bg-white rounded-md px-3 py-2 mx-auto w-full rounded-[8px] border-[0.6px] border border-inputBorder lg:max-w-2xl ">
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
  )
}

export default function SearchPage() {
  return (
  <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-500 text-lg">Loading...</p>
        </div>
      }
    >
      <SearchPageInner />
    </Suspense>
  )
}
