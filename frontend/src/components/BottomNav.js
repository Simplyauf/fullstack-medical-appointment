"use client";

import React from "react";
import { BiVideo } from "react-icons/bi";
import { TbHome } from "react-icons/tb";
import { BsChatLeftDots, BsPerson } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";

const BottomNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  console.log("hey");

  const tabs = [
    {
      name: "home",
      icon: (active) => (
        <TbHome
          className={`w-6 h-9 ${active ? "text-[#0148ff]" : "text-[#989898]"}`}
        />
      ),
      route: "/",
    },
    {
      name: "search",
      icon: (active) => (
        <IoMdSearch
          className={`w-6 h-9 ${active ? "text-[#0148ff]" : "text-[#989898]"}`}
        />
      ),
      route: "/search",
    },
    {
      name: "video",
      icon: (active) => (
        <BiVideo
          className={`w-6 h-9 ${active ? "text-[#0148ff]" : "text-[#989898]"}`}
        />
      ),
      route: "/video",
    },
    {
      name: "chat",
      icon: (active) => (
        <BsChatLeftDots
          className={`w-6 h-9 ${active ? "text-[#0148ff]" : "text-[#989898]"}`}
        />
      ),
      route: "/chats",
    },
    {
      name: "profile",
      icon: (active) => (
        <BsPerson
          className={`w-9 h-9 ${active ? "text-[#0148ff]" : "text-[#989898]"}`}
        />
      ),
      route: "/profile",
    },
  ];

  const navigateTabs = (route) => {
    console.log(route);
    router.push(`${route}`);
  };
  return (
    <div className="px-4 fixed bottom-[1rem] mx-auto md:w-[calc(100%-270px)] flex justify-center md:right-0 items-center w-full  z-[1000]">
      <div className="flex flex-row items-center justify-between  shadow-normal bg-white px-4 sm:px-[2rem]  mt-[2rem] w-full max-w-[90%] sm:max-w-[500px] rounded-[10px]">
        {tabs.map((tab, index) => {
          const route = tab.route;
          console.log(pathname, route);
          const active =
            (pathname === "/" && route === "/") ||
            (pathname.startsWith(route) && route !== "/");
          return (
            <div
              className={`flex flex-col py-[1rem] text-[#989898] gap-[0.3rem] cursor-pointer items-center border-b-[4px]   ${
                active ? "border-b-[#0148ff]" : "border-b-transparent"
              }`}
              key={index}
              onClick={() => {
                navigateTabs(route);
              }}
            >
              {tab.icon(active)}
              <p
                className={`uppercase text-[10px] sm:text-[13px] font-semibold text-[#989898] ${
                  active && "text-[#0148ff]"
                }`}
              >
                {tab.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
