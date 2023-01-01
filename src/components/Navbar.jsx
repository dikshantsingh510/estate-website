import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menu = ["Home", "About", "Contact", "Services"];

  return (
    <div className=" h-20 w-full flex justify-between items-center px-2 ">
      {/* logo */}
      <a className="cursor-pointer" link="#">
        <img src={logo} alt="new homes" />
      </a>
      {/*Main Menu for large devices*/}
      <div className="hidden md:block">
        {/* menu */}

        {menu.map((currentValue, index) => {
          return (
            <a
              href="#"
              key={index}
              className="px-6 py-2 rounded-full hover:bg-black hover:bg-opacity-10 text-lg font-normal text-[#F49263] lg:mr-10"
            >
              {currentValue}
            </a>
          );
        })}
        {/* button */}
        <a
          href="#"
          className="px-6 py-2 rounded-full text-lg font-medium text-white bg-[#F49263]  hover:bg-[#d87d53]"
        >
          Sign up
        </a>
      </div>

      
      {/*Main Menu for mobile devices*/}

      <div className="block md:hidden">
        <RiMenu4Fill
          className="text-[#F49263] w-10 h-10"
          onClick={() => {
            setOpenMenu(true);
          }}
        />

        {/* Menu for small devices */}

        <div
          className={`fixed top-0 left-0 h-screen bg-slate-50 flex flex-col items-center justify-center transition-all duration-300 overflow-hidden z-50 ${
            openMenu ? "w-screen  opacity-100" : "w-0 opacity-0"
          } `}
          style={{
            background:
              "linear-gradient(228.32deg, #672C3F 16.3%, #C76B6A 68.23%, #F49262 84.69%)",
          }}
        >
          <RiCloseFill
            className="text-[#F49263] w-10 h-10 absolute right-5 top-5 cursor-pointer"
            onClick={() => {
              setOpenMenu(false);
            }}
          />

          {menu.map((currentValue, index) => {
            return (
              <a
                href="#"
                key={index}
                onClick={() => {
                  setOpenMenu(false);
                }}
                className="px-6 py-2 my-1 rounded-full hover:bg-black hover:bg-opacity-10 text-xl tracking-wider font-normal text-[#F49263] lg:mr-10"
              >
                {currentValue}
              </a>
            );
          })}
          <a
            href="#"
            className="px-10 py-2 my-2 rounded-full text-lg font-medium text-white bg-[#F49263] hover:bg-[#d87d53]"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
