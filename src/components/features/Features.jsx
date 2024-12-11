import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import Book1 from '../../assets/WhatsApp Image 2024-10-02 at 09.36.41 (1).jpeg';
import Book2 from '../../assets/WhatsApp Image 2024-10-02 at 09.32.56 (18).jpeg';
import Book3 from '../../assets/WhatsApp Image 2024-10-02 at 09.32.56 (2).jpeg';

// Define animation variants
const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  hover: { scale: 1.05 },
};

const Plan = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <motion.div
        className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl"
        initial="hidden"
        animate="visible"
        variants={textVariant}
      >
        {/* <div className="w-full md:flex md:flex-col-2 gap-4 mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#1d1d1b] sm:text-4xl lg:text-5xl lg:leading-tight">
            Luxury Redefined
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-left text-md text-gray-500">
            At Rosalyn's Beach Hotel, we offer a range of accommodations to suit your needs. From cozy lake-view rooms 
            to spacious suites with private balconies, each of our rooms is designed with comfort and style in mind. 
            Enjoy modern amenities, elegant décor, and the soothing sounds of the lake right outside your window. 
            Wake up to the sunrise over the sea and drift off to sleep with the sound of waves gently lapping at the shore.
          </p>
        </div> */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-x-12">
          {[Book1, Book2,Book3].map((src, index) => (
            <motion.div
              key={index}
              className="w-full rounded-lg"
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={imageVariant}
            >
              <img className="w-full rounded-lg" src={src} alt={`Book ${index + 1}`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 text-center md:mt-16"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <a
            href="#"
            title=""
            className="inline-flex items-center justify-center py-4 font-semibold text-white transition-all duration-200 bg-[#1d1d1b] border px-14 hover:opacity-90"
            role="button"
          >
            Book Now
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Plan;
