import React from 'react'

export default function TrainerCard({trainer}) {
  return (
    <article className='trainer-card'>
        <img 
            src={trainer.image} 
            alt={trainer.name} 
        />

        <h3>{trainer.name}</h3>
        
        <p>{trainer.specialization}</p>

        <p>{trainer.experience}</p>

        <p>{trainer.description}</p>
        
    </article>
  )
}
