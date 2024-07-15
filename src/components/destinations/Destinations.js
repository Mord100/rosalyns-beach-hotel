import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './DestinationsStyles.css';

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
                <h1 className='font-serif text-gray-800 border-b-2' data-aos="fade-up">All-Inclusive Beach Resort</h1>
                <p className='text-gray-700 py-4' data-aos="fade-up" data-aos-delay="200">
                    Experience the ultimate relaxation at our all-inclusive beach resort located on the pristine shores of Lake Mangochi. 
                    Enjoy a perfect blend of luxury and comfort with stunning lake views, gourmet dining, and a range of activities to suit 
                    all tastes. Whether you're looking to unwind on the beach, explore the local culture, or indulge in water sports, our 
                    resort offers everything you need for an unforgettable getaway.
                </p>
                <div className="img-container" data-aos="fade-up" data-aos-delay="400">
                    <img className='span-3 rounded-md image-grid-row-2' src={Image1} alt="Beach view" data-aos="zoom-in" />
                    <img className='rounded-md' src={Image2} alt="Resort" data-aos="zoom-in" data-aos-delay="100" />
                    <img className='rounded-md' src={Image3} alt="Dining" data-aos="zoom-in" data-aos-delay="200" />
                    <img className='rounded-md' src={Image4} alt="Activities" data-aos="zoom-in" data-aos-delay="300" />
                    <img className='rounded-md' src={Image5} alt="Sunset" data-aos="zoom-in" data-aos-delay="400" />
                </div>
            </div>
        </div>
    );
}

export default Destinations;
