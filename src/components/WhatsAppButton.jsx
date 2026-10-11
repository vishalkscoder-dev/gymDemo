import React from 'react'
import {
    GYM_WHATSAPP_NUMBER,
    DEFAULT_WHATSAPP_MESSAGE
} from "../config/whatsapp"




export default function WhatsAppButton() {
    const handleWhatsapp = ()=>{
        const url = `https://wa.me/${GYM_WHATSAPP_NUMBER}?text=${encodeURIComponent(
            DEFAULT_WHATSAPP_MESSAGE
        )}`

        window.open(url, "_blank")
    }
    
    return (
        <button onClick={handleWhatsapp}>
            Whatsapp Us
        </button>
    )
}
