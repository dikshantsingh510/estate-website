import React from "react";
import heroImage from "../assets/heroImage.png";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const HeroSection = () => {
  return (
    <div className=" w-full flex justify-between flex-col lg:flex-row mt-5">
      {/* Hero image */}
      <div className="w-full lg:w-[50%] xl:w-[45%] grid items-center  ">
        <img src={heroImage} alt="hero image" className="" />
      </div>

      {/* Hero text content */}
      <div className="w-full lg:w-[50%] h-full ">
        <h1 className="text-5xl px-5 xl:px-2 md:text-6xl 2xl:text-7xl font-black text-[#F49263] mt-10">
          Find your dream home today!
        </h1>
        <p className="text-[#F49263] text-lg 2xl:text-2xl px-5 xl:px-2 opacity-90  my-10">
          Your one-stop shop for all your real estate needs. Our team of
          experienced agents is dedicated to helping you find the perfect home
          or investment property. With a wide range of properties available, we
          are confident we can help you find the right fit. Let us help you make
          your real estate dreams a reality.
        </p>
        <a
          href="#"
          className="mx-5 xl:mx-2 px-16 py-2 rounded-full text-lg 2xl:text-lg font-medium text-white bg-[#F49263] hover:bg-[#d87d53] bg-opacity-50 border-4 border-[#F49263]"
        >
          Explore!
        </a>
        <div className=" flex my-10 mx-10">
          <BsFacebook className="text-[#F49263] text-2xl 2xl:text-3xl mx-2 2xl:mx-3" />
          <BsTwitter className="text-[#F49263] text-2xl 2xl:text-3xl mx-2 2xl:mx-3" />
          <AiFillInstagram className="text-[#F49263] text-2xl 2xl:text-3xl mx-2 2xl:mx-3" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
