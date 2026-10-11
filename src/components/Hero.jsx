import React from 'react'

export default function Hero({title, description, primaryText, primaryLink, secondaryText, secondaryLink}) {

  return (
    <section>
        <h1>{title}</h1>

        <p>{description}</p>

        <div>
            <a href={primaryLink}>{primaryText}</a>

            <a href={secondaryLink}>{secondaryText}</a>
        </div>
    </section>
  )
}
