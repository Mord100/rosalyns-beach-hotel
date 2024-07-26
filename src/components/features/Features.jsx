import React from 'react';

const Plan = () => {
  return (
    <div className=' m-auto w-full py-16  px-3 md:px-40 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div className='grid rounded-md grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 rounded-md object-cover w-full h-full p-2'
          src='https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80'
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80'
          alt='/'
        />
      </div>
      {/* Right Side */}
      <div className='flex flex-col md:items-start h-full justify-center'>
        <h3 className='text-5xl md:text-6xl text-gray-800 font-serif font-bold'>Luxury Redefined</h3>
        <p className='text-2xl text-gray-700 text-start py-6'>
        Indulge in luxury and comfort with our meticulously designed rooms, offering modern amenities and stunning views to elevate your stay.
        </p>
        <p className='pb-6 text-gray-700 text-start'>
        Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.
        </p>
        <div>
        
          <button className='bg-gray-900 text-white py-2 px-4 rounded-md hover:shadow-xl'>Book</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;