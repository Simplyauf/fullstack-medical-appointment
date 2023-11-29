"use client";

import BookAppointmentCards from "@/src/components/BookAppointmentCards";
import Header from "@/src/components/search/header";
import React from "react";
import { BsSearch, BsStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSideBar } from "@/src/redux/slices/App";
import Sidebar from "@/src/components/sidebar";

const starsArray = new Array(5).fill();

const Search = () => {
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
        <Header ToggleSideBar={ToggleSideBar} />

        <main className="w-full bg-light pt-4 pb-[120px] md:pb-[160px] md:px-[calc(5%)]">
          <div className="my-4">
            <p className=" font-semibold ml-4 mb-4 sm:text-lg lg:text-xl">
              Specialist
            </p>
            <section className="flex flex-col shadow-small ">
              <article className="flex flex-row items-center p-[1rem] bg-white border-b border-b-bs ">
                <div className="flex flex-row items-center gap-[1rem]">
                  <img
                    src="/Images/top-doctor-1.jpg"
                    alt=""
                    className="w-[50px] object-cover h-[50px] rounded-[10px]"
                  />
                  <div className="flex flex-col gap-1 justify-center">
                    <p className="font-semibold text-dark text-[14px] leading-[17px]">
                      Dr. Cayden Stack
                    </p>
                    <div className="flex flex-row items-center  gap-[0.2rem]">
                      <div className="flex leading-[14.92px] flex-row gap-[0.4rem]">
                        {starsArray.map((_, index) => {
                          return (
                            <div key={index}>
                              <BsStarFill className="text-warning leading-[14.92px] text-[8px]" />
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-warning leading-[11px] ml-[2px] text-[11px]">
                        4.9
                      </p>
                      <p className="text-[11px] leading-[14.92px] text-secondary font-medium">
                        &#40;5,380&#41;
                      </p>
                    </div>
                    <p className="text-[11px] text-secondary leading-[12px]">
                      Dentist- Cumilla Medical College
                    </p>
                  </div>
                </div>
              </article>
              <article className="flex flex-row items-center p-[1rem] bg-white border-b border-b-bs">
                <div className="flex flex-row items-center gap-[1rem]">
                  <img
                    src="/Images/top-doctor-1.jpg"
                    alt=""
                    className="w-[50px] object-cover h-[50px] rounded-[10px]"
                  />
                  <div className="flex flex-col gap-1 justify-center">
                    <p className="font-semibold text-dark text-[14px] leading-[17px]">
                      Dr. Cayden Stack
                    </p>
                    <div className="flex flex-row items-center  gap-[0.2rem]">
                      <div className="flex leading-[14.92px] flex-row gap-[0.4rem]">
                        {starsArray.map((_, index) => {
                          return (
                            <div key={index}>
                              <BsStarFill className="text-warning leading-[14.92px] text-[8px]" />
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-warning leading-[11px] ml-[2px] text-[11px]">
                        4.9
                      </p>
                      <p className="text-[11px] leading-[14.92px] text-secondary font-medium">
                        &#40;5,380&#41;
                      </p>
                    </div>
                    <p className="text-[11px] text-secondary leading-[12px]">
                      Dentist- Cumilla Medical College
                    </p>
                  </div>
                </div>
              </article>
              <article className="flex flex-row items-center p-[1rem] bg-white border-b border-b-bs">
                <div className="flex flex-row items-center gap-[1rem]">
                  <img
                    src="/Images/top-doctor-1.jpg"
                    alt=""
                    className="w-[50px] object-cover h-[50px] rounded-[10px]"
                  />
                  <div className="flex flex-col gap-1 justify-center">
                    <p className="font-semibold text-dark text-[14px] leading-[17px]">
                      Dr. Cayden Stack
                    </p>
                    <div className="flex flex-row items-center  gap-[0.2rem]">
                      <div className="flex leading-[14.92px] flex-row gap-[0.4rem]">
                        {starsArray.map((_, index) => {
                          return (
                            <div key={index}>
                              <BsStarFill className="text-warning leading-[14.92px] text-[8px]" />
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-warning leading-[11px] ml-[2px] text-[11px]">
                        4.9
                      </p>
                      <p className="text-[11px] leading-[14.92px] text-secondary font-medium">
                        &#40;5,380&#41;
                      </p>
                    </div>
                    <p className="text-[11px] text-secondary leading-[12px]">
                      Dentist- Cumilla Medical College
                    </p>
                  </div>
                </div>
              </article>
              <article className="flex flex-row items-center p-[1rem] bg-white border-b border-b-bs">
                <div className="flex flex-row items-center gap-[1rem]">
                  <img
                    src="/Images/top-doctor-1.jpg"
                    alt=""
                    className="w-[50px] object-cover h-[50px] rounded-[10px]"
                  />
                  <div className="flex flex-col gap-1 justify-center">
                    <p className="font-semibold text-dark text-[14px] leading-[17px]">
                      Dr. Cayden Stack
                    </p>
                    <div className="flex flex-row items-center  gap-[0.2rem]">
                      <div className="flex leading-[14.92px] flex-row gap-[0.4rem]">
                        {starsArray.map((_, index) => {
                          return (
                            <div key={index}>
                              <BsStarFill className="text-warning leading-[14.92px] text-[8px]" />
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-warning leading-[11px] ml-[2px] text-[11px]">
                        4.9
                      </p>
                      <p className="text-[11px] leading-[14.92px] text-secondary font-medium">
                        &#40;5,380&#41;
                      </p>
                    </div>
                    <p className="text-[11px] text-secondary leading-[12px]">
                      Dentist- Cumilla Medical College
                    </p>
                  </div>
                </div>
              </article>
              <article className="flex flex-row items-center p-[1rem] bg-white border-b border-b-bs">
                <div className="flex flex-row items-center gap-[1rem]">
                  <img
                    src="/Images/top-doctor-1.jpg"
                    alt=""
                    className="w-[50px] object-cover h-[50px] rounded-[10px]"
                  />
                  <div className="flex flex-col gap-1 justify-center">
                    <p className="font-semibold text-dark text-[14px] leading-[17px]">
                      Dr. Cayden Stack
                    </p>
                    <div className="flex flex-row items-center  gap-[0.2rem]">
                      <div className="flex leading-[14.92px] flex-row gap-[0.4rem]">
                        {starsArray.map((_, index) => {
                          return (
                            <div key={index}>
                              <BsStarFill className="text-warning leading-[14.92px] text-[8px]" />
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-warning leading-[11px] ml-[2px] text-[11px]">
                        4.9
                      </p>
                      <p className="text-[11px] leading-[14.92px] text-secondary font-medium">
                        &#40;5,380&#41;
                      </p>
                    </div>
                    <p className="text-[11px] text-secondary leading-[12px]">
                      Dentist- Cumilla Medical College
                    </p>
                  </div>
                </div>
              </article>
            </section>
          </div>
          <div className="mt-4 md:mt-8">
            <h2 className="font-bold px-4 mb-3 sm:text-lg lg:text-xl">
              Available Doctor
            </h2>
            <BookAppointmentCards />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Search;
