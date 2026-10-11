import React from 'react'
import { Link } from 'react-router-dom'

export default function CTASection({title, description, buttonText, buttonLink}) {
  return (
    <section>
        <h2>{title}</h2>

        <p>{description}</p>

        <Link to={buttonLink}>
            {buttonText}
        </Link>
    </section>
  )
}
