"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import AuthSidebar from "../components/AuthSidebar";
import Image from "next/image";
import { FaAddressBook } from "react-icons/fa";
import AuthTitle from "../components/AuthTItle";
import { ArrowLeft, Phone } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import endpointroute from "@/app/utils/endpointroute";
// --------- Validation Schemas ----------
const signupSchema = yup.object({
  contact: yup
    .string()
    .required("Email or phone is required")
    .test("emailOrPhone", "Must be valid email or phone", (value) => {
      if (!value) return false;
      const emailRegex = /\S+@\S+\.\S+/;
      const phoneRegex = /^[0-9]{10,15}$/;
      return emailRegex.test(value) || phoneRegex.test(value);
    }),
});

const otpSchema = yup.object({
  otp: yup.string().length(6, "OTP must be 6 digits").required(),
});

// --------- API Calls (dummy) ----------

const verifyOtp = async (otp: string) => {
console.log(otp)
  return new Promise((resolve) => setTimeout(() => resolve(true), 1000));
};

export default function Signup() {
  const [step, setStep] = useState<number>(() => {
    return Number(localStorage.getItem("signup-step")) || 1;
  });
  const [useEmail, setUseEmail] = useState(true);
  const [countdown, setCountdown] = useState(60);
  
const sendOtp = async (contact: string) => {
  const response = await endpointroute.post(
    "auth/register", 
    { [useEmail ? "email" : "phone"]: contact }, // body
    // {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }
  );

  return response.data; // axios already parses JSON
};
// 08161134424
  // Forms
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<{ contact: string }>({
    resolver: yupResolver(signupSchema),
    mode: "onChange",
  });

  const {
    register: registerOtp,
    handleSubmit: handleOtpSubmit,
    formState: { errors: otpErrors, isValid: isOtpValid },
  } = useForm<{ otp: string }>({
    resolver: yupResolver(otpSchema),
    mode: "onChange",
  });

  // Mutations
  const requestOtp = useMutation({
    mutationFn: (contact: string) => sendOtp(contact),
   
    onSuccess: (data) => {
    alert("Signup complete ✅");
    //  setStep(2);
      localStorage.setItem("signup-step", "2");
      setCountdown(60);
    console.log("Server response:", data);
  },
  onError: (error) => {
    alert("could not send OTP ❌");
    console.error(error);
  },
  });

  const verifyOtpMutation = useMutation({
    mutationFn: (otp: string) => verifyOtp(otp),
    onSuccess: () => {
      alert("Signup complete ✅");
      localStorage.removeItem("signup-step");
    },
  });

  // Countdown logic
  useEffect(() => {
    if (step === 2 && countdown > 0) {
      const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [step, countdown]);

  return (
    <main className="h-screen gap-10 grid items-center justify-center md:grid-cols-5 ">
        <div className="hidden md:col-span-2 md:block">
            <AuthSidebar />
        </div>
       <div className="p-5 mx-2 shadow-md   md:col-span-3 md:h-full md:flex flex-col md:gap-[20px] lg:gap-[40px]">
          {step==2&& <Link
          href="/auth/login"
          className="text-primary text-[14px] font-semibold flex items-center gap-3 hidden mt-[80px] md:flex lg:mt-5"
        >
          <span className="bg-[#E9ECF4] p-2 rounded-full">
            <ArrowLeft size={16} className="text-primary" />
          </span>
          Back to Login 
        </Link>}
         <div className="  flex gap-8 flex-col  rounded-2xl    md:items-cente md:mt-[80px] md:w-3/4 md:mx-auto">
           
            {step==1&&<div className="flex flex-col gap-8">  <div  className="bg-yellow-400 rounded-md w-fit gap-2 md:hidden">
                              <Image src="/ALABALOGO.png" alt="alaba-market-logo" className="" width={120} height={120} />
                        
                      </div>
    <div className="md:text-center">   <h2 className="text- font-bold mb-4 font-[500] text-primary">Create an account</h2>
      <p className="text-grey">Built with the Alaba traders in mind. The market is now online.</p>
 </div> </div>}
      {/* Social login */}
      {step==1&&<div className="flex gap-4 w-full flex-col md:flex-row ">
        <button className="flex items-center gap-2 bg-white py-3 px-3 justify-center w-full border border-grey rounded-lg"> <FcGoogle size={28} />
 Sign up with Google</button>
          <button className="flex items-center gap-2 w-full bg-white py-3 justify-center  border border-grey rounded-lg"> <FaApple size={28} /> SIgn up with Apple</button>
      </div>}
      {step==1&& <div className="flex items-center gap-3 w-full">
        <hr className="flex-grow border-t border-grey" />
        <span className="text-grey">OR</span>
        <hr className="flex-grow border-t border-grey" />
        </div>
        
        }

      {step === 1 && (
        <form
          onSubmit={handleSubmit((data) => requestOtp.mutate(data.contact))}
          className="space-y-3 w-full"
        >
         <div className="flex flex-col gap-2">
                                  <p className="text-grey text-sm font-[500]">{useEmail ?  "Email address" : "Phone number " }</p>

             <input
            type={useEmail ? "email" : "tel"}
            placeholder={useEmail ? "Enter your email" : "Enter your phone"}
            {...register("contact")}
            className="w-full border border-grey px-2 py-3 rounded-lg"
          />
          {errors.contact && (
            <p className="text-red text-sm">{errors.contact.message}</p>
          )}

         </div>

         <div className="flex justify-end">
             <button
            onClick={() => setUseEmail((prev) => !prev)}
            className="text-primary mb-4 flex justify-end underline font-[500] w-fit text-sm cursor-pointer"
          >
            {useEmail ? "Use phone number instead" : "Use email instead"}
          </button>
         </div>
<div className="flex flex-col gap-3 justify-center items-center">
    
          <button
            type="submit"
            disabled={!isValid || requestOtp.status === "pending"}
 
            className="w-full bg-primary mt-4 text-white py-3 rounded-lg disabled:opacity-50 disabled:bg-verifying disabled:text-primary"
          >
            {requestOtp.isPending ? "Sending..." : "Get OTP code"}
          </button>
                                            <p className="text-grey text-sm font-[500]"> Already have an account? <Link href={`/auth/login`} className="text-primary"> Login  </Link> </p>

</div>
        </form>
      )}

      {step === 2 && (
        <form
          onSubmit={handleOtpSubmit((data) =>
            verifyOtpMutation.mutate(data.otp)
          )}
          className="flex flex-col gap-5"
        >
            {step==2&&<AuthTitle />}
          <input
            type="text"
            placeholder="Enter OTP"
            {...registerOtp("otp")}
                     className="w-full border border-grey px-2 py-3 rounded-lg md:mx-auto md:w-3/4"

          />
          {otpErrors.otp && (
            <div className="md:w-3/4 md:mx-auto"><p className="text-red text-sm mx-auto">{otpErrors.otp.message}</p></div>
          )}

         <div className="md:w-3/4  md:mx-auto">
             <button
            type="submit"
            disabled={!isOtpValid || verifyOtpMutation.status === "pending"}
            // className="w-full bg-blue-500 text-white py-2 rounded-lg disabled:opacity-50"
                        className="w-full mb-4 bg-primary text-white py-3 rounded-lg disabled:opacity-50 disabled:bg-verifying disabled:text-primary "

          >
            {verifyOtpMutation.status === "pending" ? "Verifying..." : "Verify and continue"}
          </button>
          <div className="flex flex-col gap-3 justify-center items-center">

          <p className="text-sm text-gray-600 text-grey text-sm font-[500]">
            {countdown > 0 ? (
              <p> Didn’t get the code? <span className="text-primary">Resend in {countdown}s</span> </p>
            ) : (
              <button
                type="button"
                onClick={() => requestOtp.mutate("resend")}
                className="text-primary"
              >
                Resend OTP
              </button>
            )}
          </p>
    

</div>
         </div>
        </form>
      )}
    </div>
       </div>
    </main>
  );
}
