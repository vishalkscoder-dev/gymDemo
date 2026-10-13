import React from 'react'

import ContactForm from "../components/ContactForm"
import Hero from "../components/Hero"
import contactData from "../data/contactData"
import GymMaps from '../components/GymMaps'

export default function Contact() {
  return (
    <main>

      <Hero
        title="Contact Us"
        description="Get in touch with us for membership enquiries and more information."
        primaryText="Enquire Now"
        primaryLink="#contact-form"
        secondaryText="View Membership"
        secondaryLink="/membership"      
      />

      <section>
        <h2>Get In Touch</h2>

        <p>{contactData.address}</p>
        
        <p>{contactData.phone1},  {contactData.phone2}</p>

        <p>{contactData.email}</p>

        <p>{contactData.workingHours}</p>
      </section>

      <section id='contact-form'>
        <h2>Membership Enquiry</h2>

        <ContactForm/>
        <GymMaps/>
      </section>

    </main>
  )
}
