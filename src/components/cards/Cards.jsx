import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image1 from '../../assets/WhatsApp Image 2024-06-30 at 18.38.03.jpeg';
import Image2 from '../../assets/WhatsApp Image 2024-06-30 at 18.38.00 (1).jpeg';
import Image3 from '../../assets/WhatsApp Image 2024-06-30 at 18.38.05 (1).jpeg';
import Image4 from '../../assets/WhatsApp Image 2024-06-30 at 18.37.55.jpeg';
import Image5 from '../../assets/WhatsApp Image 2024-06-30 at 18.37.54 (1).jpeg';

// Import icons
import { FaBed, FaCoffee, FaWifi, FaBath, FaTv } from 'react-icons/fa';

function Destinations() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const rooms = [
        {
            src: Image1,
            alt: 'Beach view',
            label: 'Deluxe Room',
            description: 'Enjoy a spacious deluxe room with stunning beach views, king-sized bed, and modern amenities.',
            rate: 'MWK 100,000',
            amenities: [
                { icon: <FaBed />, text: 'King-sized Bed' },
                { icon: <FaCoffee />, text: 'Coffee Maker' },
                { icon: <FaWifi />, text: 'Free WiFi' },
                { icon: <FaBath />, text: 'Private Bathroom' },
                { icon: <FaTv />, text: 'Flat-screen TV' },
            ]
        },
        {
            src: Image2,
            alt: 'Resort',
            label: 'Superior Room',
            description: 'Our superior rooms offer comfort and style with a balcony overlooking the resort’s lush gardens.',
            rate: 'MWK 80,000',
            amenities: [
                { icon: <FaBed />, text: 'Queen-sized Bed' },
                { icon: <FaCoffee />, text: 'Coffee Maker' },
                { icon: <FaWifi />, text: 'Free WiFi' },
                { icon: <FaBath />, text: 'Private Bathroom' },
                { icon: <FaTv />, text: 'Flat-screen TV' },
            ]
        },
        {
            src: Image3,
            alt: 'Dining',
            label: 'Executive Suite',
            description: 'Experience luxury in our executive suites, featuring a separate living area, private balcony, and premium facilities.',
            rate: 'MWK 150,000',
            amenities: [
                { icon: <FaBed />, text: 'King-sized Bed' },
                { icon: <FaCoffee />, text: 'Coffee Maker' },
                { icon: <FaWifi />, text: 'Free WiFi' },
                { icon: <FaBath />, text: 'Private Bathroom' },
                { icon: <FaTv />, text: 'Flat-screen TV' },
            ]
        },
        {
            src: Image4,
            alt: 'Activities',
            label: 'Family Room',
            description: 'Perfect for families, these rooms provide ample space with additional beds and child-friendly amenities.',
            rate: 'MWK 120,000 / Night',
            amenities: [
                { icon: <FaBed />, text: 'Two Queen Beds' },
                { icon: <FaCoffee />, text: 'Coffee Maker' },
                { icon: <FaWifi />, text: 'Free WiFi' },
                { icon: <FaBath />, text: 'Private Bathroom' },
                { icon: <FaTv />, text: 'Flat-screen TV' },
            ]
        },
        {
            src: Image5,
            alt: 'Sunset',
            label: 'Honeymoon Suite',
            description: 'Celebrate romance in our honeymoon suite with breathtaking sunset views and exclusive services.',
            rate: 'MWK 200,000',
            amenities: [
                { icon: <FaBed />, text: 'King-sized Bed' },
                { icon: <FaCoffee />, text: 'Coffee Maker' },
                { icon: <FaWifi />, text: 'Free WiFi' },
                { icon: <FaBath />, text: 'Private Bathroom' },
                { icon: <FaTv />, text: 'Flat-screen TV' },
            ]
        }
    ];

    return (
        <section className="pt-10 pb-10 lg:pb-20 font-source bg-[#F3F4F6]">
            <div className="container text-center">
                <h1 className='font-source mx-auto text-[#1d1d1b]border-b-4 inline-block' data-aos="fade-up">Rooms & Rates</h1>
                <p className='text-gray-600 font-source py-4 mx-auto max-w-screen-md' data-aos="fade-up" data-aos-delay="200">
                    Experience the ultimate relaxation at our all-inclusive beach resort located on the pristine shores of Lake Malawi. 
                    Enjoy a perfect blend of luxury and comfort with stunning lake views, gourmet dining, and a range of activities to suit 
                    all tastes.
                </p>
                <div className="flex flex-col space-y-10">
                    {rooms.map((room, index) => (
                        <div className="md:w-[80%] mx-auto" key={index}>
                            <div className="bg-white border overflow-hidden" data-aos="zoom-in" data-aos-delay={index * 100}>
                                <img
                                    src={room.src}
                                    alt={room.alt}
                                    className="w-full md:h-[80vh] h-[50vh] object-cover"
                                />
                                <div className="text-center">
                                    <h3>
                                        <span className="font-semibold p-4 bg-[#1d1d1b] text-white w-full text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block">
                                            {room.label}
                                        </span>
                                    </h3>
                                    <div className="flex flex-wrap font-sans justify-center pt-4 px-8 pb-8">
                                        {room.amenities.map((amenity, idx) => (
                                            <div key={idx} className="flex items-center text-gray-600 mr-4 mb-2">
                                                {amenity.icon}
                                                <span className="ml-2">{amenity.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-lg p-4 w-30 font-semibold text-gray-900 mb-8 block">{room.rate}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Destinations;
