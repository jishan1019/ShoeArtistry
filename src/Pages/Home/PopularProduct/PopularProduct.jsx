import React from "react";
import CircelBg from "../../Share/CircelBg/CircelBg";

const PopularProduct = () => {
  return (
    <section className="h-[30vh] md:h-[60vh] relative overflow-hidden">
      <div className="absolute bottom-0 -ml-8 md:-mb-16 -mb-10">
        <CircelBg />
      </div>
      <div className="absolute top-0 right-0 -mr-4 -mt-12 md:-mt-0">
        <CircelBg />
      </div>
    </section>
  );
};

export default PopularProduct;
