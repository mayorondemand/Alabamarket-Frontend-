'use client'
import { useState } from "react";
import Image from "next/image";
// import ProductReview from "./ProductsReviews";
interface ReportProps {
  showReport: boolean;
  setShowReport: (show: boolean) => void;
  review?: any;
}

const ReplyReview = ({showReport, setShowReport,review}: ReportProps) => {

  const [details, setDetails] = useState('');
const LikeIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M10 6.66667L9.34267 6.55733C9.3268 6.6528 9.3319 6.75057 9.35762 6.84386C9.38334 6.93715 9.42907 7.02373 9.49161 7.09757C9.55416 7.17141 9.63204 7.23075 9.71983 7.27146C9.80762 7.31218 9.90323 7.33329 10 7.33333V6.66667ZM2.66667 6.66667V6C2.48986 6 2.32029 6.07024 2.19526 6.19526C2.07024 6.32029 2 6.48986 2 6.66667H2.66667ZM4 14H11.5733V12.6667H4V14ZM12.3733 6H10V7.33333H12.3733V6ZM10.658 6.776L11.1947 3.55267L9.88 3.33333L9.34267 6.55733L10.658 6.776ZM9.88 2H9.73733V3.33333H9.88V2ZM7.518 3.18733L5.842 5.70333L6.95133 6.44333L8.62867 3.92733L7.518 3.18733ZM5.28667 6H2.66667V7.33333H5.28667V6ZM2 6.66667V12H3.33333V6.66667H2ZM13.5347 12.392L14.3347 8.392L13.028 8.13067L12.228 12.1307L13.5347 12.392ZM5.842 5.70333C5.7811 5.79461 5.69795 5.86945 5.60119 5.9212C5.50443 5.97295 5.39639 6.00002 5.28667 6V7.33333C5.61591 7.33331 5.94006 7.252 6.23034 7.09663C6.52061 6.94126 6.76805 6.71662 6.95067 6.44267L5.842 5.70333ZM11.1947 3.55267C11.2265 3.36169 11.2164 3.16607 11.165 2.97941C11.1136 2.79274 11.0222 2.6195 10.8971 2.47174C10.772 2.32398 10.6162 2.20524 10.4405 2.12378C10.2649 2.04231 10.0736 2.00007 9.88 2V3.33333L11.1947 3.55267ZM12.3733 7.33333C12.472 7.33329 12.5694 7.35515 12.6586 7.39732C12.7478 7.43949 12.8265 7.50093 12.889 7.57721C12.9516 7.65348 12.9965 7.74269 13.0204 7.8384C13.0443 7.93411 13.0473 8.03393 13.028 8.13067L14.3347 8.392C14.3927 8.1019 14.3856 7.80255 14.3139 7.51552C14.2422 7.22849 14.1078 6.96094 13.9202 6.73214C13.7327 6.50334 13.4967 6.319 13.2294 6.19239C12.962 6.06579 12.6698 6.00008 12.374 6L12.3733 7.33333ZM11.5733 14C12.0357 14 12.4839 13.8398 12.8415 13.5466C13.1991 13.2535 13.444 12.8454 13.5347 12.392L12.228 12.1307C12.1978 12.282 12.116 12.4181 11.9966 12.5158C11.8772 12.6136 11.7276 12.6669 11.5733 12.6667V14ZM9.73733 2C9.29836 2.00001 8.86618 2.10838 8.47914 2.31551C8.09211 2.52263 7.76152 2.8221 7.518 3.18733L8.62867 3.92733C8.75039 3.74465 8.91466 3.59486 9.10818 3.49123C9.30171 3.38761 9.51782 3.33337 9.73733 3.33333V2ZM4 12.6667C3.82319 12.6667 3.65362 12.5964 3.5286 12.4714C3.40357 12.3464 3.33333 12.1768 3.33333 12H2C2 12.5304 2.21071 13.0391 2.58579 13.4142C2.96086 13.7893 3.46957 14 4 14V12.6667Z" fill="#172556"/>
  <path d="M5.33203 6.66406V13.3307" stroke="#172556" stroke-width="2"/>
</svg>
);

const CommentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3.9987 13.6667L2.66536 13.6667C2.45425 13.8779 2.49902 13.6667 1.99902 13.6667C1.72658 13.5503 1.33159 13.9671 1.33203 13.6667L1.33203 4.33333C1.33203 3.96667 1.4627 3.65289 1.72403 3.392C1.98537 3.13111 2.29914 3.00044 2.66536 3H13.332C13.6987 3 14.0127 3.13067 14.274 3.392C14.5354 3.65333 14.6658 3.96711 14.6654 4.33333V12.3333C14.6654 12.7 14.5349 13.014 14.274 13.2753C14.0131 13.5367 13.6991 13.6671 13.332 13.6667H3.9987ZM3.43203 12.3333H13.332V4.33333H2.66536V13.0833L3.43203 12.3333ZM4.66536 11H8.66537C8.85425 11 9.0127 10.936 9.1407 10.808C9.2687 10.68 9.33248 10.5218 9.33203 10.3333C9.33159 10.1449 9.26759 9.98667 9.14003 9.85867C9.01248 9.73067 8.85425 9.66667 8.66537 9.66667H4.66536C4.47648 9.66667 4.31825 9.73067 4.1907 9.85867C4.06314 9.98667 3.99914 10.1449 3.9987 10.3333C3.99825 10.5218 4.06225 10.6802 4.1907 10.8087C4.31914 10.9371 4.47737 11.0009 4.66536 11ZM4.66536 9H11.332C11.5209 9 11.6794 8.936 11.8074 8.808C11.9354 8.68 11.9991 8.52178 11.9987 8.33333C11.9983 8.14489 11.9343 7.98667 11.8067 7.85867C11.6791 7.73067 11.5209 7.66667 11.332 7.66667H4.66536C4.47648 7.66667 4.31825 7.73067 4.1907 7.85867C4.06314 7.98667 3.99914 8.14489 3.9987 8.33333C3.99825 8.52178 4.06225 8.68022 4.1907 8.80867C4.31914 8.93711 4.47737 9.00089 4.66536 9ZM4.66536 7H11.332C11.5209 7 11.6794 6.936 11.8074 6.808C11.9354 6.68 11.9991 6.52178 11.9987 6.33333C11.9983 6.14489 11.9343 5.98667 11.8067 5.85867C11.6791 5.73067 11.5209 5.66667 11.332 5.66667H4.66536C4.47648 5.66667 4.31825 5.73067 4.1907 5.85867C4.06314 5.98667 3.99914 6.14489 3.9987 6.33333C3.99825 6.52178 4.06225 6.68022 4.1907 6.80867C4.31914 6.93711 4.47737 7.00089 4.66536 7Z" fill="#172556"/>
</svg>
);
const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M9.99968 13.4171L6.97467 15.2437C6.88579 15.2876 6.80329 15.3054 6.72717 15.2971C6.65162 15.2882 6.57801 15.2621 6.50634 15.2187C6.43412 15.1743 6.37967 15.1115 6.34301 15.0304C6.30634 14.9493 6.30301 14.8607 6.33301 14.7646L7.13801 11.3396L4.47551 9.03125C4.40051 8.97014 4.35106 8.89708 4.32717 8.81208C4.30329 8.72708 4.30856 8.64569 4.34301 8.56792C4.37745 8.49014 4.42329 8.42625 4.48051 8.37625C4.53829 8.32792 4.61606 8.29514 4.71384 8.27792L8.22717 7.97125L9.59718 4.72792C9.63495 4.63625 9.6894 4.57014 9.76051 4.52958C9.83162 4.48903 9.91134 4.46875 9.99968 4.46875C10.088 4.46875 10.168 4.48903 10.2397 4.52958C10.3113 4.57014 10.3655 4.63625 10.4022 4.72792L11.7722 7.97125L15.2847 8.27792C15.383 8.29458 15.4611 8.32764 15.5188 8.37708C15.5766 8.42597 15.6227 8.48958 15.6572 8.56792C15.6911 8.64569 15.6961 8.72708 15.6722 8.81208C15.6483 8.89708 15.5988 8.97014 15.5238 9.03125L12.8613 11.3396L13.6663 14.7646C13.6975 14.8596 13.6944 14.9479 13.6572 15.0296C13.62 15.1112 13.5652 15.174 13.493 15.2179C13.4219 15.2624 13.3483 15.2887 13.2722 15.2971C13.1966 15.3054 13.1144 15.2876 13.0255 15.2437L9.99968 13.4171Z"
      fill="#7C6100"
    />
  </svg>
);
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
                    <h2 className="text-primary font-[700] text-[24px]">Reply  to review </h2>

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

<p className="text-grey ">
    Use feedback to improve and boost your store’s reputation.
</p>
{/* <p className="text-grey md:hidden ">
    If something doesn’t look right about this listing,  please tell us why.
</p> */}
      </div>
<form>
      

        <div
                  className="bg-white rounded-[12px] border border-active p-4 flex flex-col gap-3"
                >
                  {/* Top section */}
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-3">
                      <Image
                        src={`/eze.png`}
                        alt={review?.name}
                        height={10}
                        width={10}
                        className="w-14 h-14 rounded-full"
                      />
                      <div>
                        <p className="text-primary font-[500]" style={{ fontSize: 17 }}>
                          {review?.name}
                        </p>
                        <p className="text-[11px] text-grey">{review?.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: review?.rating }).map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>
                  </div>
        
                  {/* Review text */}
                 <p
          className="text-primary max-w-xl"
          style={{ fontSize: 14, fontWeight: 400, fontStyle: "normal" }}
         
        >
          {review?.review} 
        </p>
        
        
                  {/* Actions */}
                 <div className="flex items-center justify-between">  <div className="flex gap-6 items-center">
                    <div className="flex gap-1 items-center">
                      <LikeIcon /> <span className="text-grey text-[11px]">{review?.likes}</span>
                    </div>
                    <div className="flex gap-1 items-center">
                      <CommentIcon />{" "}
                      <span className="text-grey text-[11px]">{review?.comments}</span>
                    </div>
                  </div>    
         </div>
                </div>

      <div>
        <label className="block  my-6 font-[500] text-[17px] text-primary">Reply to this review</label>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Type here"
            className="w-full h-28 rounded px-3 py-4 resize-none border-2 bg-[#F2F4FE] border-[#0C2787] focus:outline-none"

         
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
