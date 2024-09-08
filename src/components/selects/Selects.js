import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image1 from '../../assets/DSC05656.jpg';
import Image2 from '../../assets/DSC05503.jpg';
import Image3 from '../../assets/DSC05961.jpg';
import Image4 from '../../assets/DSC06307.jpg';
import Image5 from '../../assets/DSC06289.jpg';
import Image6 from '../../assets/WhatsApp Image 2024-06-30 at 18.38.05 (1).jpeg'
import Image7 from '../../assets/DSC06380.jpg'
import Image8 from '../../assets/DSC06223.jpg'
import Image9 from '../../assets/DSC05404.jpg'

function BeachHotelGallery() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">Gallery</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg" data-aos="fade-up">
                        <img src={Image1} alt="Beachfront View" className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"/>
                    </div>
    
                    <div className="relative overflow-hidden rounded-2xl shadow-lg" data-aos="fade-up">
                        <img src={Image2} alt="Gourmet Dining" className="w-full h-[14rem] object-cover transition-transform duration-300 transform hover:scale-110"/>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl shadow-lg" data-aos="fade-up">
                        <img src={Image3} alt="Luxurious Suites" className="w-full h-[14rem] object-cover transition-transform duration-300 transform hover:scale-110"/>
                    </div>
    
                    <div className="relative overflow-hidden rounded-2xl shadow-lg" data-aos="fade-up">
                        <img src={Image4} alt="Sunset Lounge" className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"/>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl shadow-lg" data-aos="fade-up">
                        <img src={Image5} alt="Spa Retreat" className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"/>
                    </div>
    
                    <div className="relative overflow-hidden rounded-2xl shadow-lg" data-aos="fade-up">
                        <img src={Image6} alt="Infinity Pool" className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"/>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl shadow-lg" data-aos="fade-up">
                        <img src={Image7} alt="Water Sports" className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"/>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl shadow-lg" data-aos="fade-up">
                        <img src={Image8} alt="Beach Yoga" className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"/>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl shadow-lg" data-aos="fade-up">
                        <img src={Image9} alt="Private Cabanas" className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BeachHotelGallery;
