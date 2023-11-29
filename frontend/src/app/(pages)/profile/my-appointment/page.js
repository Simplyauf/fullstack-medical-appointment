"use client";

import React from "react";
import Header from "../../../../components/profilePage/Header";
import BottomNav from "../../../../components/BottomNav";
import Tabs from "../../../../components/MyAppointment/Tabs";
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
    <div className="bg-light min-h-screen ">
      <Sidebar openSideBar={openSideBar} closeSideBar={closeSideBar} />
      <div className="w-full md:w-[calc(100%-270px)] absolute right-0 top-0">
        <Header text="My Appointment" />
        <main className="w-full bg-light mt-4 pb-[120px] md:pb-[160px] md:px-[5%]">
          <Tabs />
        </main>
      </div>
    </div>
  );
};

export default page;
