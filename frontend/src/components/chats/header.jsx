"use client";

import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { LiaBarsSolid, LiaPhoneSolid, LiaVideoSolid } from "react-icons/lia";
import ProfileImg from "@/public/Images/profilepic1.jpg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row h-[4.5rem] px-[0.5cm] items-center shadow-small bg-white sticky w-full top-0">
      <div className="flex flex-row items-center gap-[1rem]">
        <Link href="/">
          {" "}
          <div
            className="outline outline-1 outline-gray-200 w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => router.back()}
          >
            <AiOutlineArrowLeft className="text-dark cursor-pointer" />
          </div>
        </Link>
        <div className="flex gap-2 items-center">
          <Image
            width={0}
            height={0}
            src={ProfileImg}
            alt="profile"
            sizes="100vw"
            className="rounded-[50%] min-w-[35px] min-h-[35px] w-[35px] h-[35px] object-cover"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-[14px] font-bold">Dr. Osahan</h3>
            <p className="text-small text-orange">Online</p>
          </div>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <div className=" bg-white shadow-normal  w-[35px] h-[35px] rounded-full flex items-center justify-center">
          <LiaPhoneSolid className="text-primary  cursor-pointer" />
        </div>
        <div className=" bg-white shadow-normal  w-[35px] h-[35px] rounded-full flex items-center justify-center">
          <LiaVideoSolid className="text-primary  cursor-pointer" />
        </div>
        <div className=" bg-white shadow-normal  w-[35px] h-[35px] rounded-full flex items-center justify-center md:hidden">
          <LiaBarsSolid className="text-dark cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
