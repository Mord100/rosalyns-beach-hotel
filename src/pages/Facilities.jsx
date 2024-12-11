import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/FacilitiesHero'
import FacilitySection from '../components/facilities/FacilitiesSection'

const Facilities = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <FacilitySection />
    </div>
  )
}

export default Facilities