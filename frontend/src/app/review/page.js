"use client";

import React from "react";
import Header from "../../components/profilePage/Header";
import { BsStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSideBar } from "@/src/redux/slices/App";
import Sidebar from "@/src/components/sidebar";

const page = () => {
  const starsArray = new Array(5).fill();

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
        <Header text="My Appointment" />

        <main className=" mt-[0.5rem] p-[1rem]  relative w-full bg-light pt-4 pb-[120px] md:pb-[160px] md:px-[calc(5%)]">
          <div className="mt-4 p-[1rem]">
            <div className="flex flex-col items-center mt-[3rem]">
              <img
                src="Images/available-doctor-1.jpg"
                alt=""
                className="w-[8rem] h-[8rem] rounded-full  object-cover"
              />
              <p className="text-dark text-[15px] mt-[2rem] font-medium">
                How was your experience with
              </p>
              <p className="text-primary text-[19px] font-semibold mt-[0.5rem]">
                Dr. Cayden Stack
              </p>
              <div className="flex flex-row gap-[1rem]">
                {starsArray.map((_, index) => {
                  return (
                    <div key={index}>
                      <BsStarFill className="text-warning text-[16px] mt-[0.7rem]" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-[3rem]">
              <div className="flex flex-row justify-between">
                <p className="text-[14px] text-dark">Write a comment</p>
                <p className="text-[13px] text-light-primary">Max 250 words</p>
              </div>
              <textArea
                className="w-full h-[8rem] text-dark outline-0  focus:ring-0 focus:outline-0 border-1 focus:border-light-primary focus:border-1 border-gray-300 text-[14px] mt-[0.5rem] rounded-[10px]"
                placeholder="Write your review here..."
              />
            </div>
            <div className="h-[5rem] fixed bottom-0 mb-0 px-[1rem] z-[1000] w-full md:w-[calc(100%-310px)]  right-0 bg-gray-100 flex items-center justify-center">
              <button className="text-white bg-light-primary h-[3.5rem] w-full  rounded-[15px] font-semibold">
                Submit Review
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
