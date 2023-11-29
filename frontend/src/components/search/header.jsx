"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { LiaBarsSolid } from "react-icons/lia";

const Header = () => {
  const router = useRouter();
  return (
    <header className="  px-[16px] sticky  md:pl-[5%] top-0 shadow-small py-[1rem] z-[10] bg-white w-full">
      <div className="flex flex-row items-center justify-between w-full">
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
        </div>
        <div className="ml-auto">
          <div className="outline outline-1 outline-gray-200 w-[35px] h-[35px] rounded-full flex items-center justify-center">
            <LiaBarsSolid className="text-dark cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-full bg-light h-[1.2cm] mt-[1rem]  rounded-[10px] flex flex-row px-4 py-1 items-center shadow-normal">
          <BsSearch className="text-primary font-bold w-4 h-4 " />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent px-4   w-full text-[0.4cm] text-dark outline-0  focus:ring-0 focus:outline-0 border-0 focus:border-gray-300 border-gray-300"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
