import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaAddressBook } from "react-icons/fa";

import Hero1 from "../../assets/WhatsApp Image 2024-10-02 at 09.32.56 (7).jpeg";

function Hero() {
  return (
    <div className="relative h-[90vh]">
      <img
        src={Hero1}
        alt="Hero Background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#E0B973] to-gray-800 opacity-60"></div>

      <div className="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-start px-6 md:px-20 lg:px-32">
        <div className="text-white max-w-xl space-y-6">
          <h1 className="text-7xl md:text-7xl lg:text-8xl font-thin font-serif tracking-wide">
            Rosalyn's
          </h1>
          <h2 className="text-5xl md:text-5xl lg:text-6xl font-light font-serif tracking-wider">
            Beach Hotel
          </h2>
          <p className="text-base md:text-lg font-light tracking-wide text-white/90 opacity-90">
            Experience the difference.
          </p>
          
          <div className="flex space-x-4 pt-6">
            <a 
              href="/facilities" 
              className="group flex items-center gap-3 
                px-8 py-3.5 border border-white/30 
                bg-transparent text-white 
                font-light tracking-wider 
                hover:bg-white/10 backdrop-blur-sm 
                transition duration-300 ease-in-out 
                rounded-sm"
            >
              <FaHotel className="w-5 h-5 group-hover:animate-pulse" /> 
              Book
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
