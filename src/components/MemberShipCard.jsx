import React from 'react'
import { Link } from 'react-router-dom'


export default function MemberShipCard({plan}) {
  return (
    <article className='membership-card'>
        
        <h3>{plan.name}</h3>

        <p>{plan.duration}</p>

        <h4>{plan.price}</h4>

        <ul>
            {plan.features.map((feature)=>(
                <li key={feature}>{feature}</li>
            ))}
        </ul>

        <Link to="/contact">
            Enquire Now
        </Link>
        
    </article>    
      
  )
}
