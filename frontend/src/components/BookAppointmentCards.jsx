import Image from "next/image";
import React from "react";
import { BsArrowLeft, BsStarFill } from "react-icons/bs";
import docotor2 from "@assets/available-doctor-2.png";
import docotor1 from "@assets/available-doctor-1.png";
import docotor3 from "@assets/available-doctor-3.png";

const BookAppointmentCards = () => {
  return (
    <section className="flex w-full gap-5 items-center px-4 mb-3 flex-nowrap overflow-y-hidden overflow-x-auto horizontal-overflow">
      <article className="flex flex-col p-4  bg-primary rounded-[10px] text-white relative min-w-[320px] w-[320px] h-[172px] ">
        <h3 className="font-SofiaSans mb-1 text-[36px] tracking-tight  font-medium">
          Book Your Next
        </h3>
        <div className="flex items-center font-SofiaSans rounded-[6px] bg-white w-[160px] max-w-max h-[27.19px]">
          <h3 className=" p-1 text-primary pr-2 font-bold">Appointment</h3>
          <button className="text-white p-1 h-[27.19px] bg-light-primary r rounded-[6px] font-bold">
            Online!
          </button>
        </div>
        <span className="text-white/50 text-small mt-1">
          Book Now and Get 30% OFF
        </span>
        <button className="min-w-[120px] w-[120px] min-h-[30px] flex justify-center items-center text-white bg-orange rounded-[20px] gap-2 mt-4 text-[13px]">
          <span>BOOK NOW</span>
          <BsArrowLeft />
        </button>
        <Image
          src={docotor1}
          className="absolute right-0 bottom-0"
          width={140}
          height={140}
        />
      </article>
      <article className="flex flex-col p-4  bg-fuchsia-500 rounded-[10px] text-white relative min-w-[320px] w-[320px] h-[172px] ">
        <h3 className="font-SofiaSans mb-1 text-[36px] tracking-tight  font-medium">
          Book Your Next
        </h3>
        <div className="flex items-center font-SofiaSans rounded-[6px] bg-white w-[160px] max-w-max h-[27.19px]">
          <h3 className=" p-1 text-black pr-2 font-bold">Appointment</h3>
          <button className="text-white p-1 h-[27.19px] bg-black/70 r rounded-[6px] font-bold">
            Online!
          </button>
        </div>
        <span className="text-white/50 text-small mt-1">
          Book Now and Get 30% OFF
        </span>
        <button className="min-w-[120px] w-[120px] min-h-[30px] flex justify-center items-center text-white bg-black rounded-[20px] gap-2 mt-4 text-[13px]">
          <span>BOOK NOW</span>
          <BsArrowLeft />
        </button>
        <Image
          src={docotor1}
          className="absolute right-0 bottom-0"
          width={140}
          height={140}
        />
      </article>
      <article className="flex items-start justify-start flex-col p-4  bg-light-primary rounded-[10px] text-white relative w-[320px] min-w-[320px] h-[172px] ">
        <h3 className="font-SofiaSans mb-1 text-[36px] tracking-tight text-primary  font-medium">
          Find Your Dental
        </h3>
        <h3 className="  text-white font-SofiaSans pr-2 py-1 font-bold">
          Specialist Doctor
        </h3>
        <div className="flex gap-1 items-center">
          <span className="text-white/70 text-small mt-1">Dr. Samaro</span>
          <button className="flex bg-white rounded-md w-[33px] h-[16px] gap-[2px]  items-center  justify-center">
            <BsStarFill className="fill-orange w-2 h-2" />
            <span className="text-orange text-small leading-[11px]">4.9</span>
          </button>
        </div>

        <button className="min-w-[120px] w-[120px] min-h-[30px] flex justify-center items-center text-white bg-primary rounded-[20px] gap-2 mt-4 text-[13px]">
          <span>BOOK NOW</span>
          <BsArrowLeft />
        </button>
        <Image
          src={docotor3}
          className="absolute right-0 bottom-0"
          width={140}
          height={140}
        />
      </article>
      <article className="flex flex-col p-4  bg-orange rounded-[10px] text-white relative min-w-[320px] w-[320px] h-[172px] ">
        <h3 className="font-SofiaSans mb-1 text-[36px] tracking-tight  font-medium">
          Find the Right
        </h3>
        <div className="flex items-center font-SofiaSans  min-w-[160px]">
          <h3 className=" p-1 rounded-[6px] text-black bg-yellow-300 mr-1 font-bold">
            Doctor for Your
          </h3>
          <button className="text-black  bg-transparent rounded-[6px] font-bold">
            Needs!
          </button>
        </div>
        <span className="text-white/60 text-small mt-1">
          Book Now and Get 30% OFF
        </span>
        <button className="min-w-[120px] w-[120px] min-h-[30px] flex justify-center items-center text-white bg-black rounded-[20px] gap-2 mt-4 text-[13px]">
          <span>BOOK NOW</span>
          <BsArrowLeft />
        </button>
        <Image
          src={docotor2}
          className="absolute right-0 bottom-0"
          width={140}
          height={140}
        />
      </article>
    </section>
  );
};

export default BookAppointmentCards;
