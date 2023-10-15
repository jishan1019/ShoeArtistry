import React from "react";
import Hero from "./Hero/Hero";
import PopularProduct from "./PopularProduct/PopularProduct";
import BestProduct from "./BestProduct/BestProduct";

const Home = () => {
  return (
    <div>
      <Hero />
      <PopularProduct />
      <BestProduct />
    </div>
  );
};

export default Home;
