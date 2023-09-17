"use client";
import mobile from "@/public/assets/images/illustration-sign-up-mobile.svg";
import Image from "next/image";
import SignUp from "./component/SignUp";

export default function Home() {
  return (
    <div className="w-screen h-screen justify-center flex items-center bg-CharcoalGray p-4 relative">
      <div
        className="w-[44%] h-[60%]  bg-White   items-center justify-center absolute px-4
       rounded-3xl shadow-xl overflow-hidden
       mobile:w-full mobile:h-full mobile:rounded-none mobile:!p-0
       mobileBig:w-full mobileBig:h-full mobileBig:rounded-none mobileBig:!p-0
       "
      >
        <div className="desktop:hidden">
          <Image src={mobile} alt="desktop" className="w-screen" priority />
        </div>
        <SignUp
          header="Stay updated!"
          paragraph="Join 60,000+ product managers receiving monthly updates on:"
          listA="Product discovery and building what matters"
          listB="Measuring to ensure updates are a success"
          listC="And much more!"
        />
      </div>
    </div>
  );
}
