import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
const AuthTitle=()=>{
return  <main className="flex flex-col gap-5">
   <div className="flex flex-col gap-5 md:hidden">
     <div  className="bg-yellow-400  rounded-md w-fit gap-2 ">
                              <Image src="/ALABALOGO.png" alt="alaba-market-logo" className="" width={120} height={120} />
                        
                      </div>
        <Link
          href="/auth/login"
          className="text-primary text-[14px] font-semibold flex items-center gap-3"
        >
          <span className="bg-[#E9ECF4] p-2 rounded-full">
            <ArrowLeft size={16} className="text-primary" />
          </span>
          Back to Login 
        </Link>
      
   </div>
    <div className="md:text-center">   <h2 className="text- font-bold mb-3 font-[500] text-primary">Enter verification code</h2>
      <p className="text-grey">We just sent a 6-digit code to  <span className="text-primary">+234 801 234 5678</span> </p>
 </div>
</main>
}
export default AuthTitle