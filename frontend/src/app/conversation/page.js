"use client";

import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineAudio } from "react-icons/ai";
import { LiaBarsSolid } from "react-icons/lia";
import { IoVideocamOutline } from "react-icons/io";
import { BsPaperclip, BsSend, BsTelephone } from "react-icons/bs";
import ProfileImg from "@/public/Images/profilepic1.jpg";
import Image from "next/image";
import Header from "@/src/components/chats/header";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSideBar } from "@/src/redux/slices/App";
import Sidebar from "@/src/components/sidebar";

const Conversation = () => {
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
        <Header />

        <main className=" mt-[0.5rem] p-[1rem]  relative w-full bg-light pt-4 pb-[120px] md:pb-[160px] md:px-[calc(5%)]">
          <div className="w-full px-4 flex flex-col gap-4 overflow-auto vertical-scrollbar pb-5">
            <p className="text-center text-dark text-[13px]">Yesterday</p>
            <div>
              <div className="w-[90%] self-start flex items-end gap-2 ">
                <Image
                  width={0}
                  height={0}
                  src={ProfileImg}
                  alt="profile"
                  sizes="100vw"
                  className="rounded-[50%] min-w-[38px] min-h-[38px] w-[38px] h-[38px] object-cover"
                />
                <div className="relative bg-white shadow-small text-dark rounded-[20px] text-[13px] flex justify-center items-center py-[10px] px-4">
                  <p>Good afternoon, Doctor.</p>
                </div>
              </div>
              <p className="text-secondary pl-16 text-small mt-1">05:55pm</p>
            </div>

            <div>
              <div className="w-full self-end flex-row-reverse flex items-end gap-2 ">
                <Image
                  width={0}
                  height={0}
                  src={ProfileImg}
                  alt="profile"
                  sizes="100vw"
                  className="rounded-[50%] min-w-[38px] min-h-[38px] w-[38px] h-[38px] object-cover"
                />
                <div className="relative bg-light-primary shadow-small text-white rounded-[20px] text-[13px] flex justify-center items-center py-[10px] px-4">
                  <p>Good afternoon, Doctor.</p>
                </div>
              </div>
              <p className="text-secondary mt-1 text-right pr-16 text-small">
                05:55pm
              </p>
            </div>
            <div>
              <div className="w-full self-end flex-row-reverse flex items-end gap-2 ">
                <Image
                  width={0}
                  height={0}
                  src={ProfileImg}
                  alt="profile"
                  sizes="100vw"
                  className="rounded-[50%] min-w-[38px] min-h-[38px] w-[38px] h-[38px] object-cover"
                />
                <div className="relative bg-light-primary shadow-small text-white rounded-[20px] text-[13px] flex justify-center items-center py-[10px] px-4">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Amet commodi aut, quibusdam, tenetur dolor rem illo
                    asperiores incidunt odio vel, dicta fugit. Aliquid ipsum
                    enim nulla velit. Lorem ipsum dolor sit amet, consectetur
                    adipisicing.
                  </p>
                </div>
              </div>
              <p className="text-secondary mt-1 text-right pr-16 text-small">
                05:55pm
              </p>
            </div>
          </div>

          <section className="fixed left-0 bottom-0 h-[56px] justify-between w-full flex px-4 bg-white md:w-[calc(100%-310px)] md:right-0 md:left-auto">
            <input
              type="text"
              name=""
              id=""
              className="w-[70%] md:w-[80%] h-full border-0 outline-0 focus-visible:outline-none focus:ring-0 focus:outline-none focus-visible:ring-none"
            />
            <div className="flex items-center gap-1 md:gap-3 justify-end">
              <div className="min-w-[35px] min-h-[35px] flex justify-center cursor-pointer items-center bg-lighter-primary-opacity rounded-[50%]">
                <BsPaperclip className="text-dark w-4 h-4" />
              </div>
              <div className="min-w-[35px] min-h-[35px] flex justify-center cursor-pointer items-center bg-lighter-primary-opacity rounded-[50%]">
                {" "}
                <AiOutlineAudio className="text-dark w-4 h-4" />
              </div>
              <div className="min-w-[35px] min-h-[35px] flex justify-center cursor-pointer items-center bg-primary rounded-[50%]">
                <BsSend className="text-white w-4 h-4" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Conversation;
