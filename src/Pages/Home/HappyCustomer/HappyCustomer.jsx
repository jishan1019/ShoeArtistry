import React from "react";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";

const HappyCustomer = () => {
  return (
    <div className="bg-[#F9F8FF] pt-6 pb-16 px-4 md:px-16">
      {/* Section Titel */}
      <SectionTitle titel="HAPPY CUSTOMER" />

      {/* Review Card */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="shadow-md p-3 mb-5 md:mb-0 bg-white rounded-md space-y-2">
          <div className="flex justify-start items-center gap-4">
            <div>
              <img
                className="w-16 h-16 rounded-full"
                src="https://i.ibb.co/jwbqDXs/man1.jpg"
                alt=""
              />
            </div>
            <div>
              <h2 className="font-bold">Kim Jhon</h2>
              <p className="text_primary text-sm">CEO of Rubby</p>
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
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
            </div>
          </div>

          <div>
            <p>
              These shoes are a pleasant surprise! They combine style and
              comfort effortlessly. I wear them to work, and my feet stay
              comfortable all day. The price is unbeatable for the quality and
              durability they offer. A fantastic value
            </p>
          </div>
        </div>

        {/* Card 1 */}
        <div className="shadow-2xl space-y-2 -mt-4 mb-4 p-3 bg-white rounded-md">
          <div className="flex justify-start items-center gap-4">
            <div>
              <img
                className="w-16 h-16 rounded-full"
                src="https://i.ibb.co/mH4FYy0/man3.jpg"
                alt=""
              />
            </div>
            <div>
              <h2 className="font-bold">Sohan Hossain</h2>
              <p className="text_primary text-sm">Founder Of MicroPie</p>
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
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
            </div>
          </div>

          <div>
            <p>
              I can't believe the value I got with these shoes. They look sleek
              and are incredibly comfortable. I've received compliments on the
              design. The price is a steal, especially given their all-day
              comfort. Highly recommended
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="shadow-md space-y-2 p-3 bg-white rounded-md">
          <div className="flex justify-start items-center gap-4">
            <div>
              <img
                className="w-16 h-16 rounded-full"
                src="https://i.ibb.co/bzM0J5m/man2.jpg"
                alt=""
              />
            </div>
            <div>
              <h2 className="font-bold">Sakib Al Hasan</h2>
              <p className="text_primary text-sm">CEO of BigBoss</p>
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
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
            </div>
          </div>

          <div>
            <p>
              Affordable yet stylish, these shoes are a great addition to my
              wardrobe. They offer good arch support, and the cushioning is
              top-notch. Whether for work or casual wear, they don't disappoint.
              A great deal!"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HappyCustomer;
