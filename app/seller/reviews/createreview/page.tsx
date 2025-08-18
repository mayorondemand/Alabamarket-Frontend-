'use client'
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import RatingForm from "./component/RatingForm"

const Page=()=>{
   
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
          Back to Listing
        </Link>
      </div>
    
<section className="grid gap-14">
<section className="flex  flex-col md:flex-row items-start md:items-start justify-between gap-6">
  <div className="flex flex-col gap-8">

    <div>                 <h6 className="text-primary  font-[700] text-[21px] mb-2 md:text-[33px]">Leave a Review </h6>
    <p
            className="text-grey max-w-xl mx-auto"
            style={{ fontSize: 17, fontWeight: 400, fontStyle: "normal" }}
          >
           Help others make smart buying decisions. Your review also helps us build trust in the Alaba Market community.
          </p>
</div>

<RatingForm />

  </div>



 {/* <div className="bg-categoryBg p-4 rounded-xl border h-fit w-full flex flex-col gap-6"> */}
   <div className="hidden md:block bg-categoryBg p-4 rounded-xl h-fit flex flex-col gap-8  w-full md:w-[350px]">

           <Link href={`/seller`}>
            <div className="flex items-center gap-[15px]">
              <Image
                alt={`seller`}
                className="h-[64px] w-[64px] aspect-square"
                src="/eze.png"
                height={100}
                width={100}
              />
              <div className="flex flex-col gap-[6px]">
                <h4 className="text-primary font-[500] text-[16px] leading-[130%]">
                  Excel Home Electronics
                </h4>
                <div className="flex items-center gap-2">
                  {verifiedSeller && (
                    <span className="text-[11px] flex items-center gap-2 text-primary bg-[#DBFCD4] rounded py-1 px-2 w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
  <path d="M6.38802 7.9108L5.54219 7.07955C5.43524 6.9726 5.30166 6.91913 5.14144 6.91913C4.98122 6.91913 4.84258 6.97746 4.72552 7.09413C4.61858 7.20108 4.5651 7.33719 4.5651 7.50246C4.5651 7.66774 4.61858 7.80385 4.72552 7.9108L5.97969 9.16496C6.09635 9.28163 6.23247 9.33996 6.38802 9.33996C6.54358 9.33996 6.67969 9.28163 6.79635 9.16496L9.27552 6.6858C9.39219 6.56913 9.44799 6.43302 9.44294 6.27746C9.43788 6.12191 9.38208 5.9858 9.27552 5.86913C9.15885 5.75246 9.02041 5.6918 8.86019 5.68713C8.69997 5.68246 8.56133 5.73827 8.44427 5.85455L6.38802 7.9108ZM4.75469 13.19L3.90885 11.7608L2.30469 11.4108C2.15885 11.3816 2.04219 11.3064 1.95469 11.185C1.86719 11.0637 1.83316 10.9299 1.8526 10.7837L2.01302 9.1358L0.919271 7.88163C0.822049 7.77469 0.773438 7.6483 0.773438 7.50246C0.773438 7.35663 0.822049 7.23024 0.919271 7.1233L2.01302 5.86913L1.8526 4.22121C1.83316 4.07538 1.86719 3.9416 1.95469 3.81988C2.04219 3.69816 2.15885 3.62291 2.30469 3.59413L3.90885 3.24413L4.75469 1.81496C4.83247 1.68858 4.93941 1.60341 5.07552 1.55946C5.21163 1.51552 5.34774 1.52291 5.48385 1.58163L7.00052 2.2233L8.51719 1.58163C8.6533 1.5233 8.78941 1.51591 8.92552 1.55946C9.06163 1.60302 9.16858 1.68819 9.24635 1.81496L10.0922 3.24413L11.6964 3.59413C11.8422 3.6233 11.9589 3.69874 12.0464 3.82046C12.1339 3.94219 12.1679 4.07577 12.1484 4.22121L11.988 5.86913L13.0818 7.1233C13.179 7.23024 13.2276 7.35663 13.2276 7.50246C13.2276 7.6483 13.179 7.77469 13.0818 7.88163L11.988 9.1358L12.1484 10.7837C12.1679 10.9295 12.1339 11.0633 12.0464 11.185C11.9589 11.3068 11.8422 11.382 11.6964 11.4108L10.0922 11.7608L9.24635 13.19C9.16858 13.3164 9.06163 13.4015 8.92552 13.4455C8.78941 13.4894 8.6533 13.482 8.51719 13.4233L7.00052 12.7816L5.48385 13.4233C5.34774 13.4816 5.21163 13.489 5.07552 13.4455C4.93941 13.4019 4.83247 13.3167 4.75469 13.19Z" fill="#2DC20F"/>
</svg> Verified Seller
                    </span>
                  )}
                  <span className="text-grey font-[400] text-[11px]">4 years on Alaba</span>
                </div>
              </div>
            </div></Link>

             
           <Link href={`/seller/reviews/createreview`}>
              <button onClick={(()=>{
           })} className="py-[12px] text-[17px]  mt-3 text-primary rounded-[8px] font-500 w-full bg-white flex items-center border border-2 border-primary justify-center text-center gap-2">
            Buy more products
            </button></Link>

          </div>
</section>



</section>


</main>
}
export default Page



  