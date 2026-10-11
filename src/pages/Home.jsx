import React from 'react'

import Hero from "../components/Hero"
import CTASection from "../components/CTASection"
import FacilityCard from "../components/FacilityCard"
import TrainerCard from "../components/TrainerCard"
import MembershipCard from "../components/MembershipCard"
import Gallery from "../components/Gallery"

import gymData from "../data/gymData"
import facilities from "../data/facilities"
import trainers from "../data/trainers"
import memberships from "../data/memberships"
import galleryImages from "../data/gallery"



export default function Home() {
  const featuredFacilities = facilities.slice(0,3)
  const featuredTrainers = trainers.slice(0,3)
  const featuredMemberships = memberships.slice(0,3)
  const previewGallery = galleryImages.slice(0,4)

  return (
    <main>

      {/* Hero */}

      <Hero
        title={gymData.name}
        description={gymData.tagline}
        primaryText="Join Now"
        primaryLink="/membership"
        secondaryText="Explore Facilities"
        secondaryLink="/facilities"
      />

      {/* Gym Introduction */}

      <section>
        <h2>Welcome to {gymData.name}</h2>

        <p>{gymData.description}</p>
      </section>

      {/* Featured Facilities */}

      <section>
        <h2>Our Facilities</h2>

        <div>
          {featuredFacilities.map((facility)=>(
            <FacilityCard
              key={facility.id}
              facility={facility}
            />
          ))}
        </div>
      </section>
      

      {/* Featured Trainers */}

      <section>
        <h2>Meet our Trainers</h2>

        <div>
          {featuredTrainers.map((trainer)=>(
            <TrainerCard
              key={trainer.id}
              trainer={trainer}
            />
          ))}
        </div>
      </section>


      {/* Membership Preview */}

      <section>
        <h2>Membership Plans</h2>

        <div>
          {featuredMemberships.map((plan)=>(
            <MembershipCard
              key={plan.id}
              plan={plan}
            />
          ))}
        </div>
      </section>

      
      {/* Gallery Preview */}

      <section>
        <h2>Gym Gallery</h2>

        <Gallery images={previewGallery}/>
      </section>

      {/* Contact CTA */}

      <CTASection
        title="Ready to Start Your Fitness Journey?"
        description="Get in touch with us and find the right membership plan for your goals."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

    </main>


  )
}
