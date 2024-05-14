import React from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col pt-[6rem]">
      <div className="bg-[#1f252a] flex justify-center items-center p-4">
        <div className="text-white text-center">
          <div className="font-bold text-7xl py-3">Welcome Lifestylers.</div>
          <div className="w-[20rem] md:w-[30rem]   lg:w-[40rem] py-4 text-2xl">
            Dive into a vibrant tapestry of lifestyle tips, trends, and
            experiences.
          </div>
          <div className="flex justify-center items-center space-x-4 pt-4"></div>
        </div>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default Home;
