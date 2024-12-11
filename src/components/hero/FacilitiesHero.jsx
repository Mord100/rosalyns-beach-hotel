import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaArrowDown } from 'react-icons/fa';
import { FaHotel } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaAddressBook } from "react-icons/fa";



import Hero1 from '../../assets/WhatsApp Image 2024-10-02 at 09.32.56 (13).jpeg';

function Hero() {
  return (
    <div className='relative h-[90vh]'>
      <img src={Hero1} alt="Hero Background" className='absolute inset-0 object-cover w-full h-full' />
      <div className='absolute inset-0 bg-gradient-to-r from-[#E0B973] to-gray-800 opacity-60'></div>

      <div className='relative z-10 flex flex-col items-start pt-[12rem] h-full md:px-20 lg:px-32 p-8'>
      <h1 className="text-7xl md:text-7xl text-white lg:text-8xl font-thin font-serif tracking-wide">
            Rosalyn's
          </h1>
          <h2 className="text-5xl md:text-5xl text-white lg:text-6xl font-light font-serif tracking-wider">
            Beach Hotel
          </h2>
          <p className="text-base md:text-lg font-light tracking-wide text-white/90 opacity-90">
            Experience the difference.
          </p>

        <div className='mt-16 gap-2 mx-auto flex cursor-pointer bg-[#E0B973] text-white font-semibold py-2 px-6 shadow hover:bg-[#1d1d1b] transition duration-300'>
         < FaAddressBook size={20} /> Book
        </div>
      </div>
    </div>
  );
}

export default Hero;
