import React from 'react'
import Title from '../component/Title.jsx'
import NewLetterBox from '../component/NewLetterBox.jsx';

function About() {
  return (
    <div className="w-[96vw] md:w-[100vw] min-h-screen flex items-center justify-center flex-col bg-gradient-to-r from-[#141414] to-[#0c2025] gap-12.5 pt-20">
      <Title text1={"ABOUT"} text2={"US"} />
      <div className="w-full flex items-center justify-center flex-col lg:flex-row">
        <div className="lg:w-[50%] w-full flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/5239067/pexels-photo-5239067.jpeg"
            alt=""
            className="lg:w-[65%] w-[80%] shadow-md shadow-black rounded-sm"
          />
        </div>
        <div className="lg:w-[50%] w-[80%] flex items-start justify-center gap-5 flex-col mt-5 lg:mt-0">
          <p className="lg:w-[80%] w-full text-[white] md:text-[16px] text-[13px]">
            OneCart born for smart, seamless shopping-created to deliever
            quality products, trending styles, and everyday essential in one
            place. With reliable service and competitive prices, we make
            shopping easy and enjoyable for everyone.
          </p>
          <p className="lg:w-[80%] w-full text-[white] md:text-[16px] text-[13px]">
            modern shoppers-combining style, convenience, and affordability .
            Whether it's fashion, essentials, or trends, we bring everything you
            need to one trusted platform with fast delievery , easy returns and
            secure payment options.
          </p>
          <p className="lg:w-[80%] w-full text-[15px] text-[white] lg:text-[18px] mt-2.5 font-bold">
            Our Mission
          </p>
          <p className="lg:w-[80%] w-full text-white md:text-[16px] text-[13px]">
            Our mission is to redefine online shopping by delievering quality,
            affordability, and convenience. OneCart connects customers with
            trusted products and brand, offering a seamless, customer-focused
            experience that saves time, adds value, fits every lifestyle and
            need.
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center flex-col gap-2.5">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
        <div className="w-[80%] flex items-center justify-center lg:flex-row flex-col py-10">
          <div className="lg:w-[33%] w-[90%] h-62.5 border border-gray-100 flex items-center justify-center gap-5 flex-col px-10 py-2.5 text-[white] backdrop-blur-[2px] bg-[#ffffff0b]">
            <b className="text-[20px] font-semibold text-[#bff1f9]">
              Quality Assurance
            </b>
            <p>
              We guarantee quality through strict checks, reliable sourcing, and
              a commitment to customer satisfaction always.{" "}
            </p>
          </div>

          <div className="lg:w-[33%] w-[90%] h-62.5 border border-gray-100 flex items-center justify-center gap-5 flex-col px-10 py-2.5 text-[white] backdrop-blur-[2px] bg-[#ffffff0b]">
            <b className="text-[20px] font-semibold text-[#bff1f9]">
              Convenience
            </b>
            <p>
              Shop easily with fast delievery, simple navigation, secure checkout, and everything you need in one place {" "}
            </p>
          </div>

          <div className="lg:w-[33%] w-[90%] h-62.5 border border-gray-100 flex items-center justify-center gap-5 flex-col px-10 py-2.5 text-[white] backdrop-blur-[2px] bg-[#ffffff0b]">
            <b className="text-[20px] font-semibold text-[#bff1f9]">
              Exceptional Customer Service
            </b>
            <p>
              Our dedicated support team ensures quick responses, helpful solutions, and a smooth shooping experience every time{" "}
            </p>
          </div>
        </div>
      </div>
      <NewLetterBox/>
    </div>
  );
}

export default About