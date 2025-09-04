
import React from "react";

type Product = {
  name: string;
  image: string;
  verifiedSeller?: boolean;
  fixed?: boolean;
  price: number;
  description?: string;
  images?: string[];
};

interface ProductHeaderProps {
  product: Product;
}

export default function ProductHeader({ product }: ProductHeaderProps) {
  // Hardcoded placeholders for now
  const rating = 4.8;
  const reviews = 87;
  const location = "13B Freedom Line, near Samsung Plaza, Alaba Int'l";
  const posted = "2 hours ago";
  const promoted = true;
const additionalInfo=[
    {
        name:"BRAND",
        value:"Buchymix"
    },
     {
        name:"CONDITION",
        value:"Neatly used"
    },
     {
        name:"POWER",
        value:"1700W"
    },
     {
        name:"WARRANTY",
        value:"Yes (3 months)"
    }
]
  return (
    <div className="w-full mt-8">
      {/* Desktop Top Row */}
       
     <div className="hidden md:block">
        <div className="flex items-center gap-1">
             <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="mr-1"
          >
            <path
              d="M7.99998 1.33301L10.0533 5.50634L14.6666 6.17967L11.3333 9.41301L12.1066 14.013L7.99998 11.8463L3.89331 14.013L4.66665 9.41301L1.33331 6.17967L5.94665 5.50634L7.99998 1.33301Z"
              fill="#FACC15"
            />
          </svg>
 <span className="text-sm font-medium">{rating}</span>
 
          <a
            href="#"
            className="text-primary text-[14px] font-normal leading-[150%] underline"
          >
            ({reviews} Reviews)
          </a>
         
        </div>
          
           <div className="flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          {/* Star Icon */}
         
           <h6 className="text-primary font-[600]  text-[41px] ">
        {product.name}
      </h6>
         
        </div>
        <div className="flex gap-4">
          {/* Save Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="cursor-pointer"
          >
            <path
              d="M9.99935 5.33203C5.94935 5.33203 2.66602 8.61537 2.66602 12.6654C2.66602 19.9987 11.3327 26.6654 15.9993 28.216C20.666 26.6654 29.3327 19.9987 29.3327 12.6654C29.3327 8.61537 26.0493 5.33203 21.9993 5.33203C19.5193 5.33203 17.326 6.56337 15.9993 8.44803C15.323 7.48496 14.4246 6.69897 13.3803 6.15658C12.3359 5.6142 11.1762 5.33137 9.99935 5.33203Z"
              stroke="#172556"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Share Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="32"
            viewBox="0 0 31 32"
            fill="none"
            className="cursor-pointer"
          >
            <path
              d="M24 21.4374C22.9867 21.4374 22.08 21.8374 21.3867 22.4641L11.88 16.9307C11.9467 16.6241 12 16.3174 12 15.9974C12 15.6774 11.9467 15.3707 11.88 15.0641L21.28 9.58406C22 10.2507 22.9467 10.6641 24 10.6641C26.2133 10.6641 28 8.8774 28 6.66406C28 4.45073 26.2133 2.66406 24 2.66406C21.7867 2.66406 20 4.45073 20 6.66406C20 6.98406 20.0533 7.29073 20.12 7.59739L10.72 13.0774C10 12.4107 9.05333 11.9974 8 11.9974C5.78667 11.9974 4 13.7841 4 15.9974C4 18.2107 5.78667 19.9974 8 19.9974C9.05333 19.9974 10 19.5841 10.72 18.9174L20.2133 24.4641C20.1467 24.7441 20.1067 25.0374 20.1067 25.3307C20.1067 27.4774 21.8533 29.2241 24 29.2241C26.1467 29.2241 27.8933 27.4774 27.8933 25.3307C27.8933 23.1841 26.1467 21.4374 24 21.4374Z"
              fill="#172556"
            />
          </svg>
        </div>
      </div></div>

      {/* Mobile Top Row */}
      <div className="flex md:hidden justify-between items-center mb-2">
       <div className="flex flex-col gap-[15px]"> <div className="flex items-center gap-2">
          {promoted && (
            <span className="p-[8px] bg-promotedBg border border-[#BDC1CD] text-[#A6AAB8] rounded text-xs">
              Promoted
            </span>
          )}
                  <span className="text-[#A6AAB8] text-[11px] font-[400] ">posted {posted}</span>

          
        </div> <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.99998 1.33301L10.0533 5.50634L14.6666 6.17967L11.3333 9.41301L12.1066 14.013L7.99998 11.8463L3.89331 14.013L4.66665 9.41301L1.33331 6.17967L5.94665 5.50634L7.99998 1.33301Z"
                fill="#FACC15"
              />
            </svg>
            <span className="text-sm font-medium">{rating}</span>
            <a
              href="#"
              className="text-primary text-[14px] font-normal leading-[150%]"
            >
              ({reviews} Reviews)
            </a>
          </div></div>
       
        <div className="flex gap-4">
          {/* Save Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 32 32"
            fill="none"
            className="cursor-pointer"
          >
            <path
              d="M9.99935 5.33203C5.94935 5.33203 2.66602 8.61537 2.66602 12.6654C2.66602 19.9987 11.3327 26.6654 15.9993 28.216C20.666 26.6654 29.3327 19.9987 29.3327 12.6654C29.3327 8.61537 26.0493 5.33203 21.9993 5.33203C19.5193 5.33203 17.326 6.56337 15.9993 8.44803C15.323 7.48496 14.4246 6.69897 13.3803 6.15658C12.3359 5.6142 11.1762 5.33137 9.99935 5.33203Z"
              stroke="#172556"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Share Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="30"
            viewBox="0 0 31 32"
            fill="none"
            className="cursor-pointer"
          >
            <path
              d="M24 21.4374C22.9867 21.4374 22.08 21.8374 21.3867 22.4641L11.88 16.9307C11.9467 16.6241 12 16.3174 12 15.9974C12 15.6774 11.9467 15.3707 11.88 15.0641L21.28 9.58406C22 10.2507 22.9467 10.6641 24 10.6641C26.2133 10.6641 28 8.8774 28 6.66406C28 4.45073 26.2133 2.66406 24 2.66406C21.7867 2.66406 20 4.45073 20 6.66406C20 6.98406 20.0533 7.29073 20.12 7.59739L10.72 13.0774C10 12.4107 9.05333 11.9974 8 11.9974C5.78667 11.9974 4 13.7841 4 15.9974C4 18.2107 5.78667 19.9974 8 19.9974C9.05333 19.9974 10 19.5841 10.72 18.9174L20.2133 24.4641C20.1467 24.7441 20.1067 25.0374 20.1067 25.3307C20.1067 27.4774 21.8533 29.2241 24 29.2241Z"
              fill="#172556"
            />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h6 className="text-primary font-[600] text-[27px] md:text-[41px] md:hidden">
        {product.name} 
      </h6>

      {/* Description */}
      <p className="text-[#656E8B] font-poppins text-[17px] font-[400] leading-[150%] mt-1">
        {product.description}
      </p>

      {/* Location + Time */}
      <div className="flex  items-center gap-4 justify-between mt-6 text-primary text-[14px] font-poppins font-[400] leading-[110%]">
        <div className="flex items-center gap-2">
            {promoted && (
          <span className="hidden md:inline px-2 py-1 bg-promotedBg border border-[#BDC1CD] rounded">
            Promoted
          </span>
        )}
        <span className="flex items-center gap-1 hidden md:flex">
          {/* Location Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.5093 14.7586C7.5093 14.7586 2.66797 10.6813 2.66797 6.66927C2.66797 5.25478 3.22987 3.89823 4.23007 2.89803C5.23026 1.89784 6.58681 1.33594 8.0013 1.33594C9.41579 1.33594 10.7723 1.89784 11.7725 2.89803C12.7727 3.89823 13.3346 5.25478 13.3346 6.66927C13.3346 10.6813 8.4933 14.7586 8.4933 14.7586C8.22397 15.0066 7.78064 15.0039 7.5093 14.7586ZM8.0013 9.0026C8.30772 9.0026 8.61114 8.94225 8.89423 8.82499C9.17732 8.70773 9.43455 8.53586 9.65122 8.31919C9.86789 8.10252 10.0398 7.84529 10.157 7.5622C10.2743 7.27911 10.3346 6.97569 10.3346 6.66927C10.3346 6.36285 10.2743 6.05944 10.157 5.77634C10.0398 5.49325 9.86789 5.23603 9.65122 5.01936C9.43455 4.80269 9.17732 4.63081 8.89423 4.51355C8.61114 4.39629 8.30772 4.33594 8.0013 4.33594C7.38246 4.33594 6.78897 4.58177 6.35139 5.01936C5.9138 5.45694 5.66797 6.05043 5.66797 6.66927C5.66797 7.28811 5.9138 7.8816 6.35139 8.31919C6.78897 8.75677 7.38246 9.0026 8.0013 9.0026Z"
              fill="#172556"
            />
          </svg>
          {location}
        </span>
        </div>
        <span className="text-[#A6AAB8] text-[11px] font-[400] hidden md:block">posted {posted}</span>
      </div>


      <div className="my-4 border-t border-b gap-12 py-4 border-[#C9CCD7] grid grid-cols-2 md:grid-cols-4 md:mt-8 md:mb-1">
{additionalInfo.map((item,index)=>{
    return <div key={index} className="w-full">
        <h5 className="text-primary font-[500] text-[21px]"> {item.name} </h5>
        <h6 className="text-grey font-[400] text-[17px]"> {item.value} </h6>


</div>
})}
</div>
    </div>
  );
}
