import React from 'react';
import Hero from '../components/hero/Hero'
import Destinations from '../components/destinations/Destinations';
import Features from '../components/features/Features';
import Selects from '../components/selects/Selects';
import Testimonials from '../components/testimonials/Testimonials';
import Icons from '../components/icons/Icons';

function Home() {
  return (
    <>
      <Hero />
      {/* <Icons/> */}
      <Destinations />
      <Features />
      <Selects />
      {/* <ImgCarousel /> */}
      {/* <Testimonials /> */}
    </>
  );
}

export default Home;