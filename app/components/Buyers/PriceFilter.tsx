'use client';

import {  useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SellerFilter from './SellersFilters';
import Link from 'next/link';
const priceRanges = [
  { label: '₦400 - ₦800', value: '400-800' },
  { label: '₦1,000 - ₦4,000', value: '1000-4000' },
  { label: '₦5,000 - ₦10,000', value: '5000-10000' },
];



const PriceFilter = ({ setShowReport }) => {
  // component code

// const PriceFilter = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedRange, setSelectedRange] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const toggleCollapse = () => setIsOpen(!isOpen);
const filterStyle='text-description text-[11px] font-[400px]'
const label="flex flex-col"
const price="flex items-center gap-2 text-sm cursor-pointer text-primary text-[17px] font-[400px]"
const title="font-semibold text-primary text-[21px] font-[600] flex items-center gap-1"
  return (
  <main className='flex flex-col gap-10 w-full md:py-5'>
     <div className="flex items-center gap-4 xl:hidden ">
            <h6 onClick={(() => {
              setShowReport(false);
            })} className="font-[400] text-primary text-[14px] ">Back to search </h6>
         
          
        </div>
    <div className='bg-filterBg p-6 rounded-md xl:bg-filterBg'>
      <div
        className="flex items-center justify-between gap-20 cursor-pointer mb-2"
        onClick={toggleCollapse}
      >
        <h3 className={title} >
          Price <span className="text-lg">{'('}₦{')'}</span>
        </h3>
        {isOpen ? (
          <ChevronUp size={18} className="text-gray-600" />
        ) : (
          <ChevronDown size={18} className="text-gray-600" />
        )}
      </div>

      {isOpen && (
        <div className="space-y-3 pl-1">
          <div className='flex flex-col gap-4'> <div className="flex items-center gap-6">
           <div className={label}>  
            <input
              type="number"
              placeholder="Min"
              name='min'
              value={minPrice}
              onChange={(e) => {
                setMinPrice(e.target.value);
                setSelectedRange('');
              }}
              className=" w-full border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            /></div>


            <div className={label}>
               <input
              type="number"
              name='max'
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => {
                setMaxPrice(e.target.value);
                setSelectedRange('');
              }}
              className=" w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            /></div>
          </div> {(minPrice.trim() !== '' || maxPrice.trim() !== '') && (
  <button   onClick={(() => {
              setShowReport(false);
            })} className="py-[8px] text-[14px] rounded-[8px] font-500 w-full bg-primary text-white border border-primary flex items-center justify-center gap-2">
    Apply filter 
  </button>
)}
 </div>
          {priceRanges.map((range) => (
            <label
              key={range.value}
              className={price}
            >
              <input
                type="radio"
                name="priceRange"
                value={range.value}
                checked={selectedRange === range.value}
                onChange={() => {
                  setSelectedRange(range.value);
                  setMinPrice('');
                  setMaxPrice('');
                }}
                className="accent-primary h-5 w-5"
              />
              {range.label}
            </label>
          ))}

          
        </div>
      )}



      
    </div>
    
    <SellerFilter price={price} />
    </main>
  );
};

export default PriceFilter;


