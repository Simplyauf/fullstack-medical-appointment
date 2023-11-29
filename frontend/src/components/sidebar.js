"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import ProfileImg from "@/public/Images/profilepic1.jpg";
import { BiVideo } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useOutsideAlerter } from "../utils/handleOutsideClick";

const Dashboard = ({ openSideBar, closeSideBar }) => {
  console.log(openSideBar);
  const router = useRouter();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, closeSideBar);

  const sideItems = [
    {
      name: "Doctors",
      icon: (active) => (
        <BiVideo
          className={`w-[13px] h-5 ${
            active ? "text-[#0148ff]" : "text-[#989898]"
          }`}
        />
      ),
      route: "/search",
    },
    {
      name: "Video Consultation",
      icon: (active) => (
        <BiVideo
          className={`w-[13px] h-5 ${
            active ? "text-[#0148ff]" : "text-[#989898]"
          }`}
        />
      ),
      route: "/video",
    },
    {
      name: "My Appointments",
      icon: (active) => (
        <BiVideo
          className={`w-[13px] h-5 ${
            active ? "text-[#0148ff]" : "text-[#989898]"
          }`}
        />
      ),
      route: "/profile/my-appointment",
    },
    {
      name: "History",
      icon: (active) => (
        <BiVideo
          className={`w-[13px] h-5 ${
            active ? "text-[#0148ff]" : "text-[#989898]"
          }`}
        />
      ),
      route: "/profile/history",
    },
    // {
    //   name: "Doctor Call",
    //   icon: (active) => (
    //     <BiVideo
    //       className={`w-[13px] h-5 ${
    //         active ? "text-[#0148ff]" : "text-[#989898]"
    //       }`}
    //     />
    //   ),
    // },
    {
      name: "Doctor Recordings",
      icon: (active) => (
        <BiVideo
          className={`w-[13px] h-5 ${
            active ? "text-[#0148ff]" : "text-[#989898]"
          }`}
        />
      ),
    },
    {
      name: "Message",
      icon: (active) => (
        <BiVideo
          className={`w-[13px] h-5 ${
            active ? "text-[#0148ff]" : "text-[#989898]"
          }`}
        />
      ),
    },
    {
      name: "Doctor Review",
      icon: (active) => (
        <BiVideo
          className={`w-[13px] h-5 ${
            active ? "text-[#0148ff]" : "text-[#989898]"
          }`}
        />
      ),
    },
  ];

  const navigateToPage = (route) => {
    router.push(`${route}`);
  };
  return (
    <section
      className={`fixed z-[2000]  md:w-0  min-w-[100vw] top-0 h-[100vh] bg-black/20 transition-all ease-out md:bg-transparent  md:min-w-fit   ${
        openSideBar ? "translate-x-0" : "translate-x-[-100%] md:translate-x-0"
      }`}
    >
      <div
        ref={wrapperRef}
        className="fixed bg-white bottom-0 border-r md:border-b border-r-bs border-b-bs w-[270px] h-screen md:h-[700px] md:top-0"
      >
        <div className="flex flex-row gap-[1rem] px-4 py-[14px] w-full pl-4 bg-primary">
          <Link href="/dasboard/Profile">
            <Image
              width={50}
              height={50}
              src={ProfileImg}
              alt="profile"
              className="cursor-pointer min-w-[50px] min-h-[50px] object-cover rounded-full"
            />
          </Link>
          <div className="flex flex-col w-[5cm]">
            <p className="font-semibold text-white cursor-pointer text-[1rem]">
              Hey, Samantha!
            </p>
            <p className="text-small text-white/50">+234 8149 660 220</p>
          </div>
        </div>
        <ul className="flex flex-col mt-10">
          {sideItems.map((item, index) => {
            const { icon, name, route } = item;
            return (
              <li
                key={index}
                className="h-[50px] cursor-pointer border-b-[#edf1f4] border-b flex justify-between items-center hover:bg-lighter-primary-opacity  px-[1rem] "
              >
                <div
                  className="text-dark flex items-center gap-4 "
                  onClick={() => navigateToPage(route)}
                >
                  {icon("")}
                  <span className="text-[13px] md:text-[14px] text-[#343a40] bg-transparent ">
                    {name}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
        <li className="h-[50px] mt-4 cursor-pointer  flex justify-between items-center  px-[1rem] ">
          <div className="text-dark flex items-center gap-4 ">
            <BiVideo className="w-[13px] h-5 text-red-700" />
            <span className="text-[13px] text-dark font-semibold ">Logout</span>
          </div>
        </li>
      </div>
    </section>
  );
};

export default Dashboard;
