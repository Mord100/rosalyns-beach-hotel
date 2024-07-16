
import React from 'react';
import { FaSwimmingPool, FaUmbrellaBeach, FaCocktail, FaConciergeBell, FaSpa, FaWifi } from 'react-icons/fa';

const facilities = [
  { icon: FaSwimmingPool, label: 'Swimming Pool' },
  { icon: FaUmbrellaBeach, label: 'Beach Access' },
  { icon: FaCocktail, label: 'Bar' },
  { icon: FaConciergeBell, label: 'Concierge' },
  { icon: FaSpa, label: 'Spa' },
  { icon: FaWifi, label: 'Free WiFi' },
];

export default function Example() {
  return (
    <div className="bg-white p-10 rounded-md shadow-md overflow-hidden">
      <div className="slider mt-4">
        <div className="slide-track">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <div key={index} className="slide flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors duration-300">
                <IconComponent size={48} className="mb-4" />
                <p className="text-lg font-semibold">{facility.label}</p>
              </div>
            );
          })}
          {/* Duplicate facilities for seamless looping */}
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <div key={index + facilities.length} className="slide flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors duration-300">
                <IconComponent size={48} className="mb-4" />
                <p className="text-lg font-semibold">{facility.label}</p>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .slider {
          width: 100%;
          overflow: hidden;
        }
        .slide-track {
          display: flex;
          width: calc(200px * ${facilities.length} * 2); /* (width of each slide) * (number of slides) * 2 (for duplication) */
          animation: scroll 20s linear infinite;
        }
        .slide {
          min-width: 200px;
          padding: 0 10px;
          box-sizing: border-box;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-200px * ${facilities.length})); /* Negative of (width of each slide * number of slides) */
          }
        }
      `}</style>
    </div>
  );
}
