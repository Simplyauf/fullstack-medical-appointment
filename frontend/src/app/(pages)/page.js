"use client";

import React, { useState } from "react";
import Header from "../../components/HomePage/Header";
import DoctorImg from "../../../public/Images/doctor.png";
import MedicineImg from "../../../public/Images/medicine.png";
import ScheduleImg from "../../../public/Images/schedule.png";
import PrescriptionImg from "../../../public/Images/prescription.png";
import { BsStarFill } from "react-icons/bs";
import { BiVideo } from "react-icons/bi";
import { CiMedicalCase } from "react-icons/ci";
import TopDoctor1 from "../../../public/Images/top-doctor-1.jpg";
import TopDoctor2 from "../../../public/Images/top-doctor-2.jpg";
import TopDoctor3 from "../../../public/Images/top-doctor-3.jpg";
import AvailableDoctor3 from "../../../public/Images/available-doctor-3.jpg";
import AvailableDoctor2 from "../../../public/Images/available-doctor-2.jpg";
import AvailableDoctor1 from "../../../public/Images/available-doctor-1.jpg";
import AvailableDoctor4 from "../../../public/Images/available-doctor-4.jpg";
import Image from "next/image";
import Sidebar from "@/src/components/sidebar";
import BookAppointmentCards from "@/src/components/BookAppointmentCards";
import AvailableDoctors from "@/src/components/AvailableDoctors";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSideBar } from "@/src/redux/slices/App";

const Home = () => {
  const dispatch = useDispatch();
  const { openSideBar } = useSelector((state) => state.App);

  const ToggleSideBar = () => {
    dispatch(setOpenSideBar(!openSideBar));
  };
  const closeSideBar = () => {
    dispatch(setOpenSideBar(false));
  };
  return (
    <div className="min-h-screen bg-light ">
      <Sidebar openSideBar={openSideBar} closeSideBar={closeSideBar} />
      <div className="w-full md:w-[calc(100%-270px)] absolute right-0 top-0">
        <Header ToggleSideBar={ToggleSideBar} />

        {/* The rest of the components in the homepage*/}
        <main className="w-full bg-light pt-4 pb-[120px] md:pb-[160px] md:px-[calc(5%-16px)]">
          <BookAppointmentCards />
          <section className="grid grid-cols-4 w-full  px-4 mt-2 my-4 sm:my-8 md:gap-4 lg:my-10 gap-2 ">
            <article className="rounded-[10px] h-[90px] sm:h-[172px] flex flex-col items-center justify-center gap-3 shadow-small p-2 bg-white">
              <Image
                src={DoctorImg}
                width={45}
                height={45}
                alt="service-doctor"
              />
              <p className="text-center text-[11.375px] text-ellipsis w-full ">
                Doctor
              </p>
            </article>
            <article className="rounded-[10px] h-[90px] sm:h-[172px] flex flex-col items-center justify-center gap-3 shadow-small p-2 bg-white">
              <Image
                src={ScheduleImg}
                width={45}
                height={45}
                alt="service-doctor"
              />
              <p className="text-center whitespace-nowrap overflow-hidden overflow-ellipsis text-[11.375px] w-full ">
                Appointment
              </p>
            </article>
            <article className="rounded-[10px] h-[90px] sm:h-[172px] flex flex-col items-center justify-center gap-3 p-2 shadow-small bg-white ">
              <Image
                width={45}
                height={45}
                src={PrescriptionImg}
                alt="service-doctor"
              />
              <p className="text-center whitespace-nowrap overflow-hidden overflow-ellipsis text-[11.375px] w-full ">
                Prescription
              </p>
            </article>
            <article className="rounded-[10px] h-[90px] sm:h-[172px] flex flex-col items-center justify-center gap-3 shadow-small p-2 bg-white text-black">
              <Image
                src={MedicineImg}
                width={45}
                height={45}
                alt="service-doctor"
              />
              <h2 className="text-center text-[11.375px] text-ellipsis w-full ">
                Medicine
              </h2>
            </article>
          </section>

          <section className="w-full mt-2">
            <h3 className="font-bold px-4 mb-3">Top Doctors</h3>
            <div className="w-full flex items-start flex-nowrap overflow-y-hidden overflow-x-auto horizontal-overflow px-4 gap-3">
              <article className="flex flex-col min-w-[152px]  w-[152px] h-[161px] md:w-[180px] md:h-[188px]  rounded-[10px] shadow-small bg-white">
                <Image
                  src={TopDoctor1}
                  width={0}
                  height={101}
                  alt="service-doctor"
                  className="min-w-full rounded-t-[10px]"
                />
                <div className="p-3">
                  <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] md:text-[16px] font-semibold ">
                    Dr. Taylor Samaro
                  </h3>
                  <p className="text-small text-secondary md:text-[13px] md:mt-1">
                    Dental Sargon
                  </p>
                </div>
              </article>
              <article className="flex flex-col min-w-[152px]  w-[152px] h-[161px] md:w-[180px] md:h-[188px]  rounded-[10px] shadow-small bg-white">
                <Image
                  src={TopDoctor3}
                  width={0}
                  height={101}
                  alt="service-doctor"
                  className="min-w-full rounded-t-[10px]"
                />
                <div className="p-3">
                  <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] md:text-[16px] font-semibold ">
                    Dr. Taylor Samaro
                  </h3>
                  <p className="text-small text-secondary md:text-[13px] md:mt-1">
                    Dental Sargon
                  </p>
                </div>
              </article>
              <article className="flex flex-col min-w-[152px]  w-[152px] h-[161px] md:w-[180px] md:h-[188px]  rounded-[10px] shadow-small bg-white">
                <Image
                  src={TopDoctor2}
                  width={0}
                  height={101}
                  alt="service-doctor"
                  className="min-w-full rounded-t-[10px]"
                />
                <div className="p-3">
                  <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] md:text-[16px] font-semibold ">
                    Dr. Taylor Samaro
                  </h3>
                  <p className="text-small text-secondary md:text-[13px] md:mt-1">
                    Dental Sargon
                  </p>
                </div>
              </article>
              <article className="flex flex-col min-w-[152px]  w-[152px] h-[161px] md:w-[180px] md:h-[188px]  rounded-[10px] shadow-small bg-white">
                <Image
                  src={TopDoctor1}
                  width={0}
                  height={101}
                  alt="service-doctor"
                  className="min-w-full rounded-t-[10px]"
                />
                <div className="p-3">
                  <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] md:text-[16px] font-semibold ">
                    Dr. Taylor Samaro
                  </h3>
                  <p className="text-small text-secondary md:text-[13px] md:mt-1">
                    Dental Sargon
                  </p>
                </div>
              </article>
            </div>
          </section>

          <AvailableDoctors />
        </main>
      </div>
    </div>
  );
};

export default Home;
