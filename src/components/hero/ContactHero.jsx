import React from 'react';

function Hero() {
  return (
    <div className="relative h-[50vh] bg-cover bg-center">
      <div className="absolute inset-0 bg-gray-800 "></div>
      <div className="relative flex flex-col justify-center items-center h-full text-center text-white">
       
        <h1 className="mt-16 mx-auto text-white font-semibold py-2 px-6 rounded-md shadow transition duration-300">
          Contact Us
        </h1>
      </div>
    </div>
  );
}

export default Hero;
