import React from "react";
import Amazing from "./Amazing/Amazing";
import Big_book from "./Big-book-photo/Big_book";
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
      <Big_book />
    </>
  );
};

export default Home;
