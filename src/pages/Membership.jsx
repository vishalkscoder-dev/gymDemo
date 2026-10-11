import React from 'react'

import MemberShipCard from "../components/MemberShipCard"
import memberships from "../data/memberships"
import Hero from "../components/Hero"


export default function Membership() {
  return (
    <main>
      <Hero
        title="Membership Plans"
        description="Choose a membership plan that fits your fitness goals."
        primaryText="Enquire Now"
        primaryLink="/contact"
        secondaryText="View Facilities"
        secondaryLink="/facilities"
      
      />

      <section>
        
        <h2>Our Plans</h2>

        <div className="membership-grid">
          {memberships.map((plan)=>(
            <MemberShipCard
              key={plan.id}
              plan={plan}
            />
          ))}

        </div>
      </section>
    </main>
  )
}
