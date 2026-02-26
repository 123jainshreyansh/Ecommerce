import React from 'react'
import logo from "../assets/vcart logo.png"

function Footer() {
  return (
    <div className="w-full md:h-[36vh] h-[21vh] mb-19.25 md:mb-0">
      <div className="w-full md:h-[30vh] h-[15vh] md:mb-0 bg-[#dbfcfcec] flex items-center justify-center md:px-12.5 px-1.25">
        <div className="md:w-[30%] w-[35%] h-full  justify-center flex-col gap-1.25">
          <div className="flex items-start justify-start gap-1.25 mt-2.5 md:mt-10">
            <img
              src={logo}
              alt="Logo"
              className="md:w-10 md:h-10 w-7.5 h-7.5 flex"
            />
          </div>
          <p className="text-[19px] md:text-[20px] flex text-black">OneCart</p>
          <p className="text-[15px] text-[#1e2223] hidden md:block">
            OneCart is your all-in-one online shopping destination, offering
            top-quality products, unbeatable deals, and fast delievery-all
            backed by trusted service designed to make your life easier every
            day.
          </p>
          <p className="text-[15px] text-[#1e2223] flex md:hidden">
            Fast. Easy. Reliable. OneCart Shopping
          </p>
        </div>
        <div className="md:w-[25%] w-[30%] h-full flex items-center flex-col text-center ">
          <div className="flex items-center justify-center gap-1.25 mt-2.5 md:mt-10">
            <p className="text-[19px] md:text-[20px] text-[#1e2223] font-sans">
              COMPANY
            </p>
          </div>
          <ul>
            <li className="text-[15px] text-[#1e2223] hidden md:block cursor-pointer">
              Home
            </li>
            <li className="text-[15px] text-[#1e2223] cursor-pointer">
              About Us
            </li>
            <li className="text-[15px] text-[#1e2223] hidden md:block cursor-pointer">
              Delievery
            </li>
            <li className="text-[15px] text-[#1e2223] cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="md:w-[25%] w-[40%] h-full flex items-center justify-center flex-col text-center">
          <div className="flex items-center justify-center gap-1.25 mt-2.5 md:mt-10">
            <p className="text-[19px] md:text-[20px] text-[#1e2223] font-sans">
              GET IN TOUCH
            </p>
          </div>
          <ul>
            <li className="text-[15px] text-[#1e2223] hidden md:block cursor-pointer">
              +91-9876543210
            </li>
            <li className="text-[15px] text-[#1e2223] cursor-pointer">
              contact@onecart.com
            </li>
            <li className="text-[15px] text-[#1e2223] hidden md:block cursor-pointer">
              +1-123-456-7890
            </li>
            <li className="text-[15px] text-[#1e2223] cursor-pointer">
              admin@onecart.com
            </li>
          </ul>
        </div>
      </div>
      <div className='w-full h-px bg-slate-400'> </div>
      <div className='w-full h-[5vh] bg-[#dbfcfcec] flex items-center justify-center '>Copyright 2025@onecart.com-All Rights Reserved</div>
    </div>
  );
}

export default Footer