import React, { useState, useEffect } from 'react';
import { FaHotel, FaChevronDown } from 'react-icons/fa';

import HeroImage1 from '../../assets/WhatsApp Image 2024-10-02 at 09.32.56 (22).jpeg';
import HeroImage2 from '../../assets/WhatsApp Image 2024-12-11 at 16.42.42.jpeg';
import HeroImage3 from '../../assets/WhatsApp Image 2024-10-02 at 09.32.56 (24).jpeg';

function LuxuryHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const heroImages = [
    { src: HeroImage1, alt: 'Luxurious Resort Landscape' },
    { src: HeroImage2, alt: 'Pristine Beach View' },
    { src: HeroImage3, alt: 'Resort Exterior' }
  ];

  // Image preloading mechanism
  useEffect(() => {
    const imagePromises = heroImages.map(image => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(error => console.error('Image loading error:', error));
  }, []);

  // Automatic slide change
  useEffect(() => {
    if (!imagesLoaded) return;

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [imagesLoaded]);

  const handleScroll = () => {
    const scrollTarget = window.innerHeight * 0.8;
    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth'
    });
  };

  if (!imagesLoaded) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <div className="animate-pulse text-2xl">Welcome To Rosalyn's Beach Hotel...</div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000">
        {heroImages.map((image, index) => (
          <img 
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 transition-opacity duration-1000 
              ${currentSlide === index ? 'opacity-100' : 'opacity-0'} 
              h-full w-full object-cover object-center`}
          />
        ))}
      </div>

      {/* Backdrop for text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroImages.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
              ${currentSlide === index 
                ? 'bg-white w-6 opacity-100' 
                : 'bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-start px-6 md:px-20 lg:px-32">
        <div className="text-white max-w-xl space-y-6">
          <h1 className="text-7xl md:text-7xl lg:text-8xl font-thin font-serif tracking-wide">
            Rosalyn's
          </h1>
          <h2 className="text-5xl md:text-5xl lg:text-6xl font-light font-serif tracking-wider">
            Beach Hotel
          </h2>
          <p className="text-base md:text-lg font-light tracking-wide text-white/90 opacity-90">
            Experience the difference.
          </p>
          
          <div className="flex space-x-4 pt-6">
            <a 
              href="/facilities" 
              className="group flex items-center gap-3 
                px-8 py-3.5 border border-white/30 
                bg-transparent text-white 
                font-light tracking-wider 
                hover:bg-white/10 backdrop-blur-sm 
                transition duration-300 ease-in-out 
                rounded-sm"
            >
              <FaHotel className="w-5 h-5 group-hover:animate-pulse" /> 
              Explore Facilities
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
          flex flex-col items-center 
          text-white/80 cursor-pointer 
          hover:text-white transition duration-300"
      >
      </div>
    </div>
  );
}

export default LuxuryHero;