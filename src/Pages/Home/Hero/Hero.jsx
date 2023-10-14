import React from "react";
import nike from "../../../assets/nike.png";

const Hero = () => {
  return (
    <section className="bg-white min-h-[25vh] md:min-h-[65vh] flex md:justify-between items-center">
      {/* Shoee Details */}
      <div className="w-1/2 h-[26vh] md:h-[60vh] pl-4 md:pl-12 ">
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

        <div className="md:flex justify-start gap-2 items-center text-sm mt-8 hidden">
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
      <div className="w-1/2 h-[25vh] md:h-[60vh] relative pr-0 md:pr-16">
        <div>
          <div className="w-[60%] rounded-b-lg h-[6vh] mt-1 md:h-[16vh] shadow-lg mx-auto primary_bg  overflow-hidden"></div>

          <div className="w-[60%] rounded-t-lg mb-1 h-[17vh] md:h-[41vh] shadow-lg mt-3 md:mt-8 mx-auto bg-gradient-to-b from-cyan-500 to-[#037abe] relative overflow-hidden grid place-items-center">
            <p
              className="text-4xl md:text-9xl absolute font-bold"
              style={{
                WebkitTextStroke: "2px white",
                color: "transparent",
              }}
            >
              NIKE
            </p>
          </div>
        </div>

        <div className="absolute top-0 right-1 flex flex-col items-center justify-center h-full md:mr-4">
          <p className="rounded-full p-2 bg-red-400"></p>
          <p className="rounded-full p-2 mt-2 bg-blue-400"></p>
          <p className="rounded-full p-2 mt-2 bg-yellow-500"></p>
          <p className="rounded-full p-2 mt-2 bg-blue-700"></p>
          <p className="rounded-full p-2 mt-2 bg-black"></p>
        </div>

        <div className="absolute top-8 pr-4 md:pr-16 md:ml-16 ">
          <img
            className="md:h-[56vh]"
            src="https://demo.joomlabuff.com/shoeland/images/joomlabuff/intro-red-shoe.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
