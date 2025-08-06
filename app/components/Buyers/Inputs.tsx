'use client'
import React, { useState } from 'react';

const Input= () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
   <section className='flex flex-col items-center justify-center'>
     <form className="w-full max-w-4xl flex flex-col gap-4  p-4">
    
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
         Full name <span className="text-red-500 mr-1">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          value={form.fullName}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email address   <span className="text-red-500 mr-1">*</span>
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
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone number <span className="text-red-500 mr-1">*</span>
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

      {/* <button
        type="submit"
        className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90"
      >
        Submit
      </button> */}
    </form>
   </section>
  );
};

export default Input;
