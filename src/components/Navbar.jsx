import { NavLink } from "react-router-dom";
import gymData from "../data/gymData";


import React from 'react'

export default function Navbar() {
    const navItems = [
        {name: "Home", path: "/"},
        {name: "About", path: "/about"},
        {name:"Facilities", path: "/facilities"},
        // {name: "Trainers", path: "/trainers"},
        {name: "Membership", path: "/membership"},
        {name: "Gallery", path: "/gallery"},
        {name: "Contact", path: "/contact"}
    ]


    return (
        <nav>
            <div>
                <h2>{gymData.name}</h2>

                <div>
                    {navItems.map((item) => (
                        <NavLink key={item.path} to={item.path}>
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    )
}

















