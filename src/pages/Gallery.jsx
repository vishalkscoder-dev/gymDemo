import React from 'react'

import Gallery from "../components/Gallery"
import galleryImages from "../data/gallery"
import Hero from "../components/Hero"


export default function GalleryPage() {
  return (
    <main>

      <Hero
        title="Gym Gallery"
        description="Take a look at our gym, equipment, and training environment."
        primaryText="View Facilities"
        primaryLink="/facilities"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />

      <section>
        <h2>Our Gym</h2>

        <Gallery
          images={galleryImages}
        />

      </section>
    </main>
  )
}
