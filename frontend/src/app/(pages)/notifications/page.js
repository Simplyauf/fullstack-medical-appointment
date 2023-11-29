"use client";

import Header from "@/src/components/profilePage/Header";
import React from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSideBar } from "@/src/redux/slices/App";
import Sidebar from "@/src/components/sidebar";

const Page = () => {
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
      {" "}
      <Sidebar openSideBar={openSideBar} closeSideBar={closeSideBar} />
      <div className="w-full md:w-[calc(100%-270px)] absolute right-0 top-0">
        <Header text="Notification" />
        <main className="bg-light pt-4 pb-[120px] md:pb-[160px] md:px-[calc(5%)]">
          <div>
            <h4 className="p-4">Today 16 Nov,2023</h4>
            <div className="flex flex-col">
              <div className="p-4 flex items-start w-full gap-4 bg-white border-b-[0.8px] border-b-[#eee]">
                <div className="w-[50px] h-[50px] rounded-[50%] bg-info-bg-light flex justify-center items-center">
                  <MdOutlineCalendarMonth className="w-6 fill-info-bg h-6" />
                </div>
                <div>
                  {" "}
                  <p className="text-secondary text-[13px] mb-2">
                    You have appointment with mahbuba uslam at 9.00pm today
                  </p>
                  <p className="text-blue-600">Just Now</p>
                </div>
              </div>
              <div className="p-4 flex items-start w-full gap-4 bg-white border-b-[0.8px] border-b-[#eee]">
                <div className="w-[50px] h-[50px] rounded-[50%] bg-info-bg-light flex justify-center items-center">
                  <MdOutlineCalendarMonth className="w-6 fill-info-bg h-6" />
                </div>
                <div>
                  {" "}
                  <p className="text-secondary text-[13px] mb-2">
                    You have appointment with mahbuba uslam at 9.00pm today
                  </p>
                  <p className="text-blue-600">Just Now</p>
                </div>
              </div>
            </div>
          </div>
          <section className="mt-1">
            <h4 className="p-4">Older</h4>
            <div className="flex flex-col">
              <div className="p-4 flex items-start w-full gap-4 bg-white border-b-[0.8px] border-b-[#eee]">
                <div className="w-[50px] h-[50px] rounded-[50%] bg-info-bg-light flex justify-center items-center">
                  <MdOutlineCalendarMonth className="w-6 fill-info-bg h-6" />
                </div>
                <div>
                  {" "}
                  <p className="text-secondary text-[13px] mb-2">
                    You have appointment with mahbuba uslam at 9.00pm today
                  </p>
                  <p className="text-blue-600">Just Now</p>
                </div>
              </div>
              <div className="p-4 flex items-start w-full gap-4 bg-white border-b-[0.8px] border-b-[#eee]">
                <div className="w-[50px] h-[50px] rounded-[50%] bg-info-bg-light flex justify-center items-center">
                  <MdOutlineCalendarMonth className="w-6 fill-info-bg h-6" />
                </div>
                <div>
                  {" "}
                  <p className="text-secondary text-[13px] mb-2">
                    You have appointment with mahbuba uslam at 9.00pm today
                  </p>
                  <p className="text-blue-600">Just Now</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Page;
