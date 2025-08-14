'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AllSellerTypes = [
  { label: 'All sellers', value: 'All sellers' },
  { label: 'Verified sellers', value: 'Verified sellers' },
  { label: 'Unverified sellers', value: 'Unverified sellers' },
];

interface SellerFilterProps {
  price: string; // Change 'number' to the correct type if needed
}

const SellerFilter = ({ price }: SellerFilterProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedRange, setSelectedRange] = useState('');
  const [sellerType, setSellerType] = useState('');

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className=" mb-4 inline filterBg p-6 rounded-md xl:bg-filterBg">
      <div
        className="flex items-center justify-between gap-20 cursor-pointer mb-2"
        onClick={toggleCollapse}
      >         <h3 className="font-semibold text-primary text-[21px] font-[600] flex items-center gap-1">

       
          Sellers
        </h3>
        {isOpen ? (
          <ChevronUp size={18} className="text-gray-600" />
        ) : (
          <ChevronDown size={18} className="text-gray-600" />
        )}
      </div>

      {isOpen && (
        <div className="space-y-3 pl-1">
          
          {AllSellerTypes.map((range) => (
            <label
              key={range.value}
              className="flex items-center gap-2 text-sm cursor-pointer text-primary text-[17px] font-[400px]"
            >
              <input
                type="radio"
                name="sellerType"
                value={range.value}
                checked={selectedRange === range.value}
                onChange={() => {
                  setSelectedRange(range.value);
                 
                  setSellerType('');
                }}
                className="accent-primary h-5 w-5"
              />
              {range.label}
            </label>
          ))}

          
        </div>
      )}
    </div>
  );
};

export default SellerFilter;
