import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Image1 from '../../assets/vip-beach-front-villa.jpg';
import Image2 from '../../assets/DSC05656.jpg';
import Image3 from '../../assets/WhatsApp Image 2024-06-30 at 18.38.03.jpeg';
import Image4 from '../../assets/DSC06028.jpg';
import Image5 from '../../assets/excutive.jpg';
import Image6 from '../../assets/excutive-3.jpg';
import Image7 from '../../assets/excutive-room-1.jpg';
import Image8 from '../../assets/DSC06028.jpg';
import Image9 from '../../assets/family-room.jpg';
import Image10 from '../../assets/family.jpg';
import Image11 from '../../assets/family.jpg';
import Image12 from '../../assets/family-room.jpg';


import { FaBed, FaCoffee, FaWifi, FaBath, FaTv, FaSwimmingPool, FaConciergeBell, FaUtensils } from 'react-icons/fa';

function Rooms() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const rooms = [
        {
            images: [Image3, Image1, Image2, Image4],
            alt: 'VIP Beach Front Villa',
            label: 'VIP Beach Front Villa',
            description: 'Experience luxury beachfront living in our spacious two-room villa. Perfect for groups of up to 4, featuring a private lounge and fully-equipped kitchen. Enjoy breathtaking ocean views and direct beach access.',
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
            images: [Image9,Image6, Image7, Image5],
            alt: 'Executive Suite',
            label: 'Executive Suite',
            description: 'Indulge in our luxurious Executive Suite, offering panoramic views and exclusive amenities. Perfect for couples or business travelers, this suite includes a sumptuous bed and breakfast for two, ensuring a memorable stay.',
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
            images: [Image9, Image10, Image11, Image12],
            alt: 'Family Room',
            label: 'Family Room',
            description: 'Our Family Room is designed with your comfort in mind. 2 separate bedrooms, 2 bathrooms, and a spacious living area. Spacious and welcoming, it features child-friendly amenities and easy access to our kids\' pool, making it the perfect choice for a memorable family getaway.',
            rate: 'MWK 120,000 / Night',
            amenities: [
                { icon: <FaBed />, text: '2 Single Beds, 1 King-sized Bed' },
                { icon: <FaWifi />, text: 'Free WiFi' },
                { icon: <FaWifi />, text: 'DSTV & Netflix' },
                { icon: <FaBath />, text: '2 Bathrooms' },
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
                        <div className="bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 2000, disableOnInteraction: true }}
                                className="w-full h-80"
                            >
                                {room.images.map((image, imgIndex) => (
                                    <SwiperSlide key={imgIndex}>
                                        <img
                                            src={image}
                                            alt={`${room.alt} - Image ${imgIndex + 1}`}
                                            className="w-full h-80 object-cover"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
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
