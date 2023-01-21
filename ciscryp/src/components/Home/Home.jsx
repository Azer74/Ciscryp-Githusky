import React from "react";
import Amazing from "./Amazing/Amazing";
import BigBook from "./Big-book-photo/BigBook";
import Creators from "./Creators/Creators";
import Discover from "./Discover/Discover";
import Featured from "./Featured/Featured";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <>
      <Discover />
      <Amazing />
      <Creators />
      <Slider />
      <Featured />
      <BigBook />
    </>
  );
};

export default Home;
