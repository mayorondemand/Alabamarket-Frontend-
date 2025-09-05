'use client'
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import PaymentSelector from './components/PaymentSelector';
const Page=()=>{
    const [form, setForm] = useState({
    
productName:'',
plan:''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

return <main className="flex flex-col gap-10">
 <div className="flex flex-col gap-2">
      <Link href={`/seller`} className="flex text-[14px] font-semibold text-primary items-center gap-2">
       
          <span className="bg-[#E9ECF4] p-2 rounded-full">
            <ArrowLeft size={16} className="text-primary" />
          </span>
          Back to Listings 
      </Link>

               <div>
                    <h6 className="text-primary  font-[700] text-[21px]  md:text-[33px]"> Confirm Your Boost Plan  </h6>
    <p
            className="text-grey max-w-xl"
            style={{ fontSize: 17, fontWeight: 400, fontStyle: "normal" }}
          >
         Review the details of your selected plan. Your product will get more visibility and appear in priority positions across the platform.
          </p>
               </div>

   


  </div>
      
 

   <section className='  flex flex-col items-center justify-center  lg:container '>
     <form className="w-full  flex flex-col gap-4 p-5 rounded-lg border border-primary md:p-8">
                       <div className='flex items-center justify-between'> <h6 className="text-primary  font-[700] text-[21px]  md:text-[33px]"> Boost Ad    </h6>
                      </div>
 <div className='flex gap-4 items-center '>
      
      </div>
      <div>
        <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
         Product Name  <span className="text-red mr-1">*</span>
        </label>
        <input
          type="text"
          id="productName"
          name="productName"
          required
          value={form.productName}
          onChange={handleChange}
          className="mt-1 w-full border border-primary rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Enter store owner"
        />
      </div>
      <div>
        <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-1">
       Plan <span className="text-red mr-1">*</span>
        </label>
       <select name="plan" id="plan"           className="mt-1 w-full border border-primary rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
>
        <option value="premium">premium</option>
                <option value="premium">Basic</option>
                                <option value="standard">standard</option>

       </select>
      </div>
 
     <div className='lg:container  '>
        <PaymentSelector />
     </div>

      

      <div className='flex gap-2 mt-4 items-center flex-col md:flex-row md:gap-8'>
       
       <button
        type="submit"
        className=" text-primary border border-primary bg-white p-3 rounded-md hover:bg-opacity-90 w-full lg:w-2/4"
      >
  Cancel  
      </button>
       <button
        type="submit"
        className=" bg-primary text-white p-3 rounded-md hover:bg-opacity-90 w-full md:w-fi"
      >
       Boost my product 
      </button>
      </div>
    </form>
   </section>
  



</main>
}
export default Page