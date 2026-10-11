import React from 'react'

export default function FacilityCard({facility}) {
  return (
    <article>
        <img src={facility.image} alt={facility.name} />
    
        <h3>{facility.name}</h3>

        <p>{facility.description}</p>
        
    </article>
          
  )
}
