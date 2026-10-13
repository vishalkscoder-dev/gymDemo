import React from 'react'

export default function Hero({title, description,tagline1, tagline2, primaryText, primaryLink, secondaryText, secondaryLink}) {

  return (
    <section>


      <div className="hero-overlay"></div>

      
        <h1>{title}</h1>

        <h3>{tagline1}</h3>
        <h4>{tagline2}</h4>
        <p>{description}</p>

        <div>
            <a href={primaryLink}>{primaryText}</a>

            <a href={secondaryLink}>{secondaryText}</a>
        </div>
    </section>
  )
}
