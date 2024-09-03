import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./DestinationsStyles.css";
import Image1 from "../../assets/DSC05409.jpg"
import Image2 from "../../assets/DSC06350.jpg"
import Image3 from "../../assets/DSC06040.jpg"
import Image4 from "../../assets/DSC05640.jpg"
import Image5 from "../../assets/DSC06325.jpg"







function Destinations() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div name="destinations" className="">
      <div className="">
        <div class="w-full md:flex py-10 max-w-screen-xl md:flex-col-2 gap-4 mx-auto text-center">
          <h2 class="text-3xl font-bold leading-tight text-[#1d1d1b] sm:text-4xl lg:text-5xl lg:leading-tight">
            All Inclusive Resort
          </h2>
          <p class="max-w-2xl mx-auto md:text-left mt-4 text-md text-[#1d1d1b">
          Discover the perfect blend of relaxation and luxury at Rosalyn's Beach Hotel. Located on the stunning coastline, 
          our hotel offers breathtaking lake views, comfortable accommodations, and unparalleled service. 

<br/><br/>
            <span>Whether you're here 
          to unwind, explore, or celebrate, Rosalyn's Beach Hotel is your gateway to an unforgettable beachside experience.</span>
          </p>

          
        </div>

        <section class="bg-white w-full py-10">
          <div class="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
              <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                <a
                  href=""
                  class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                >
                  <img
                    src={Image1}
                    alt=""
                    class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Wines
                  </h3>
                </a>
              </div>
              <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                <a
                  href=""
                  class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
                >
                  <img
                    src={Image2}
                    alt=""
                    class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Boardroom
                  </h3>
                </a>
                <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                  <a
                    href=""
                    class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                  >
                    <img
                      src={Image5}
                      alt=""
                      class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                      Text
                    </h3>
                  </a>
                  <a
                    href=""
                    class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                  >
                    <img
                      src={Image4}
                      alt=""
                      class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                      Text
                    </h3>
                  </a>
                </div>
              </div>
              <div class="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                <a
                  href=""
                  class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                >
                  <img
                    src={Image3}
                    alt=""
                    class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Text
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Destinations;
