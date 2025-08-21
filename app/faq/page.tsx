'use client'
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import FAQPage from "../components/Buyers/Faq"
const Page=()=>{
  const notifications=0
   
    const verifiedSeller=true
return <main className="container flex flex-col gap-5 md:py-10 lg:py-0">
    <div className="flex items-center">
        <Link
          href="/"
          className="text-primary text-[14px] font-semibold flex items-center gap-2"
        >
          <span className="bg-[#E9ECF4] p-2 rounded-full">
            <ArrowLeft size={16} className="text-primary" />
          </span>
          Back to Home Page 
        </Link>
      </div>
    
<section className="grid gap-14">
  <div className="flex flex-col gap-8">

    <div>                 <h6 className="text-primary  font-[700] text-[21px] mb-2 md:text-[33px]"> Frequently Asked Questions (FAQs)</h6>
    <p
            className="text-grey max-w-xl"
            style={{ fontSize: 17, fontWeight: 400, fontStyle: "normal" }}
          >
            Get quick answers to common questions in your preferred language.
          </p>
</div>



  </div>




 


<div className="grid gap-5 md:grid-cols-2">
    
    <FAQPage />
    <div className="rounded-lg py-8  px-4 bg-filterBg  md:py-16">
         {notifications==0&&
    <div className=" flex flex-col  items-center justify-center   text-center ">
      {/* SVGs */}
      <div className="mb-8">
        {/* Desktop SVG */}
        <div className="hidden md:block">
       <svg xmlns="http://www.w3.org/2000/svg" width="115" height="115" viewBox="0 0 115 115" fill="none">
  <path d="M57.5 10C83.7342 10 105 31.2658 105 57.5C105 83.7342 83.7342 105 57.5 105C31.2658 105 10 83.7342 10 57.5C10 31.2658 31.2658 10 57.5 10ZM57.5 76.5C56.2402 76.5 55.032 77.0004 54.1412 77.8912C53.2504 78.782 52.75 79.9902 52.75 81.25C52.75 82.5098 53.2504 83.718 54.1412 84.6088C55.032 85.4996 56.2402 86 57.5 86C58.7598 86 59.968 85.4996 60.8588 84.6088C61.7496 83.718 62.25 82.5098 62.25 81.25C62.25 79.9902 61.7496 78.782 60.8588 77.8912C59.968 77.0004 58.7598 76.5 57.5 76.5ZM57.5 31.375C52.9333 31.375 48.5536 33.1891 45.3245 36.4183C42.0954 39.6474 40.2812 44.0271 40.2812 48.5938C40.2812 49.8535 40.7817 51.0617 41.6725 51.9525C42.5633 52.8433 43.7715 53.3438 45.0312 53.3438C46.291 53.3438 47.4992 52.8433 48.39 51.9525C49.2808 51.0617 49.7812 49.8535 49.7812 48.5938C49.7828 47.1927 50.1657 45.8184 50.8889 44.6184C51.612 43.4184 52.6482 42.4378 53.8862 41.7819C55.1243 41.1259 56.5175 40.8193 57.9165 40.8949C59.3156 40.9705 60.6676 41.4255 61.8278 42.2111C62.9879 42.9966 63.9123 44.0831 64.502 45.3541C65.0916 46.6251 65.3242 48.0326 65.1747 49.4257C65.0253 50.8187 64.4995 52.1449 63.6537 53.2619C62.808 54.3789 61.6741 55.2446 60.3737 55.7663C57.1627 57.0488 52.75 60.3358 52.75 65.8125V67C52.75 68.2598 53.2504 69.468 54.1412 70.3588C55.032 71.2496 56.2402 71.75 57.5 71.75C58.7598 71.75 59.968 71.2496 60.8588 70.3588C61.7496 69.468 62.25 68.2598 62.25 67C62.25 65.841 62.4875 65.2615 63.4897 64.7675L63.903 64.5775C67.6119 63.0855 70.6862 60.3498 72.599 56.8394C74.5118 53.3289 75.1438 49.2625 74.3868 45.3371C73.6298 41.4117 71.5309 37.8719 68.4499 35.3245C65.3689 32.7771 61.4977 31.3808 57.5 31.375Z" fill="#A68200"/>
</svg>
        </div>
        {/* Mobile SVG */}
        <div className="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" viewBox="0 0 81 80" fill="none">
  <path d="M40.5013 6.66797C58.9113 6.66797 73.8346 21.5913 73.8346 40.0013C73.8346 58.4113 58.9113 73.3346 40.5013 73.3346C22.0913 73.3346 7.16797 58.4113 7.16797 40.0013C7.16797 21.5913 22.0913 6.66797 40.5013 6.66797ZM40.5013 53.3346C39.6172 53.3346 38.7694 53.6858 38.1443 54.3109C37.5192 54.9361 37.168 55.7839 37.168 56.668C37.168 57.552 37.5192 58.3999 38.1443 59.025C38.7694 59.6501 39.6172 60.0013 40.5013 60.0013C41.3854 60.0013 42.2332 59.6501 42.8583 59.025C43.4834 58.3999 43.8346 57.552 43.8346 56.668C43.8346 55.7839 43.4834 54.9361 42.8583 54.3109C42.2332 53.6858 41.3854 53.3346 40.5013 53.3346ZM40.5013 21.668C37.2966 21.668 34.2232 22.941 31.9571 25.2071C29.691 27.4732 28.418 30.5466 28.418 33.7513C28.418 34.6354 28.7692 35.4832 29.3943 36.1083C30.0194 36.7334 30.8672 37.0846 31.7513 37.0846C32.6354 37.0846 33.4832 36.7334 34.1083 36.1083C34.7334 35.4832 35.0846 34.6354 35.0846 33.7513C35.0857 32.7681 35.3544 31.8037 35.8619 30.9616C36.3694 30.1195 37.0965 29.4314 37.9653 28.971C38.8341 28.5107 39.8118 28.2955 40.7936 28.3486C41.7754 28.4017 42.7242 28.7209 43.5383 29.2722C44.3525 29.8235 45.0012 30.586 45.415 31.4779C45.8287 32.3698 45.9919 33.3575 45.8871 34.3351C45.7822 35.3127 45.4132 36.2433 44.8197 37.0272C44.2262 37.811 43.4305 38.4186 42.518 38.7846C40.2646 39.6846 37.168 41.9913 37.168 45.8346V46.668C37.168 47.552 37.5192 48.3999 38.1443 49.025C38.7694 49.6501 39.6172 50.0013 40.5013 50.0013C41.3854 50.0013 42.2332 49.6501 42.8583 49.025C43.4834 48.3999 43.8346 47.552 43.8346 46.668C43.8346 45.8546 44.0013 45.448 44.7046 45.1013L44.9946 44.968C47.5973 43.9209 49.7548 42.0011 51.0971 39.5377C52.4394 37.0742 52.8829 34.2206 52.3517 31.4659C51.8205 28.7113 50.3476 26.2272 48.1854 24.4395C46.0233 22.6519 43.3067 21.672 40.5013 21.668Z" fill="#A68200"/>
</svg>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-primary font-[700] text-[28px] md:text-[36px] mb-3">
      Still have questions?
      </h2>

      {/* Description */}
      <p className="text-grey font-[400] text-[15px] md:text-[17px] max-w-md">
        Write to support, we’ll respond to all your question needs as regarding buying.
      </p>

 
    
    </div>
}
<div>
        <label className="block  my-6 font-[500] text-[17px] text-primary">What would you like to ask?</label>
        <textarea
        //   value={details}
        //   onChange={(e) => setDetails(e.target.value)}
          placeholder="Write your message here"
            className="w-full h-28 rounded px-3 py-4 resize-none border-2 border-primary focus:outline-none"

          style={{ borderColor: 'primary' }}
        />
        
       <div>
         <button
            className="text-[17px] py-3 bg-primary text-white w-full mt-2 rounded-md"
          >
            Send question
          </button>
       </div>
      </div>
    </div>
     </div>







</section>


</main>
}
export default Page



  