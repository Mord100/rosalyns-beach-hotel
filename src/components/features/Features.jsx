import React from 'react';
import Book1 from "../../assets/book1.jpg"
import Book2 from "../../assets/book2.jpg"
import Book3 from "../../assets/book3.jpg"



const Plan = () => {
  return (
    <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="w-full md:flex md:flex-col-2 gap-4 mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-[#1d1d1b] sm:text-4xl lg:text-5xl lg:leading-tight">Luxury Redefined</h2>
            <p class="max-w-2xl mx-auto mt-4 text-left text-md text-[#1d1d1b]">At Rosalyn's Beach Hotel, we offer a range of accommodations to suit your needs. 
              From cozy ocean-view rooms to spacious suites with private balconies, each of our rooms is designed with comfort and style in mind. 
              Enjoy modern amenities, elegant décor, and the soothing sounds of the ocean right outside your window. Wake up to the sunrise over the sea and drift off to sleep with the sound of waves gently lapping at the shore.</p>
        </div>

        <div class="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
            <div>
                <img class="w-full rounded-lg" src={Book1} alt="" />
            </div>

            <div>
            <img class="w-full rounded-lg" src={Book2} alt="" />
            </div>

            <div>
            <img class="w-full rounded-lg" src={Book3} alt="" />
            </div>
        </div>

        <div class="mt-8 text-center md:mt-16">
            <a href="#" title="" class="inline-flex items-center justify-center py-4 font-semibold text-white transition-all duration-200 bg-[#1d1d1b] border px-14 hover:opacity-90" role="button"> Book Now </a>
        </div>
    </div>
</section>

  );
};

export default Plan;