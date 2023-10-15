import React from "react";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";

const Subscribe = () => {
  return (
    <div className="pt-8 pb-12 bg-white">
      <SectionTitle titel="Subscribe" />

      <div className="shadow-md rounded-l-2xl -mt-8 mb-10 border py-5 mx-4 md:mx-28 ">
        <div className="flex justify-center items-center mx-4">
          <input
            className="border-2 border-[#4AAEE9] w-full md:w-[40%] px-3 py-2 rounded-l-md"
            type="email"
            name=""
            id=""
            placeholder="Enter your email address"
          />

          <button className="primary_bg hover:bg-[#73C2ED] ease-out text-white px-12 pt-[9.5px] pb-[10px]">
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
