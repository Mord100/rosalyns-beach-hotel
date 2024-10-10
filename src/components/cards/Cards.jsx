import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { IoTvSharp } from "react-icons/io5";
import { TbAirConditioning } from "react-icons/tb";

import Image1 from '../../assets/WhatsApp Image 2024-10-10 at 19.27.57 (11).jpeg';
import Image2 from '../../assets/WhatsApp Image 2024-10-10 at 19.27.57 (17).jpeg';
import Image3 from '../../assets/WhatsApp Image 2024-06-30 at 18.38.03.jpeg';
import Image4 from '../../assets/WhatsApp Image 2024-10-10 at 19.27.57 (16).jpeg';
import Image5 from '../../assets/WhatsApp Image 2024-10-10 at 19.27.57.jpeg';
import Image6 from '../../assets/WhatsApp Image 2024-10-10 at 19.27.57 (13).jpeg';
import Image7 from '../../assets/WhatsApp Image 2024-10-02 at 09.36.41.jpeg';
import Image8 from '../../assets/DSC05282.jpg';
import Image9 from '../../assets/WhatsApp Image 2024-10-10 at 19.27.57 (4).jpeg';
import Image10 from '../../assets/WhatsApp Image 2024-10-10 at 19.27.57 (3).jpeg';
import Image11 from '../../assets/WhatsApp Image 2024-10-10 at 19.27.57 (6).jpeg';
import Image12 from '../../assets/family-room.jpg';
import Image13 from '../../assets/WhatsApp Image 2024-06-30 at 18.38.04 (1).jpeg';
import Image14 from '../../assets/WhatsApp Image 2024-10-10 at 19.27.57 (7).jpeg';
import Image15 from '../../assets/WhatsApp Image 2024-10-10 at 19.27.57 (2).jpeg';




import { FaBed, FaCoffee, FaWifi, FaBath, FaTv, FaSwimmingPool, FaConciergeBell, FaUtensils } from 'react-icons/fa';

function Rooms() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const rooms = [
        {
            images: [Image3, Image1, Image2, Image4, Image13],
            alt: 'VIP Beach Front Villa',
            label: 'VIP Beach Front Villa',
            description: 'Experience luxury beachfront living in our spacious two-room villa. Perfect for groups of up to 4, featuring a private lounge and fully-equipped kitchen. Enjoy breathtaking lake views and direct beach access.',
            rate: 'MWK 460,000 / Night',
            amenities: [
                { icon: <FaBed />, text: 'Queen-sized Bed' },
                { icon: <IoTvSharp />, text: 'DSTV & Netflix' },
                { icon: <FaWifi />, text: 'Free WiFi' },
                { icon: <FaBath />, text: 'Bathroom' },
                { icon: <TbAirConditioning />, text: 'Air Conditioning' },
                { icon: <FaUtensils />, text: 'Kitchen' },
            ]
        },
        {
            images: [Image6, Image5, Image7, Image14, Image15],
            alt: 'Superior Suite',
            label: 'Superior Suite',
            description: 'Indulge in our luxurious Executive Suite, offering panoramic views and exclusive amenities. Perfect for couples or business travelers, this suite includes a sumptuous bed and breakfast for two, ensuring a memorable stay.',
            rate: 'MWK 210,000 / Night',
            amenities: [
                { icon: <FaBed />, text: 'King-sized Bed' },
                { icon: <FaWifi />, text: 'Free WiFi' },
                { icon: <IoTvSharp />, text: 'DSTV & Netflix' },
                { icon: <TbAirConditioning />, text: 'Air Conditioning' },
                { icon: <FaBath />, text: 'Bathroom' },
                { icon: <FaUtensils />, text: 'Kitchen' },
            ]
        },
        {
            images: [Image9, Image10, Image11, Image14],
            alt: 'Family Room',
            label: 'Family Room',
            description: 'Our Family Room is designed with your comfort in mind. 2 separate bedrooms, 2 bathrooms, and a spacious living area accomodating up to 5 people. Spacious and welcoming, it features child-friendly amenities and easy access to our kids\' pool, making it the perfect choice for a memorable family getaway.',
            rate: 'MWK 420,000 / Night',
            amenities: [
                { icon: <FaBed />, text: '2 Single Beds, 1 King-sized Bed' },
                { icon: <FaWifi />, text: 'Free WiFi' },
                { icon: <IoTvSharp />, text: 'DSTV & Netflix' },
                { icon: <TbAirConditioning />, text: 'Air Conditioning' },
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
