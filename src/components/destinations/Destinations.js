import React from "react";
import { motion } from "framer-motion";
import { FaSwimmer, FaUmbrellaBeach, FaStar, FaGlassMartini } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";

function Destinations() {
  return (
    <div name="destinations" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            className="text-5xl font-semibold text-[#1d1d1b] mb-6 tracking-wide"
          >
            All Inclusive Beach Resort
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8 leading-relaxed"
          >
            Elevate your escape with our curated destinations that blend natural beauty, 
            sophisticated design, and unparalleled hospitality.
          </motion.p>
          
          <motion.div
            className="flex justify-center text-[#D4AF37]"
          >
            <div className="flex gap-2">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} size={28} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Destinations;