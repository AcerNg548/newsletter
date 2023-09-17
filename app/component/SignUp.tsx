import React from "react";
import desktop from "@/public/assets/images/illustration-sign-up-desktop.svg";
import mobile from "@/public/assets/images/illustration-sign-up-mobile.svg";
import check from "@/public/assets/images/icon-list.svg";
import Image from "next/image";
import Email from "./Email";

interface SignUpProps {
  header?: string;
  paragraph?: string;
  listA?: string;
  listB?: string;
  listC?: string;
}
const SignUp: React.FC<SignUpProps> = ({
  header,
  paragraph,
  listA,
  listB,
  listC,
}) => {
  return (
    <>
      <div className="w-full h-full flex flex-row items-center justify-center text-DarkSlateGray  overflow-hidden mobile:px-4">
        <div
          className="w-[60%] h-full py-3   px-6 flex flex-col justify-start relative
      mobile:w-full mobile:
      mobileBig:w-full mobileBig:
      "
        >
          <div className="flex flex-col">
            <h1
              className="font-black text-[40px] mt-6
          mobile:mt-2
          mobileBig:mt-2
          "
            >
              {header}
            </h1>
            <p
              className="font-semibold text-[12px] mt-1 text-CharcoalGray
          mobile:text-[14px]
          mobileBig:text-[16px]
          "
            >
              {paragraph}
            </p>
          </div>

          <div
            className="mt-4 flex flex-col gap-2 font-semibold text-[10px]
            mobile:text-[12px]
            mobileBig:text-[16px]
            "
          >
            <div className="flex flex-row gap-2">
              <Image src={check} alt="check" width={15} />
              <p>{listA} </p>
            </div>

            <div className="flex flex-row gap-2">
              <Image src={check} alt="check" width={15} />
              <p>{listB}</p>
            </div>

            <div className="flex flex-row gap-2">
              <Image src={check} alt="check" width={15} />
              <p>{listC}</p>
            </div>
          </div>

          <div>
            <Email />
          </div>
        </div>

        <div
          className="w-[40%] h-full flex items-center  overflow-hidden
      mobile:hidden
      mobileBig:hidden
      "
        >
          <Image
            src={desktop}
            alt="desktop"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
