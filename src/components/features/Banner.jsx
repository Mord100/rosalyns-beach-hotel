import React from 'react'

const Banner = () => {
  return (
    <section class="py-10 bg-gradient-to-r from-[#E0B973] to-[#1d1d1b] sm:py-16">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="text-center sm:flex sm:items-center sm:justify-center sm:text-left">
            <h2 class="text-4xl font-bold text-white">Do you have any inquiries?</h2>

            <a href="./contact" title="" class="inline-flex items-center justify-center flex-shrink-0 px-4 py-4 mt-8 text-base font-semibold text-gray-900 transition-all duration-200 bg-[#E0B973] sm:mt-0 sm:ml-8 lg:ml-16 hover:opacity-90" role="button">
                Contact Us
            </a>
        </div>
    </div>
</section>

  )
}

export default Banner