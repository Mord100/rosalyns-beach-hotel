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

    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1 className='font-serif text-gray-800 border-b-2' data-aos="fade-up">Gallery</h1>
                <div className="img-container" data-aos="fade-up" data-aos-delay="200">
                    <img className='rounded-md' src={Image2} alt="Image2" data-aos="zoom-in" />
                    <img className='rounded-md' src={Image3} alt="Image3" data-aos="zoom-in" data-aos-delay="100" />
                    <img className='span-3 rounded-md image-grid-row-2' src={Image1} alt="Image1" data-aos="zoom-in" data-aos-delay="200" />
                    <img className='rounded-md' src={Image4} alt="Image4" data-aos="zoom-in" data-aos-delay="300" />
                    <img className='rounded-md' src={Image5} alt="Image5" data-aos="zoom-in" data-aos-delay="400" />
                </div>
            </div>
        </div>
    );
}

export default Destinations;
