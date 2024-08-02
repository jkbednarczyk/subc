import React from "react";
import './ContactPage.css';
import { ContactForm } from "./contactForm/ContactForm.component";

export const ContactPage = () => { 

    return <>
        <section className="contact-form">
            <div className="details">
                <p>Salon Unikatów</p>
                <p>NIP 123456789</p>
                <p>ul. Dekarzy 11</p>
                <p>30-414 Kraków</p>
            </div>
            <ContactForm/>
        </section>
    </>
};