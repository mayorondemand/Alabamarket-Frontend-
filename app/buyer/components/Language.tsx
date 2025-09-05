'use client'
import React, { useState } from 'react';

const Language= () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const reportReasons: string[] = [
  'Yoruba',
    'Igbo',
      'Hausa',
        'Pidgin',



 
];
  return (
   <section className='flex flex-col items-center justify-center'>
     <form className="w-full  flex flex-col gap-4  p-4">
                       <div className='flex items-center justify-between'> <div><h6 className="text-primary  font-[700] text-[21px]  md:text-[33px]"> Language Preferences    </h6>      <span className="text-[13px] text-description">select your prefered langage for FAQs and help</span>
</div>
                        {/* <select name="buyer" id="buyer" className='bg-neatBg p-1 border-none rounded hidden md:block'>
                          <option value="Buyer">Buyer</option>
                                                    <option value="Seller">Seller</option>

                        </select> */}
                        
                        </div>
 
<form>
      <div>
        <p className="font-[500] text-[17px] text-primary">
        English (Default)<span className="text-red">*</span>
      </p>
      <span className="text-[13px] text-description">(Choose the one that applies)</span>
      </div>

      <div className="my-4 flex flex-col gap-4 w-fit">
        {reportReasons.map((reason, index) => (
          <label key={index} className={`flex items-start  space-x-2 cursor-pointer `}>
           
            <div className={`${reason=='"Other'?`flex items-center`:``}`} >
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <rect x="0.5" y="0.5" width="25" height="25" rx="12.5" fill="#FEFBF2" stroke="#7C6100"/>
</svg>
            </div>
           
        
                    <span className="text-radio text-[14px] md:text-[17px]">{reason}</span>
          </label>
        ))}
      </div>

           <span className="text-[13px] text-description"> Note: App content remains in English, but support content and FAQs will reflect your choice. </span>

    </form>


       <div>
         <button
            className="mt-4 text-[17px] py-2 bg-primary text-white w-full px-8 rounded-md md:w-fit "
          >
            Save changes 
          </button>
       </div>
      {/* <div className='flex gap-2 items-center flex-col md:flex-row md:gap-4'>
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
      </div> */}
    </form>
   </section>
  );
};

export default Language;
