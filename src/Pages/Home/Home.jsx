import React from "react";
import Hero from "./Hero/Hero";
import PopularProduct from "./PopularProduct/PopularProduct";
import BestProduct from "./BestProduct/BestProduct";
import HappyCustomer from "./HappyCustomer/HappyCustomer";

const Home = () => {
  return (
    <div>
      <Hero />
      <PopularProduct />
      <BestProduct />
      <HappyCustomer />
    </div>
  );
};

export default Home;
