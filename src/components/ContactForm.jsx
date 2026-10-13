import { useForm } from "react-hook-form";

import {GYM_WHATSAPP_NUMBER} from "../config/whatsapp"

import React from 'react'

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    const onSubmit = (data)=>{
        const message = `
            Hello, I would like to enquire about gym membership.

            Name: ${data.fullName}
            Phone: ${data.phone}
            Email: ${data.email}
            Membership Plan: ${data.membershipPlan}
            Message: ${data.message}
        `

        const url = `https://wa.me/${GYM_WHATSAPP_NUMBER}?text=${encodeURIComponent(
            message
        )}`

        window.open(url, "_blank")
    }
  
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">

            <div>
                <label>Full Name</label>

                <input type="text"
                    {...register("fullName", {
                        required:"Full Name is required",
                    })}
                />

                {errors.fullName && (
                    <p>{errors.fullName.message}</p>
                )}
            </div>


            <div>
                <label>Phone Number</label>

                <input type="tel" 
                    {...register("phone",{
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Enter a valid 10-digit phone number",
                        },
                    })}
                />

                {errors.phone && (
                    <p>{errors.phone.message}</p>
                )}
            </div>


            <div>
                <label>Email</label>

                <input type="email" 
                    {...register("email", {
                        required: "Email is required"
                    })}
                />

                {errors.email && (
                    <p>{errors.email.message}</p>
                )}
            </div>


            <div>
                <label>Membership Plan</label>

                <select
                    {...register("membershipPlan",{
                        required: "Please select a membership plan",
                    })}
                >

                    <option value="">Select a plan</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Quarterly">Quarterly</option>
                    <option value="Yearly">Yearly</option>
                </select>

                {errors.membershipPlan && (
                    <p>{errors.membershipPlan.message}</p>
                )}
            
            </div>
            
            


            <div>
                <label>Message</label>

                <textarea 
                    rows="5"
                    {...register("message", {
                        required:"Message is required",
                    })}
                />

                {errors.message && (
                    <p>{errors.message.message}</p>
                )}

            </div>



            <button type="submit">
                Send Enquiry
            </button>




        </form>

  )
}



















