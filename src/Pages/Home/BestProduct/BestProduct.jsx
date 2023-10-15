import React from "react";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import icon from "../../../assets/fabicon.png";
import CircelBg from "../../Share/CircelBg/CircelBg";

const BestProduct = () => {
  return (
    <section className="bg-white md:-mt-8 flex justify-between items-center flex-col md:flex-row md:pr-12 px-4 py-8">
      <div className="w-full md:w-1/2 relative">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-[#5FB9EB] h-56 w-56 md:h-80 md:w-80 p-6 rounded-full  overflow-hidden ">
            <div className=" rounded-full h-full bg-[#73C2ED] "></div>
          </div>
        </div>

        <div className="relative">
          <img
            className="mx-auto md:h-[77vh] ml-8 mt-4 md:ml-20 md:pt-8"
            src="https://i.ibb.co/0QkSN09/best-show-removebg-preview.png"
            alt=""
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 mx-auto">
        <h1>New Arrival Running shoes for the men and women</h1>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          aspernatur harum omnis pariatur nostrum ipsam tenetur sequi reiciendis
          nesciunt corporis est laboriosam asperiores iste quasi maxime delectus
          alias, consequuntur itaque.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusamus
          iste reprehenderit fugit hic iusto, fuga quis maiores velit incidunt
          non consequatur, quisquam consequuntur sed libero minima doloribus
          possimus nihil.
        </p>

        <h1>Read More </h1>
      </div>
    </section>
  );
};

export default BestProduct;
