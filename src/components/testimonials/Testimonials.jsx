import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdArrowBackIos } from "react-icons/md";
import { MdOutlineArrowRight, MdArrowForwardIos } from "react-icons/md";

const testimonialsData = [
  {
    review: "This beach hotel was an absolute paradise! The service was exceptional and the views were breathtaking. Highly recommend!",
    name: "John Doe",
    location: "Blantyre, Malawi"
  },
  {
    review: "A truly magical experience. The facilities were top-notch and the staff went above and beyond to make our stay memorable.",
    name: "Jane Smith",
    location: "London, UK"
  },
  {
    review: "Perfect getaway! The beach was pristine and the food was delicious. Can't wait to come back!",
    name: "Carlos Gonzalez",
    location: "Barcelona, Spain"
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className=" py-12 px-4">
      <div className="max-w-3xl mx-auto  p-8 text-center">
        <p className="text-xl font-semibold  text-gray-600 mb-4">"{testimonialsData[currentIndex].review}"</p>
        <p className="text-lg font-semibold text-gray-800">{testimonialsData[currentIndex].name}</p>
        <p className="text-sm text-gray-500">{testimonialsData[currentIndex].location}</p>
        <div className="flex justify-center mt-6">
          <div 
            className="bg-[#E0B973] text-white p-2 rounded mx-1" 
            onClick={handlePrevious}
          >
            <MdArrowBackIos className='pl-0.5' />
          </div>
          <div
            className="bg-[#E0B973] text-white p-2 rounded mx-1" 
            onClick={handleNext}
          >
            <MdArrowForwardIos />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
