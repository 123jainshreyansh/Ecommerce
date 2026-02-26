import React from 'react'
import Title from './Title.jsx'
import { RiExchange2Fill } from "react-icons/ri";
import { CiDiscount1 } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";

function OurPolicy() {
  return (
    <div className="w-screen h-[100vw] md:h-[70vh] flex items-center justify-start flex-col bg-linear-to-r from-[#141414] to-[#0c2025] gap-12.5">
      <div className="h-[8%] w-full text-center mt-17.5">
        <Title text1={"OUR"} text2={"POLICY"} />
        <p className="w-full m-auto text-[13px] md:text-[20px] px-2.5 text-blue-100">
          Customer-Friendly - Commited to Your Satisfaction and Safety.
        </p>
      </div>
      <div className="w-full md:min-h-[50%] h-[20%] flex items-center flex-wrap lg:gap-12.5 gap-20">
        <div className="w-100 max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-2.5">
          <RiExchange2Fill className="md:w-15 w-7.5 h-7.5 md:h-15 text-[#90b9ff]" />
          <p className="font-semibold md:text-[25px] text-[19px] text-[#a5e8f7]">
            Easy Exchange Policy
          </p>
          <p className="font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center">
            Exchange Made Easy - Quick, Simple, and Customer-Friendly
            Process.{" "}
          </p>
        </div>

        <div className="w-100 max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-2.5">
          <CiDiscount1 className="md:w-15 w-7.5 h-7.5 md:h-15 text-[#90b9ff]" />
          <p className="font-semibold md:text-[25px] text-[19px] text-[#a5e8f7]">
            7 Days Return Policy
          </p>
          <p className="font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center">
            Shop with Confidence - Hassle-Free Returns within 7 Days for Your
            Satisfaction.
          </p>
        </div>

        <div className="w-100 max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-2.5">
          <MdSupportAgent className="md:w-15 w-7.5 h-7.5 md:h-15 text-[#90b9ff]" />
          <p className="font-semibold md:text-[25px] text-[19px] text-[#a5e8f7]">
            Best Customer Support
          </p>
          <p className="font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center">
            Trusted Support - Here to Help You Every Step of the Way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurPolicy