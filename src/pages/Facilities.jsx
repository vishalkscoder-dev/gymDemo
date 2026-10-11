import React from 'react'

import FacilityCard from '../components/FacilityCard'
import facilities from '../data/facilities'
import Hero from '../components/Hero'



export default function Facilities() {
  return (
    <main>

      <Hero
        title="Our Facilities"
        description="Explore the modern facilities available at our gym."
        primaryText="View Membership"
        primaryLink="/membership"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      
      />


      <section>
        <h2>Gym Facilities</h2>

        <div>
          {facilities.map((facility)=>(
            <FacilityCard
              key={facility.id}
              facility={facility}
            />
          ))}
        </div>



      </section>
    </main>



  )
}
