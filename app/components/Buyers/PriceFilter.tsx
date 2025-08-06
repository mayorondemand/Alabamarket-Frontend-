'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const priceRanges = [
  { label: '₦400 - ₦800', value: '400-800' },
  { label: '₦1,000 - ₦4,000', value: '1000-4000' },
  { label: '₦5,000 - ₦10,000', value: '5000-10000' },
];

const PriceFilter = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedRange, setSelectedRange] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className=" mb-4 inline">
      <div
        className="flex items-center justify-between gap-20 cursor-pointer mb-2"
        onClick={toggleCollapse}
      >
        <h3 className="font-semibold text-gray-800 flex items-center gap-1">
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
          <div className="flex items-center gap-2">
           <div>  <label htmlFor="min">Min</label>
            <input
              type="number"
              placeholder="Min"
              name='min'
              value={minPrice}
              onChange={(e) => {
                setMinPrice(e.target.value);
                setSelectedRange('');
              }}
              className="ml-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            /></div>

            <span>-</span>

            <div>
               <label htmlFor="max">Max</label>
               <input
              type="number"
              name='max'
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => {
                setMaxPrice(e.target.value);
                setSelectedRange('');
              }}
              className=" ml-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            /></div>
          </div>
          {priceRanges.map((range) => (
            <label
              key={range.value}
              className="flex items-center gap-2 text-sm cursor-pointer"
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
                className="accent-primary"
              />
              {range.label}
            </label>
          ))}

          
        </div>
      )}
    </div>
  );
};

export default PriceFilter;


