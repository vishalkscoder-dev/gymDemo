import React from 'react'


export default function GymMap() {
    const gymAddress = "VR Gym - Fitness Center Nagercoil, 25, Vanigar, Ammancoil Street, Kottar N St, Nagercoil, Tamil Nadu 629002";
    const mapURL = `https://maps.google.com/maps?q=${encodeURIComponent(
        gymAddress
    )}&t=&z15&ie=UTF8&iwloc=&output=embed`;

    const directionsURL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
        gymAddress
    )}`;
  
    return (
        <section>
            <div>
                <p>Find Your Gym</p>

                <h2>Visit <span>US</span></h2>

                <p>Come Visit us and start your fitness journey today.</p>
                
            </div>

            <div>
                <iframe 
                    title='Gym Location'
                    src={mapURL}
                    loading='lazy'
                    allowFullScreen
                    referrerPolicy='no-referrer-when-downgrade'
                />

                <div>
                    <h3>Our Location</h3>

                    <p>{gymAddress}</p>

                    <a 
                        href={directionsURL}
                        target='_blank'
                        rel='noopener noreferrer'                    
                    >
                        Get Directions ↗
                    </a>
                </div>

            </div>
        </section>


  )
}
