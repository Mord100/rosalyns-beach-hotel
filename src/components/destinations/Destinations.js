import React from "react";
import { motion } from "framer-motion";
import "./DestinationsStyles.css";
import Image1 from "../../assets/DSC05409.jpg";
import Image2 from "../../assets/DSC06350.jpg";
import Image3 from "../../assets/DSC06040.jpg";
import Image4 from "../../assets/DSC05640.jpg";
import Image5 from "../../assets/DSC06325.jpg";
import { MdOutlineStarPurple500 } from "react-icons/md";

function Destinations() {
  // Animation variants for the sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <div name="destinations" className="">
      <div className="">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="w-full md:flex py-10 max-w-screen-xl md:flex-col-2 gap-4 mx-auto text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold leading-tight text-[#1d1d1b] sm:text-4xl lg:text-5xl lg:leading-tight"
          >
            All Inclusive Resort
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl px-4 mx-auto md:text-left mt-4 text-md text-gray-500"
          >
            Discover the perfect blend of relaxation and luxury at Rosalyn's
            Beach Hotel. Located on the stunning coastline, our hotel offers
            breathtaking lake views, comfortable accommodations, and
            unparalleled service.
            <br />
            <br />
            <div className="mb-2 mx-auto text-[#E0B973]">
              <div className="flex gap-2">
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
              </div>
            </div>
            <span>
              Whether you're here to unwind, explore, or celebrate, Rosalyn's
              Beach Hotel is your gateway to an unforgettable beachside
              experience.
            </span>
          </motion.p>
        </motion.div>

        <section className="bg-white w-full py-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
              <motion.div
                variants={fadeInUp}
                className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col"
              >
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                >
                  <img
                    src={Image1}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Wines
                  </h3>
                </a>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50"
              >
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
                >
                  <img
                    src={Image2}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Boardroom
                  </h3>
                </a>
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                  <motion.a
                    variants={fadeInUp}
                    href=""
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                  >
                    <img
                      src={Image5}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                      Coffee
                    </h3>
                  </motion.a>
                  <motion.a
                    variants={fadeInUp}
                    href=""
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                  >
                    <img
                      src={Image4}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                      Views
                    </h3>
                  </motion.a>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col"
              >
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                >
                  <img
                    src={Image3}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Quality Time
                  </h3>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default Destinations;
