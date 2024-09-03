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



function Destinations() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div class="bg-gray-100 py-20">
        <div class="container mx-auto px-4 py-8">
            <h1 class="text-4xl font-bold text-center mb-8">Gallery</h1>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div class="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
                    <img src={Image1} alt="" class="w-full h-full object-cover"/>
                    <div
                        class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="absolute bottom-0 left-0 right-0 p-4">
                            <h3 class="text-2xl font-bold text-white">Explore Nature</h3>
                            <p class="text-white">Discover the beauty of the natural world</p>
                        </div>
                    </div>
                </div>
    
                <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                    <img src={Image2} alt="" class="w-full h-[14rem] object-cover"/>
                    <div
                        class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="absolute bottom-0 left-0 right-0 p-4">
                            <h4 class="text-xl font-bold text-white">Culinary Delights</h4>
                        </div>
                    </div>
                </div>
                <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                    <img src={Image3} alt="" class="w-full  h-[14rem] object-cover"/>
                    <div
                        class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="absolute bottom-0 left-0 right-0 p-4">
                            <h4 class="text-xl font-bold text-white">Tech Innovations</h4>
                        </div>
                    </div>
                </div>
    
                <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                    <img src={Image4} alt="Travel" class="w-full h-48 object-cover"/>
                    <div
                        class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="absolute bottom-0 left-0 right-0 p-4">
                            <h4 class="text-xl font-bold text-white">Travel Adventures</h4>
                        </div>
                    </div>
                </div>
                <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                    <img src={Image5} alt="Art" class="w-full h-48 object-cover"/>
                    <div
                        class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="absolute bottom-0 left-0 right-0 p-4">
                            <h4 class="text-xl font-bold text-white">Artistic Expressions</h4>
                        </div>
                    </div>
                </div>
    
                <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                    <img src={Image6} alt="Sport" class="w-full h-48 object-cover"/>
                    <div
                        class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="absolute bottom-0 left-0 right-0 p-4">
                            <h4 class="text-xl font-bold text-white">Swimming</h4>
                        </div>
                    </div>
                </div>
                <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                    <img src={Image7} alt="Sport" class="w-full h-48 object-cover"/>
                    <div
                        class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="absolute bottom-0 left-0 right-0 p-4">
                            <h4 class="text-xl font-bold text-white">Chess</h4>
                        </div>
                    </div>
                </div>
                <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                    <img src={Image8} alt="Sport" class="w-full h-48 object-cover"/>
                    <div
                        class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="absolute bottom-0 left-0 right-0 p-4">
                            <h4 class="text-xl font-bold text-white">Football</h4>
                        </div>
                    </div>
                </div>
                <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                    <img src={Image9} alt="Sport" class="w-full h-48 object-cover"/>
                    <div
                        class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="absolute bottom-0 left-0 right-0 p-4">
                            <h4 class="text-xl font-bold text-white">Cricket</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Destinations;
