"use client";

import React from "react";
import Header from "@/src/components/profilePage/Header";
import {
  MdPersonOutline,
  MdOutlinePeople,
  MdOutlinePhone,
  MdCalendarMonth,
} from "react-icons/md";
import { BiCalendarX } from "react-icons/bi";
import { IoMdCalendar } from "react-icons/io";
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
        <Header text="My Profile" />

        <main className=" mt-[0.5rem] p-[1rem]  relative w-full bg-light pt-4 pb-[120px] md:pb-[160px] md:px-[calc(5%)]">
          <form className="mt-4 flex flex-col gap-4 max-w-[800px]">
            <div className="flex flex-col px-[1rem]">
              <label
                htmlFor="first-name"
                className="text-[13px] text-secondary"
              >
                First Name
              </label>
              <div className="w-full bg-white h-[1.2cm] mt-[0.3rem]  rounded-[10px] flex flex-row px-4 py-1 items-center border border-1 border-gray-200">
                <MdPersonOutline className="text-dark font-bold w-6 h-6 " />
                <input
                  type="text"
                  placeholder="Type your first name"
                  name="first-name"
                  value="Mr"
                  className="bg-white px-4   w-full text-[0.4cm] text-dark outline-0  focus:ring-0 focus:outline-0 border-0 focus:border-gray-300 border-gray-300"
                />
              </div>
            </div>
            <div className="flex flex-col px-[1rem]">
              <label htmlFor="last-name" className="text-[13px] text-secondary">
                Last Name
              </label>
              <div className="w-full bg-white h-[1.2cm] mt-[0.3rem]  rounded-[10px] flex flex-row px-4 py-1 items-center border border-1 border-gray-200">
                <MdPersonOutline className="text-dark font-bold w-6 h-6 " />
                <input
                  type="text"
                  placeholder="Type your last name"
                  name="last-name"
                  value="Singh"
                  className="bg-white px-4   w-full text-[0.4cm] text-dark outline-0  focus:ring-0 focus:outline-0 border-0 focus:border-gray-300 border-gray-300"
                />
              </div>
            </div>
            <div className="flex flex-col px-[1rem]">
              <label htmlFor="gender" className="text-[13px] text-secondary">
                Gender
              </label>
              <div className="w-full bg-white h-[1.2cm] mt-[0.3rem]  rounded-[10px] flex flex-row px-4 py-1 items-center border border-1 border-gray-200">
                <MdOutlinePeople className="text-dark font-bold w-6 h-6 " />
                <select
                  name="gender"
                  className="bg-white px-4   w-full text-[0.4cm] text-dark outline-0  focus:ring-0 focus:outline-0 border-0 focus:border-gray-300 border-gray-300"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row px-[1rem] gap-2 w-full">
              <div className="flex flex-col">
                <label htmlFor="day" className="text-[13px] text-secondary">
                  Day
                </label>
                <div className="w-full bg-white h-[1.2cm] mt-[0.3rem]  rounded-[10px] flex flex-row px-4 py-1 items-center border border-1 border-gray-200">
                  <IoMdCalendar className="text-dark font-bold w-6 h-6 " />
                  <select
                    name="day"
                    className="bg-white px-4   w-full text-[0.4cm] text-dark outline-0  focus:ring-0 focus:outline-0 border-0 focus:border-gray-300 border-gray-300"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="month" className="text-[13px] text-secondary">
                  Month
                </label>
                <div className="w-full bg-white h-[1.2cm] mt-[0.3rem]  rounded-[10px] flex flex-row px-4 py-1 items-center border border-1 border-gray-200">
                  <MdCalendarMonth className="text-dark font-bold w-6 h-6 " />
                  <select
                    name="month"
                    className="bg-white px-4   w-full text-[0.4cm] text-dark outline-0  focus:ring-0 focus:outline-0 border-0 focus:border-gray-300 border-gray-300"
                  >
                    <option value="jan">Jan</option>
                    <option value="feb">Feb</option>
                    <option value="mar">Mar</option>
                    <option value="apr">Apr</option>
                    <option value="may">May</option>
                    <option value="jun">Jun</option>
                    <option value="jul">Jul</option>
                    <option value="aug">Aug</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="year" className="text-[13px] text-secondary">
                  Year
                </label>
                <div className="w-full bg-white h-[1.2cm] mt-[0.3rem]  rounded-[10px] flex flex-row px-4 py-1 items-center border border-1 border-gray-200">
                  <BiCalendarX className="text-dark font-bold w-6 h-6 " />
                  <select
                    name="year"
                    className="bg-white px-4   w-full text-[0.4cm] text-dark outline-0  focus:ring-0 focus:outline-0 border-0 focus:border-gray-300 border-gray-300"
                  >
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-[1rem]">
              <label htmlFor="phone" className="text-[13px] text-secondary">
                Phone
              </label>
              <div className="w-full bg-white h-[1.2cm] mt-[0.3rem]  rounded-[10px] flex flex-row px-4 py-1 items-center border border-1 border-gray-200">
                <MdOutlinePhone className="text-dark font-bold w-6 h-6 " />
                <input
                  type="number"
                  placeholder="Type your number"
                  name="phone"
                  value="08086***111"
                  className="bg-white px-4   w-full text-[0.4cm] text-dark outline-0  focus:ring-0 focus:outline-0 border-0 focus:border-gray-300 border-gray-300"
                />
              </div>
            </div>
            <div className="h-[5rem] fixed bottom-0 md:bottom-[180px] mb-0 px-[1rem] z-[1000] w-full md:w-[calc(100%-310px)] lg:w-[calc(800px)]   md:right-0 bg-gray-100 lg:right-auto flex items-center justify-center">
              <button className="text-white bg-light-primary h-[3.5rem] w-full rounded-[15px] font-semibold">
                Save Change
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default page;
