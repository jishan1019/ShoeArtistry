import React from "react";
import Hero from "./Hero/Hero";
import PopularProduct from "./PopularProduct/PopularProduct";
import BestProduct from "./BestProduct/BestProduct";
import HappyCustomer from "./HappyCustomer/HappyCustomer";
import Subscribe from "./Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Hero />
      <PopularProduct />
      <BestProduct />
      <HappyCustomer />
      <Subscribe />
    </div>
  );
};

export default Home;
