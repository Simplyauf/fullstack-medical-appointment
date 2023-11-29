"use client";
import React from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { PiCaretRightBold } from "react-icons/pi";
import Link from "next/link";
import Footer from "@components/BottomNav";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSideBar } from "@/src/redux/slices/App";
import Sidebar from "@/src/components/sidebar";

const page = () => {
  const dispatch = useDispatch();
  const { openSideBar } = useSelector((state) => state.App);

  const ToggleSideBar = () => {
    dispatch(setOpenSideBar(!openSideBar));
  };
  const closeSideBar = () => {
    dispatch(setOpenSideBar(false));
  };
  return (
    <div className="min-h-screen bg-light">
      <Sidebar openSideBar={openSideBar} closeSideBar={closeSideBar} />
      <div className="w-full md:w-[calc(100%-270px)] absolute right-0 top-0">
        <div className="flex flex-row md:pl-[5%] h-[4.5rem] px-[16px] items-center shadow-md bg-white">
          <div className="flex flex-row items-center gap-[1rem]">
            <Link href="/">
              {" "}
              <div className="outline outline-1 outline-gray-200 w-[2rem] h-[2rem] rounded-full flex items-center justify-center">
                <AiOutlineArrowLeft className="text-dark cursor-pointer" />
              </div>
            </Link>
            <div className="flex flex-row gap-[0.5rem]">
              <Link href="/Pages/Profile">
                <img
                  src="/Images/profilepic1.jpg"
                  className="w-[1cm] object-cover h-[1cm] rounded-full cursor-pointer"
                />
              </Link>
              <div className="flex flex-col w-[5cm]">
                <p className="text-[0.75rem] lg:text-[calc(0.75rem+0.4vw)] font-semibold text-dark">
                  Ms Samantha
                </p>
                <p className="text-orange cursor-pointer text-[0.67rem]">
                  @mssamantha
                </p>
              </div>
            </div>
          </div>
          <div className="ml-auto md:hidden">
            <div className="outline outline-1 outline-gray-200 w-[2rem] h-[2rem] rounded-full flex items-center justify-center">
              <LiaBarsSolid className="text-dark cursor-pointer" />
            </div>
          </div>
        </div>

        <main className=" mt-[0.5rem] p-[1rem]  relative w-full bg-light pt-4 pb-[120px] md:pb-[160px] md:px-[calc(5%)]">
          <div className="bg-white p-[1rem] relative overflow-hidden rounded-[10px] outline outline-1 outline-gray-200">
            <BiSolidEdit className="absolute text-white text-[1.7rem] right-[0.5cm] top-[0.5cm] z-20 cursor-pointer" />
            <Link
              href="/profile/edit-profile"
              className="w-[4cm] h-[4cm] rounded-full bg-primary absolute right-[-2cm] top-[-2cm] cursor-pointer"
            ></Link>
            <p className="text-[0.93rem] sm:text-lg lg:text-xl">
              Personal Info
            </p>
            <div className="flex flex-row mt-[1rem]">
              <div className=" flex flex-col gap-[1rem] w-[50%] md:w-[40%]">
                <div className="flex flex-col gap-[0.1rem]">
                  <p className="text-[0.65rem] lg:text-[calc(0.65rem+0.4vw)]  text-secondary">
                    Name
                  </p>
                  <p className="text-[0.75rem] lg:text-[calc(0.75rem+0.4vw)] text-dark">
                    Ms Samantha
                  </p>
                </div>
                <div className="flex flex-col gap-[0.1rem]">
                  <p className="text-[0.65rem] lg:text-[calc(0.65rem+0.4vw)] text-secondary">
                    Gender
                  </p>
                  <p className="text-[0.75rem] lg:text-[calc(0.75rem+0.4vw)] text-dark">
                    Female
                  </p>
                </div>
                <div className="flex flex-col gap-[0.1rem]">
                  <p className="text-[0.65rem] lg:text-[calc(0.65rem+0.4vw)] text-secondary">
                    Email
                  </p>
                  <p className="text-[0.75rem] lg:text-[calc(0.75rem+0.4vw)] text-dark">
                    samantha@gmail.com
                  </p>
                </div>
              </div>
              <div className=" flex flex-col gap-[1rem]">
                <div className="flex flex-col gap-[0.1rem]">
                  <p className="text-[0.65rem] lg:text-[calc(0.65rem+0.4vw)] text-secondary">
                    Date of Birth
                  </p>
                  <p className="text-[0.75rem] lg:text-[calc(0.75rem+0.4vw)] text-dark">
                    11 Jan 2000
                  </p>
                </div>
                <div className="flex flex-col gap-[0.1rem]">
                  <p className="text-[0.65rem] lg:text-[calc(0.65rem+0.4vw)] text-secondary">
                    Phone
                  </p>
                  <p className="text-[0.75rem] lg:text-[calc(0.75rem+0.4vw)] text-dark">
                    234868**3765
                  </p>
                </div>
                <div className="flex flex-col gap-[0.1rem]">
                  <p className="text-[0.65rem] lg:text-[calc(0.65rem+0.4vw)] text-secondary">
                    Location
                  </p>
                  <p className="text-[0.75rem] lg:text-[calc(0.75rem+0.4vw)] text-dark">
                    Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-[1rem] gap-[0.1rem] outline outline-1 outline-gray-200 rounded-[10px] overflow-hidden">
            <div className="bg-white flex flex-row p-[1rem] justify-between items-center ">
              <p className="lg:text-lg">My Appointment</p>
              <Link
                href="/profile/my-appointment"
                className="outline outline-1 outline-gray-200 w-[2rem] h-[2rem] rounded-full flex items-center justify-center"
              >
                <PiCaretRightBold className="text-dark cursor-pointer" />
              </Link>
            </div>
            <div className="bg-white flex flex-row p-[1rem] justify-between items-center ">
              <p className="lg:text-lg">History</p>
              <Link
                href="/profile/history"
                className="outline outline-1 outline-gray-200 w-[2rem] h-[2rem] rounded-full flex items-center justify-center"
              >
                <PiCaretRightBold className="text-dark cursor-pointer" />
              </Link>
            </div>
            <div className="bg-white flex flex-row p-[1rem] justify-between items-center ">
              <p className="lg:text-lg">Favorite Doctor</p>
              <Link
                href="/profile/favorite-doctors"
                className="outline outline-1 cursor-pointer outline-gray-200 w-[2rem] h-[2rem] rounded-full flex items-center justify-center"
              >
                <PiCaretRightBold className="text-dark cursor-pointer" />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
