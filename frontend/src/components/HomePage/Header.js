"use client";
import React from "react";
import { BsHeart, BsBell, BsSearch } from "react-icons/bs";
import { LiaBarsSolid } from "react-icons/lia";
import { PiFunnel } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import ProfileImg from "@/public/Images/profilepic1.jpg";

const Header = ({ ToggleSideBar }) => {
  return (
    <div className=" px-[16px] sticky  md:pl-[5%] top-0 shadow-small py-[1rem] z-[10] bg-white w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row gap-[1rem] w-[50%]">
          <Link href="/dashboard/profile">
            <Image
              width={35}
              height={35}
              src={ProfileImg}
              alt="profile"
              className="cursor-pointer min-w-[35px] min-h-[35px] object-cover rounded-full"
            />
          </Link>
          <div className="flex flex-col w-[5cm]">
            <p className="text-small text-orange">Welcome</p>
            <p className="font-semibold text-primary cursor-pointer text-[0.81rem]">
              Hey, Samantha!
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-[1rem] w-full justify-end">
          <div className="outline outline-1 outline-gray-200 w-[2rem] h-[2rem] rounded-full flex items-center justify-center shadow-normal">
            <BsHeart className="text-primary cursor-pointer" />
          </div>
          <Link
            href="/notifications"
            className=" w-[2rem] h-[2rem] rounded-full flex items-center justify-center shadow-normal"
          >
            <BsBell className="text-primary cursor-pointer" />
          </Link>
          <div
            className=" w-[2rem] h-[2rem] rounded-full md:hidden flex items-center justify-center shadow-normal"
            onClick={ToggleSideBar}
          >
            <LiaBarsSolid className="text-primary cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="w-full bg-light h-[1.2cm] mt-[1rem]  rounded-[10px] flex flex-row px-4 py-1 items-center shadow-normal">
        <BsSearch className="text-primary font-bold w-4 h-4 " />
        <input
          type="text"
          placeholder="Find your suitable doctor!"
          className="bg-transparent px-4   w-full text-[0.4cm] text-dark outline-0 border-r focus:ring-0 focus:outline-0 border-0 focus:border-gray-300 border-gray-300"
        />
        <div className=" min-h-[18px] min-w-[18px] pl-3 flex items-center justify-center  ">
          <PiFunnel className="min-w-[18px] min-h-[18px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
