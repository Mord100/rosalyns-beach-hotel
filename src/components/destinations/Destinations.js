import React from "react";
import { motion } from "framer-motion";
import "./DestinationsStyles.css";
import Image1 from "../../assets/WhatsApp Image 2024-10-02 at 09.32.56 (11).jpeg";
import Image2 from "../../assets/WhatsApp Image 2024-10-02 at 10.01.01.jpeg";
import Image3 from "../../assets/WhatsApp Image 2024-10-02 at 10.05.16.jpeg";
import Image4 from "../../assets/WhatsApp Image 2024-10-02 at 09.32.56 (16).jpeg";
import Image5 from "../../assets/WhatsApp Image 2024-10-02 at 09.32.56 (26).jpeg";
import { MdOutlineStarPurple500 } from "react-icons/md";

function Destinations() {
  // Animation variants for the sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div name="destinations" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-[#1d1d1b] mb-6"
          >
            All Inclusive Resort
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-8">
            Discover the perfect blend of relaxation and luxury at Rosalyn's
            Beach Hotel. Located on the stunning coastline, our hotel offers
            breathtaking lake views, comfortable accommodations, and
            unparalleled service.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex justify-center text-[#E0B973] mb-8"
          >
            <div className="flex gap-2">
              <MdOutlineStarPurple500 size={24} />
              <MdOutlineStarPurple500 size={24} />
              <MdOutlineStarPurple500 size={24} />
              <MdOutlineStarPurple500 size={24} />
              <MdOutlineStarPurple500 size={24} />
            </div>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600">
            Whether you're here to unwind, explore, or celebrate, Rosalyn's
            Beach Hotel is your gateway to an unforgettable beachside
            experience.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* <motion.div
            variants={fadeInUp}
            className="col-span-1 md:col-span-2 bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <a href="" className="group block relative h-96">
              <img
                src={Image1}
                alt="Wines"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
              <h3 className="absolute bottom-6 left-6 text-3xl font-semibold text-white">
                Wines
              </h3>
            </a>
          </motion.div> */}
          {/* <motion.div variants={fadeInUp} className="col-span-1 space-y-8">
            <a
              href=""
              className="group block relative h-44 bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={Image2}
                alt="Boardroom"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
              <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
                Boardroom
              </h3>
            </a>
            <div className="grid grid-cols-2 gap-8">
              <motion.a
                variants={fadeInUp}
                href=""
                className="group block relative h-44 bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={Image3}
                  alt="Coffee"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                  Coffee
                </h3>
              </motion.a>
              <motion.a
                variants={fadeInUp}
                href=""
                className="group block relative h-44 bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={Image4}
                  alt="Views"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                  Views
                </h3>
              </motion.a>
            </div>
          </motion.div> */}
          {/* <motion.div
            variants={fadeInUp}
            className="col-span-1 md:col-span-3 bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <a href="" className="group block relative h-96">
              <img
                src={Image5}
                alt="Quality Time"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
              <h3 className="absolute bottom-6 left-6 text-3xl font-semibold text-white">
                Quality Time
              </h3>
            </a>
          </motion.div> */}
        </motion.div>
      </div>
    </div>
  );
}

export default Destinations;
