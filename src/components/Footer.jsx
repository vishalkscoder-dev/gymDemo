import { Link } from "react-router-dom";

import gymData from "../data/gymData";
import contactData from "../data/contactData";

import React from 'react'




export default function Footer() {
  return (
    <footer>
        <div>
            <h2>{gymData.name}</h2>
            <p>{gymData.tagline}</p>
            <p>{contactData.address}</p>
            <p>{contactData.phone}</p>
            <p>{contactData.email}</p>

        </div>

        <div>
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/facilities">Facilities</Link>
            <Link to="/trainers">Trainers</Link>
            <Link to="/membership">Membership</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
        </div>

        <p className="footer-copyright">© 2026 Vishal. All Rights Reserved.</p>
    </footer>      
  )
}











