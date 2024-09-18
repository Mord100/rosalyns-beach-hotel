import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaArrowDown } from 'react-icons/fa';
import { FaHotel } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaAddressBook } from "react-icons/fa";



import Hero1 from '../../assets/DSC05145.jpg';

function Hero() {
  return (
    <div className='relative h-[90vh]'>
      <img src={Hero1} alt="Hero Background" className='absolute inset-0 object-cover w-full h-full' />
      <div className='absolute inset-0 bg-gradient-to-r from-[#E0B973] to-gray-800 opacity-60'></div>

      <div className='relative z-10 flex flex-col items-start pt-[12rem] h-full md:px-20 p-8'>
        <p className='text-white text-xl md:text-3xl font-poppins capitalize'>WELCOME TO</p>
        <h1 className='text-white font-source text-6xl md:text-7xl font-semibold mt-2'>Rosalyn's</h1>
        <h1 className='text-white text-3xl md:text-7xl font-source font-medium mt-1'>B e a c h H o t e l</h1>
        <div className='px-8 py-1 bg-white'></div>
        <p className='text-white md:text-xl font-poppins text-md capitalize'>Experience The Difference.</p>

        <div className='mt-16 gap-2 mx-auto flex cursor-pointer bg-[#E0B973] text-white font-semibold py-2 px-6 shadow hover:bg-[#1d1d1b] transition duration-300'>
         < FaAddressBook size={20} /> Book
        </div>
      </div>
    </div>
  );
}

export default Hero;
