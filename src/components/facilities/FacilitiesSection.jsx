import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image1 from '../../assets/WhatsApp Image 2024-06-30 at 18.38.03.jpeg';
import Image2 from '../../assets/WhatsApp Image 2024-06-30 at 18.38.00 (1).jpeg';
import Image3 from '../../assets/WhatsApp Image 2024-06-30 at 18.38.05 (1).jpeg';
import Image4 from '../../assets/WhatsApp Image 2024-06-30 at 18.37.55.jpeg';
import Image5 from '../../assets/WhatsApp Image 2024-06-30 at 18.37.54 (1).jpeg';

function Destinations() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const images = [
        { src: Image1, alt: 'Beach view', label: 'BAR' },
        { src: Image2, alt: 'Resort', label: 'POOL' },
        { src: Image3, alt: 'Dining', label: 'LOUNGE' },
        { src: Image4, alt: 'Activities', label: 'RESTAURANT' },
        { src: Image5, alt: 'Sunset', label: 'BOAT RIDES' },
    ];

    return (
        <div name='destinations' className='destinations'>
            <div className="container">
            <h1 className='font-serif mx-auto align-middle text-gray-800 border-b-4 inline-block' data-aos="fade-up">Facilities</h1>
            <p className='text-gray-700 py-4' data-aos="fade-up" data-aos-delay="200">
                    Experience the ultimate relaxation at our all-inclusive beach resort located on the pristine shores of Lake Mangochi. 
                    Enjoy a perfect blend of luxury and comfort with stunning lake views, gourmet dining, and a range of activities to suit 
                    all tastes.
                </p>
                <div className="mx-auto w-[90%] md:w-[80%]" data-aos="fade-up" data-aos-delay="400">
                    {images.map((image, index) => (
                        <div className="relative mb-8" key={index}>
                            <img className='w-full py-4 h-full rounded-md' src={image.src} alt={image.alt} data-aos="zoom-in" data-aos-delay={index * 100} />
                            <div className="absolute bottom-[-1rem] left-1/2 shadow-lg transform font-bold w-1/2 -translate-x-1/2 bg-white px-4 py-4 rounded-sm text-gray-800">
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
