'use client'
import React, { useState } from 'react';

const StoreInfo= () => {
  const [form, setForm] = useState({
    StoreOwner: '',
    storeName:'',
    storeAddress:'',
    email: '',
    phone: '',

  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
   <section className='flex flex-col items-center justify-center'>
     <form className="w-full  flex flex-col gap-4  p-4">
                       <div className='flex items-center justify-between'> <h6 className="text-primary  font-[700] text-[21px]  md:text-[33px]"> Store information    </h6>
                      </div>
 <div className='flex gap-4 items-center '>
       <div className='h-fit'>
         <div className='h-20 w-20 rounded-full bg-neatBg'>

        </div>
       </div>
       <button
        // type="submit"
        className=" text-primary border border-primary bg-white px-4 py-2 rounded-md hover:bg-opacity-90 w-full md:w-fit"
      >
  Add photo 
      </button>
      </div>
      <div>
        <label htmlFor="storeOwner" className="block text-sm font-medium text-gray-700 mb-1">
         Store owner <span className="text-red mr-1">*</span>
        </label>
        <input
          type="text"
          id="storeOwner"
          name="storeOwner"
          required
          value={form.StoreOwner}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Enter store owner"
        />
      </div>
      <div>
        <label htmlFor="storeName" className="block text-sm font-medium text-gray-700 mb-1">
         Store name <span className="text-red mr-1">*</span>
        </label>
        <input
          type="text"
          id="storeName"
          name="storeName"
          required
          value={form.storeName}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Enter store name"
        />
      </div>
 <div>
        <label htmlFor="storeAddress" className="block text-sm font-medium text-gray-700 mb-1">
         Store address <span className="text-red mr-1">*</span>
        </label>
        <input
          type="text"
          id="storeAdress"
          name="storeAdress"
          required
          value={form.storeAddress}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Enter store address"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">
        Email address   <span className="text-red mr-1">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Enter your email address"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-700">
          Phone number <span className="text-red mr-1">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Enter your phone number"
        />
      </div>

      <div className='flex gap-2 items-center flex-col md:flex-row md:gap-4'>
        <button
        type="submit"
        className=" bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 w-full md:w-fit"
      >
       Save changes 
      </button>
       <button
        type="submit"
        className=" text-primary border border-primary bg-white px-4 py-2 rounded-md hover:bg-opacity-90 w-full md:w-fit"
      >
  Change password  
      </button>
      </div>
    </form>
   </section>
  );
};

export default StoreInfo;
