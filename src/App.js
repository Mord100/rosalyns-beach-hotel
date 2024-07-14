import React from 'react'
import ImgCarousel from './components/carousel/ImgCarousel';
import Destinations from './components/destinations/Destinations'
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Features from './components/features/Features'
import Selects from './components/selects/Selects';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Features/>
      <Selects />
      {/* <ImgCarousel /> */}
      <Testimonials/>
      <Footer />
    </div>
  );
}

export default App;
