import React, { useState, useEffect } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

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
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handlePrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-source font-semibold text-gray-800 mb-12">Testimonials</h2>
        <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <p className="text-xl text-gray-700 mb-6">"{testimonialsData[currentIndex].review}"</p>
          <p className="text-lg font-light text-gray-600">{testimonialsData[currentIndex].name}</p>
          <p className="text-sm text-gray-500">{testimonialsData[currentIndex].location}</p>
        </div>
        <div className="flex justify-center mt-8">
          <button 
            className="text-gray-400 p-2 mx-2 hover:text-gray-600 transition-colors duration-300" 
            onClick={handlePrevious}
            aria-label="Previous testimonial"
          >
            <MdArrowBackIos className='text-2xl' />
          </button>
          <button
            className="text-gray-400 p-2 mx-2 hover:text-gray-600 transition-colors duration-300" 
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <MdArrowForwardIos className='text-2xl' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
