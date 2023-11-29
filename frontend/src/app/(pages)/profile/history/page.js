"use client";
import React from "react";
import Header from "../../../../components/profilePage/Header";
import BottomNav from "../../../../components/BottomNav";
import Tabs from "../../../../components/history/Tabs";
import { BsSearch } from "react-icons/bs";
import { PiFunnel } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSideBar } from "@/src/redux/slices/App";
import Sidebar from "@/src/components/sidebar";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { LiaBarsSolid } from "react-icons/lia";

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
    <div className="bg-light min-h-screen ">
      <Sidebar openSideBar={openSideBar} closeSideBar={closeSideBar} />
      <div className="w-full md:w-[calc(100%-270px)] absolute right-0 top-0">
        <header className="  px-[16px] sticky  md:pl-[5%] top-0 shadow-small py-[1rem] z-[10] bg-white w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row items-center gap-[1rem]">
              <Link href="/profile">
                {" "}
                <div
                  className="outline outline-1 outline-gray-200 w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer"
                  onClick={() => router.back()}
                >
                  <AiOutlineArrowLeft className="text-dark cursor-pointer" />
                </div>
              </Link>
              <h2 className="font-semibold text-[1rem] ">History</h2>
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

        <main className="w-full bg-light mt-4 pb-[120px] md:pb-[160px] md:px-[calc(5%)]">
          <Tabs />
        </main>
      </div>
    </div>
  );
};

export default page;
