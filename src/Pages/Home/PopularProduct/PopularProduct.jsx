import React from "react";
import CircelBg from "../../Share/CircelBg/CircelBg";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const PopularProduct = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="pb-28 bg-[#F9F8FF] pt-28 relative overflow-hidden">
      <div>
        <div className="absolute bottom-0 -ml-12 md:-mb-16 -mb-10">
          <CircelBg />
        </div>
        <div className="absolute top-0 right-0 -mr-4 -mt-16 md:-mt-12 md:-mr-8">
          <CircelBg />
        </div>
      </div>

      {/* Card */}
      <div className="flex justify-center items-center relative gap-40 mx-2 h-full">
        <div className="text-[#0380C0]">
          <BsFillArrowLeftCircleFill className="h-10 w-10" />
        </div>

        {/* Card Container */}
        <div className="w-full max-w-screen-md ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1*/}
            <div className="shadow-md mb-10 md:mb-0 p-4 bg-white rounded-md">
              <div>
                <img
                  className="h-28 mx-auto"
                  src="https://i.ibb.co/VL5B1gD/images-1.jpg"
                  alt=""
                />
              </div>

              <div className="text-center mt-3">
                <h3 className="font-semibold text_primary">Running</h3>
                <h1 className="font-bold text-lg">Nice A4 Shoe</h1>
                <h1 className="font-bold text-2xl">115$</h1>

                {/* Card Rating */}
                <div className="flex justify-center items-center mt-2 gap-2">
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>

                  <p className="text-xs">4.8</p>
                  <p className="text-xs">12 Review</p>
                </div>

                <div className=" mt-4 ">
                  <button className="px-3 shadow border text-xs md:px-5 py-2 md:py-3 rounded-full border-[#4AAEE9] text-[#4AAEE9]">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2*/}
            <div className="shadow-2xl mb-6 -mt-6 p-4 bg-white rounded-md">
              <div>
                <img
                  className="h-28"
                  src="https://i.ibb.co/27M9fwt/download.jpg"
                  alt=""
                />
              </div>

              <div className="text-center mt-3">
                <h3 className="font-semibold text_primary">Running</h3>
                <h1 className="font-bold text-lg">Nike CR7 Shoe</h1>
                <h1 className="font-bold text-2xl">130$</h1>

                {/* Card Rating */}
                <div className="flex justify-center items-center mt-2 gap-2">
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>

                  <p className="text-xs">5.0</p>
                  <p className="text-xs">25 Review</p>
                </div>

                <div className=" mt-4 ">
                  <button className="px-3 shadow-lg text-xs md:px-5 py-2 md:py-3 rounded-full primary_bg text-white">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3*/}
            <div className="shadow-md p-4 bg-white rounded-md">
              <div>
                <img
                  className="h-28 mx-auto"
                  src="https://i.ibb.co/nj74rdM/s-l1200.jpg"
                  alt=""
                />
              </div>

              <div className="text-center mt-3">
                <h3 className="font-semibold text_primary">Running</h3>
                <h1 className="font-bold text-lg">Nike BW6 Shoe</h1>
                <h1 className="font-bold text-2xl">108$</h1>

                {/* Card Rating */}
                <div className="flex justify-center items-center mt-2 gap-2">
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>

                  <p className="text-xs">4.8</p>
                  <p className="text-xs">12 Review</p>
                </div>

                <div className=" mt-4 ">
                  <button className="px-3 shadow text-xs md:px-5 py-2 md:py-3 rounded-full border border-[#4AAEE9] text-[#4AAEE9]">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[#0380C0]">
          <BsFillArrowRightCircleFill className="h-10 w-10" />
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;
