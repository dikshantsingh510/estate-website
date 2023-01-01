import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
const App = () => {
  return (
    <div className="w-full min-h-screen flex justify-center relative bg-gradient-to-bl from-[#572534] to-[#dd8356] lg:via-[#C76B6A] lg:to-[#F49262] overflow-x-hidden">
      <div className=" container m-0">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default App;
