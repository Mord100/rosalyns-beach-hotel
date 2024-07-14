import React from 'react'
import './DestinationsStyles.css'

import Image1 from '../../assets/WhatsApp Image 2024-06-30 at 18.38.03.jpeg'
import Image2 from '../../assets/WhatsApp Image 2024-06-30 at 18.38.00 (1).jpeg'
import Image3 from '../../assets/WhatsApp Image 2024-06-30 at 18.38.05 (1).jpeg'
import Image4 from '../../assets/WhatsApp Image 2024-06-30 at 18.37.55.jpeg'
import Image5 from '../../assets/WhatsApp Image 2024-06-30 at 18.37.54 (1).jpeg'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1 className='font-serif text-gray-800'>All-Inclusive Beach Resort</h1>
                <p className='text-gray-700'>On Lake Mangochi's Best Beach</p>
                <div className="img-container">
                    <img className='span-3 rounded-md image-grid-row-2' src={Image1} alt="/"/>
                    <img className='rounded-md' src={Image2} alt="/"/>
                    <img className='rounded-md' src={Image3} alt="/"/>
                    <img className='rounded-md' src={Image4} alt="/"/>
                    <img className='rounded-md' src={Image5} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations
