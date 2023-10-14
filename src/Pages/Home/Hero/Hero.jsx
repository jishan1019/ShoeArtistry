import React from "react";
import nike from "../../../assets/nike.png";

const Hero = () => {
  return (
    <section className="bg-white min-h-[25vh] md:min-h-[65vh] flex md:justify-between items-center">
      {/* Shoee Details */}
      <div className="w-1/2 h-[25vh] md:h-[60vh] pl-4 md:pl-9 ">
        <div className="mt-4 md:-mt-2">
          <img className="w-10 md:w-20" src={nike} alt="" />
        </div>
        <div className="md:text-5xl -mt-3 font-bold">
          <h1>NIKE</h1>
          <h1>SNKER SHOES</h1>
          <h1 className="  hidden md:block  rounded-md w-1/2 md:w-[20%] pb-1 mt-2  text_primary ">
            2023
          </h1>
        </div>

        <div>
          <p className="md:w-[40%] text-[9px] md:text-xs font-semibold mt-1 md:mt-4 break-words">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
            maiores dolores asperiores nam
          </p>
        </div>

        <div className=" mt-4 ">
          <button className="px-3 shadow-lg text-xs md:px-5 py-2 md:py-3 rounded-full primary_bg text-white">
            Shop Now
          </button>
        </div>

        <div className="flex justify-start gap-2 items-center text-sm mt-8">
          <div className="text-center p-2 shadow-lg rounded-md ">
            <h2 className="font-bold text_primary text-lg">20K</h2>
            <p className="font-semibold">Orders Complite</p>
          </div>
          <div className="text-center p-2 shadow-lg rounded-md">
            <h2 className="font-bold text_primary text-lg">40K</h2>
            <p className="font-semibold">Regular Visitor</p>
          </div>
          <div className="text-center p-2 shadow-lg rounded-md">
            <h2 className="font-bold text_primary text-lg">15K</h2>
            <p className="font-semibold">Happy Coustomer</p>
          </div>
        </div>
      </div>

      {/* Shoee Image */}
      <div className="w-1/2 h-[25vh] md:h-[60vh] pl-4 md:pl-9"></div>
    </section>
  );
};

export default Hero;
