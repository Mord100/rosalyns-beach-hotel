import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image1 from '../../assets/WhatsApp Image 2024-06-30 at 18.38.03.jpeg';
import Image2 from '../../assets/WhatsApp Image 2024-06-30 at 18.38.00 (1).jpeg';
import Image3 from '../../assets/WhatsApp Image 2024-06-30 at 18.38.05 (1).jpeg';
import Image4 from '../../assets/WhatsApp Image 2024-06-30 at 18.37.55.jpeg';
import Image5 from '../../assets/WhatsApp Image 2024-06-30 at 18.37.54 (1).jpeg';

import { FaBed, FaCoffee, FaWifi, FaBath, FaTv, FaSwimmingPool, FaConciergeBell, FaUtensils } from 'react-icons/fa';

function Rooms() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const rooms = [
        {
            src: Image3,
            alt: 'VIP Beach Front Villa',
            label: 'VIP Beach Front Villa',
            description: '2 rooms accommodates 4 people. With a Launge and Kitchen ',
            rate: 'MWK 460,000 / Night',
            amenities: [
                { icon: <FaBed />, text: 'Queen-sized Bed' },
                { icon: <FaWifi />, text: 'DSTV & Netflix' },
                { icon: <FaWifi />, text: 'Free WiFi' },
                { icon: <FaBath />, text: 'Bathroom' },
                { icon: <FaUtensils />, text: 'Kitchen' },
            ]
        },

        {
            src: Image3,
            alt: 'Executive Suite',
            label: 'Executive Suite',
            description: 'Luxurious suite with panoramic views and exclusive amenities. Bed and Breaskfast for the maximum 2 people',
            rate: 'MWK 210,000 / Night',
            amenities: [
                { icon: <FaBed />, text: 'King-sized Bed' },
                { icon: <FaWifi />, text: 'Free WiFi' },
                { icon: <FaWifi />, text: 'DSTV & Netflix' },
                { icon: <FaBath />, text: 'Bathroom' },
                { icon: <FaUtensils />, text: 'Kitchen' },
            ]
        },
        {
            src: Image4,
            alt: 'Family Room',
            label: 'Family Room',
            description: 'Spacious room for families with child-friendly amenities.',
            rate: 'MWK 120,000 / Night',
            amenities: [
                { icon: <FaBed />, text: 'Two Single Beds' },
                { icon: <FaWifi />, text: 'Free WiFi' },
                { icon: <FaWifi />, text: 'DSTV & Netflix' },
                { icon: <FaBath />, text: 'Family-sized Bathroom' },
                { icon: <FaSwimmingPool />, text: 'Kids Pool Access' },
            ]
        },
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h1 className='font-source text-4xl font-light text-[#1d1d1b] mb-2 text-center' data-aos="fade-up">Our Rooms</h1>
                <div className='w-24 h-1 bg-[#E0B973] mx-auto mb-12' data-aos="fade-up" data-aos-delay="100"></div>
                <div className="grid gap-8 md:grid-cols-2 ">
                    {rooms.map((room, index) => (
                        <div className="bg-white  shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <img
                                src={room.src}
                                alt={room.alt}
                                className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                            />
                            <div className="p-6">
                                <h3 className="font-semibold text-2xl text-[#1d1d1b] mb-3">{room.label}</h3>
                                <p className="text-gray-600 text-sm mb-4">{room.description}</p>
                                <div className="flex flex-wrap gap-3 mb-4">
                                    {room.amenities.map((amenity, idx) => (
                                        <div key={idx} className="flex items-center text-gray-500 text-xs bg-gray-100 px-3 py-1">
                                            <span className="text-[#E0B973] mr-2">{amenity.icon}</span>
                                            <span>{amenity.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold text-[#E0B973]">{room.rate}</span>
                                    <button className="bg-[#E0B973] text-white text-sm px-4 py-2  hover:bg-[#1d1d1b] transition duration-300">Book Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Rooms;
