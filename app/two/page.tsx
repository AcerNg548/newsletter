"use client";
import check from "@/public/assets/images/icon-success.svg";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const params = useSearchParams();
  const email = params.get("email");
  return (
    <div
      className="w-screen h-screen justify-center flex items-center bg-CharcoalGray p-4 relative
   
    "
    >
      <div
        className="w-[30%] h-[65%] bg-White flex items-center justify-start absolute px-10 
       rounded-3xl shadow-2xl overflow-hidden text-DarkSlateGray 
       mobile:w-full mobile:h-full mobile:rounded-none 
       mobileBig:w-full mobileBig:h-full mobileBig:rounded-none mobileBig:flex mobileBig:items-start mobileBig:py-32
        "
      >
        <div className="flex flex-col ">
          <Image
            src={check}
            alt="check"
            width={50}
            priority
            className=" mb-4
            mobile:mb-4 mobile:w-14
            mobileBig:mb-4 mobileBig:w-16
            "
          />
          <h1
            className="font-black text-[40px] mt-4 leading-[38px] 
            mobile:text-[48px] mobile:leading-[46px]
            mobileBig:text-[42px] mobileBig:leading-[40px] "
          >
            Thanks for subscribing!
          </h1>
          <p
            className="text-[12px] mt-5 
            mobile:text-[16px]
            mobileBig:text-[18px]
            "
          >
            A confirmation email has been sent to{" "}
            <span className="font-semibold">{email}</span>. Please open it and
            click the button inside to confirm your subscription.
          </p>
          <div className="relative group">
            <button
              className="w-full text-White font-medium py-4 bg-DarkSlateGray absolute  group-hover:opacity-50 
             text-[12px] rounded-md mt-[52px] bg-gradient-to-tr from-Peach to-Orange blur-sm opacity-0 
             mobile:mt-[165px] mobile:text-[16px] mobile:py-4 
             mobileBig:mt-[170px] mobileBig:text-[18px] mobileBig:py-5 mobileBig:font-medium 
             "
            >
              Dismiss message
            </button>
            <button
              className="w-full text-White font-medium py-4 bg-DarkSlateGray relative  z-10
             text-[12px] rounded-md mt-[50px]  group-hover:bg-gradient-to-tr from-Peach to-Orange  
             mobile:mt-[160px] mobile:text-[16px] mobile:py-4
             mobileBig:mt-[165px] mobileBig:text-[18px] mobileBig:py-5 mobileBig:font-medium
             "
            >
              Dismiss message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
