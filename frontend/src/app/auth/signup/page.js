import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { LiaBarsSolid } from "react-icons/lia";
import {
  MdOutlineLock,
  MdOutlineMailOutline,
  MdOutlinePersonAdd,
} from "react-icons/md";
//responsiveness will start soon
const signin = () => {
  return (
    <div className="bg-light min-h-[100vh] pt-[3rem] px-[2rem]">
      <div className="flex flex-row">
        <MdOutlinePersonAdd className="text-[2.5rem] text-primary" />
        <div className="ml-auto">
          <div className="outline outline-1 outline-gray-200 w-[35px] h-[35px] rounded-full flex items-center justify-center bg-white">
            <LiaBarsSolid className="text-dark cursor-pointer text-[1.7rem]" />
          </div>
        </div>
      </div>
      <section className="w-full flex flex-col md:justify-center md:items-center md:max-w-[550px] md:mx-auto">
        <p className="text-[25px] text-dark font-semibold mt-[2.3rem]">
          Getting Started
        </p>
        <p className="text-secondary text-[13px] mt-[1rem]">
          Create an account to continue!
        </p>
        <form className="mt-4 flex flex-col gap-4 w-full">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[13px] text-secondary">
              Email
            </label>
            <div className="w-full bg-white h-[1.2cm] mt-[0.3rem]  rounded-[10px] flex flex-row px-4 py-1 items-center border border-1 border-gray-200">
              <MdOutlineMailOutline className="text-dark font-bold w-6 h-6 " />
              <input
                type="text"
                placeholder="Type your email"
                name="email"
                value="singh@gmail.com"
                className="bg-white px-4   w-full text-[0.4cm] text-dark outline-0  focus:ring-0 focus:outline-0 border-0 focus:border-gray-300 border-gray-300"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-[13px] text-secondary">
              Name
            </label>
            <div className="w-full bg-white h-[1.2cm] mt-[0.3rem]  rounded-[10px] flex flex-row px-4 py-1 items-center border border-1 border-gray-200">
              <BsPersonCircle className="text-dark font-bold w-6 h-6 " />
              <input
                type="text"
                placeholder="Type your email"
                name="name"
                value="Singh"
                className="bg-white px-4   w-full text-[0.4cm] text-dark outline-0  focus:ring-0 focus:outline-0 border-0 focus:border-gray-300 border-gray-300"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-[13px] text-secondary">
              Password
            </label>
            <div className="w-full bg-white h-[1.2cm] mt-[0.3rem]  rounded-[10px] flex flex-row px-4 py-1 items-center border border-1 border-gray-200">
              <MdOutlineLock className="text-dark font-bold w-6 h-6 " />
              <input
                type="text"
                placeholder="Type your password"
                name="password"
                value="*******"
                className="bg-white px-4   w-full text-[0.4cm] text-dark outline-0  focus:ring-0 focus:outline-0 border-0 focus:border-gray-300 border-gray-300"
              />
            </div>
          </div>
          <div className="flex flex-row mt-2 gap-1">
            <input type="checkbox" />
            <p className="text-[13px]">Remember Me</p>
          </div>
          <button className="text-white bg-light-primary h-[3.5rem] w-full rounded-[15px] font-semibold mt-6">
            Create Account
          </button>
        </form>
      </section>
    </div>
  );
};

export default signin;
