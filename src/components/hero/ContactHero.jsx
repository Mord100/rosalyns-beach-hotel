import React from 'react';

function Hero() {
  return (
    <div className="relative h-[50vh] bg-cover bg-center">
      <div className="absolute inset-0 bg-[#1d1d1b] "></div>
      <div className="relative flex flex-col justify-center items-center h-full text-center text-white">
       
        <h1 className="mt-16 mx-auto text-[#5c5c5a] font-semibold py-2 px-6 rounded-md transition duration-300">
          Contact Us
        </h1>
      </div>
    </div>
  );
}

export default Hero;
