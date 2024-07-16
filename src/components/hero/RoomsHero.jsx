import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaArrowDown } from 'react-icons/fa';

import Hero1 from '../../assets/WhatsApp Image 2024-06-30 at 18.37.56 (1).jpeg';

function Hero() {
  return (
    <div className='relative h-[90vh]'>
      <img src={Hero1} alt="Hero Background" className='absolute inset-0 object-cover w-full h-full' />
      <div className='absolute inset-0 bg-gradient-to-b from-blue-800 to-blue-400 opacity-50'></div>

      <div className='relative z-10 flex flex-col items-start pt-40 h-full md:px-20 p-8'>
        <p className='text-white text-xl md:text-3xl capitalize'>WELCOME TO</p>
        <h1 className='text-white font-serif text-6xl md:text-7xl font-semibold mt-2'>Rosalyn's</h1>
        <h1 className='text-white text-3xl md:text-7xl font-serif font-medium mt-1'>B e a c h H o t e l</h1>
        <p className='text-white text-xl md:text-3xl capitalize'>Experience The Difference.</p>

        <div className='mt-16 mx-auto cursor-pointer bg-[#E0B973] text-white font-semibold py-2 px-6 rounded-md shadow hover:bg-gray-700 transition duration-300'>
          BOOK
        </div>

        <div className='mt-4 cursor-pointer mx-auto pt-8 flex items-center'>
          <FaArrowDown className='text-white text-2xl animate-bounce' />
          <p className='text-white text-md ml-2'>Scroll</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
