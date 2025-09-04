'use client'
import { useState } from "react";
import ProductReview from "./ProductsReviews";
interface ReportProps {
  showReport: boolean;
  setShowReport: (show: boolean) => void;
}

const ReplyReview = ({showReport, setShowReport}: ReportProps) => {
const reportReasons: string[] = [
  'Fake or misleading product',
  'Suspicious seller or scam attempt',
  'Duplicate or spam listing',
  'Wrong category or information',
  'Offensive or inappropriate content',
  'Copyright issue or watermarked images',
  'Other',
];
  const [details, setDetails] = useState('');

  return (
  <>
  <div
      className={`fixed font-Poppins inset-0 bg-[rgba(57,64,58,0.35)] backdrop-blur-[3.5px] flex items-end md:items-center justify-center z-50 transition-all duration-300 ease-in-out
       ${showReport ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
    `}
    >
      <div
        className="overflow-y-scroll  bg-white relative py-8 px-10    rounded-tr-[16px] rounded-tl-[16px] h-[800px] md:rounded-[16px] shadow-lg w-full flex flex-col gap-10 md:w-3/4 lg:w-1/2 md:my-20 md:h-fit  md:max-h-[800px] lg:max-h-[700px]" 
      >
        {/* Close Button */}
      <div className="flex flex-col gap-3">
             <div className="flex items-center justify-between w-full">
                    <h2 className="text-primary font-[700] text-[24px]">Report to review </h2>

              <div className='cursor-pointer' onClick={() => {
        setShowReport(false);
      }}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_365_35066"maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
    <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M14.8289 9.17188L9.17188 14.8289M9.17188 9.17188L14.8289 14.8289" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </mask>
  <g mask="url(#mask0_365_35066)">
    <path d="M0 0H24V24H0V0Z" fill="#E30808"/>
  </g>
</svg>
</div>


</div> 

<p className="hidden  text-grey ">
    Use feedback to improve and boost your store’s reputation.
</p>
{/* <p className="text-grey md:hidden ">
    If something doesn’t look right about this listing,  please tell us why.
</p> */}
      </div>
<form>
      

      <div className="my-4 flex flex-col gap-4">
        <ProductReview />
        {/* {reportReasons.map((reason, index) => (
          <label key={index} className={`flex items-start  space-x-2 cursor-pointer `}>
           
            <div className={`${reason=='"Other'?`flex items-center`:``}`} >
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <rect x="0.5" y="0.5" width="25" height="25" rx="12.5" fill="#FEFBF2" stroke="#7C6100"/>
</svg>
            </div>
            {reason=="Other" ? <span className="text-radio  text-[14px] flex  gap-4 items-cente md:text-[17px]">{reason} <input
          value={others}
          type="text"
          onChange={(e) => setOthers(e.target.value)}
          placeholder="(Please describe)"
          className="w-full  rounded px-3 py-2 resize-none border-none bg-inputBg  focus:outline-none"
          style={{ borderColor: '#7C6100' }}
        /></span>:            <span className="text-radio text-[14px] md:text-[17px]">{reason}</span>
}
          </label>
        ))} */}
      </div>

      <div>
        <label className="block  my-6 font-[500] text-[17px] text-primary">Reply to this review</label>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Share your honest experience about the product or seller."
            className="w-full h-28 rounded px-3 py-4 resize-none border-2 border-primary focus:outline-none"

          style={{ borderColor: '#7C6100' }}
        />
      </div>
    </form>


       <div>
         <button
            className="flex-1 text-[17px] py-3 bg-primary text-white w-full rounded-md"
          >
            Post reply 
          </button>
       </div>

       
      </div>


    </div>
  </>
  );
};

export default ReplyReview ;
