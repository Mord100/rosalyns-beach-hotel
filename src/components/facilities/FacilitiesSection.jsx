import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaAddressBook } from "react-icons/fa";


import Image1 from '../../assets/WhatsApp Image 2024-10-02 at 09.32.56 (9).jpeg';
import Image2 from '../../assets/WhatsApp Image 2024-10-02 at 09.32.56 (12).jpeg';
import Image3 from '../../assets/WhatsApp Image 2024-06-30 at 18.38.04 (1).jpeg';
import Image4 from '../../assets/WhatsApp Image 2024-10-02 at 09.32.56 (23).jpeg';
import Image5 from '../../assets/WhatsApp Image 2024-10-02 at 10.01.01.jpeg';
import Image6 from '../../assets/WhatsApp Image 2024-10-02 at 09.32.56.jpeg';

function Destinations() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const images = [
        { src: Image1, alt: '', label: 'BAR' },
        { src: Image4, alt: '', label: 'POOL' },
        { src: Image3, alt: '', label: 'LOUNGE' },
        { src: Image2, alt: '', label: 'RESTAURANT' },
        { src: Image5, alt: '', label: 'BOARD ROOM' },
        { src: Image6, alt: '', label: 'BOAT RIDES' },
    ];

    return (
        <div name='destinations' className='destinations py-20'>
            <div className="container">
            <h1 className='font-source text-4xl font-light text-[#1d1d1b] mb-2 text-center' data-aos="fade-up">Facilities</h1>
            <div className='w-24 h-1 bg-[#E0B973] mx-auto mb-8' data-aos="fade-up" data-aos-delay="100"></div>
                    <p className='text-gray-600 font-inter text-center py-4' data-aos="fade-up" data-aos-delay="200">
                    Experience the ultimate relaxation at our all-inclusive beach resort located on the pristine shores of Lake Malawi. 
                    Enjoy a perfect blend of luxury and comfort with stunning lake views, gourmet dining, and a range of activities to suit 
                    all tastes.
                </p>
                <div className="mx-auto w-[90%] md:w-[80%]" data-aos="fade-up" data-aos-delay="400">
                    {images.map((image, index) => (
                        <div className="relative mb-8" key={index}>
                            <img className='w-full py-4 h-full rounded-md' src={image.src} alt={image.alt} data-aos="zoom-in" data-aos-delay={index * 100} />
                            <div className="absolute bottom-[-1rem] left-1/2 flex justify-center mx-auto items-center shadow-lg transform font-bold w-1/2 -translate-x-1/2 bg-white px-4 py-4 rounded-sm text-[#1d1d1b]">
                                {image.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Destinations;
