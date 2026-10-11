import React, { useState, useEffect } from 'react'
import gymData from '../data/gymData'
import Hero from '../components/Hero'


export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);

  const gymImages = [
    { src: "/images/gym-1.jpg", alt: "Gym workout area" },
    { src: "/images/gym-2.jpg", alt: "Gym Interior" },
    { src: "/images/gym-3.jpg", alt: "Gym Equipment" },
    { src: "/images/gym-4.jpg", alt: "Gym Equipment" },
    { src: "/images/gym-5.jpg", alt: "Gym Equipment" },
    { src: "/images/gym-6.jpg", alt: "Gym Equipment" },
  ];

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main>

      <Hero
        title={`About ${gymData.name}`}
        description="Learn more about our gym, training approach, and fitness experience."
        primaryText="View Facilities"
        primaryLink="/facilities"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      
      />


      {/* Gym Description */}

      <section>
        <h2>About Our Gym</h2>

        <p>{gymData.description}</p>
      </section>

      {/* Gym Experience */}

      <section>
        <h2>Our Experience</h2>

        <p>{gymData.experience}</p>
      </section>

      {/* Training Approach */}

      <section>
        <h2>Our Training Approach</h2>

        <p>{gymData.trainingApproach}</p>
      </section>

      {/* Why Choose Us */}

      <section className="why-choose-us-section">
        <h2>Why Choose Us?</h2>

        <ul className="why-column why-column-left">
          {gymData.whyChooseUs.filter(item => item.column === 'left').map((item) => (
            <li key={item.id} className={`why-card why-card-${item.id}`}>
              <div className="why-card-top">
                <span className="why-card-tag">{item.tag}</span>
                <span className="why-card-num">{item.num}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="why-card-accent" />
            </li>
          ))}
        </ul>

        <ul className="why-column why-column-right">
          {gymData.whyChooseUs.filter(item => item.column === 'right').map((item) => (
            <li key={item.id} className={`why-card why-card-${item.id}`}>
              <div className="why-card-top">
                <span className="why-card-tag">{item.tag}</span>
                <span className="why-card-num">{item.num}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="why-card-accent" />
            </li>
          ))}
        </ul>
      </section>


      {/* Gym Images */}

      <section>
        <h2>Our Gym</h2>

        <div>
          {[...gymImages, ...gymImages].map((img, index) => (
            <img 
              key={index}
              src={img.src}
              alt={img.alt}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="lightbox"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button 
            type="button" 
            className="lightbox-close-btn"
            onClick={() => setSelectedImage(null)}
            aria-label="Close full screen image"
          >
            ✕
          </button>
          <img 
            src={selectedImage.src}
            alt={selectedImage.alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </main>


  )
}
