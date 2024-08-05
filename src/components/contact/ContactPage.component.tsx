import React from "react";
import './ContactPage.css';
import { ContactForm } from "./contactForm/ContactForm.component";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContactPage = () => { 

    return <>
        <section className="contact-form">
            <ul className="contact-data">
            <div className="contact-item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a condimentum augue. Praesent lacinia accumsan dolor, nec semper diam luctus ac. Nullam tincidunt auctor interdum. Etiam pretium tempor felis at hendrerit. Praesent aliquam mi ac massa fringilla mollis. Nunc bibendum erat in enim ultricies, sodales ultrices erat ornare. Vestibulum volutpat, nisi vel tristique pharetra, quam lectus dictum justo, quis porta quam orci vel nisl. Nunc id posuere metus. Sed in pharetra neque. Nam id efficitur arcu. Sed venenatis, ligula vitae bibendum commodo, leo diam scelerisque purus, viverra ornare nisi magna at lorem. Morbi egestas lorem est, eu hendrerit lectus tristique id. Pellentesque tempus massa sed hendrerit facilisis. 
                </div>
                <div className="contact-item">
                    <div className="icon">
                        <FontAwesomeIcon icon={faLocationDot}/>
                    </div>    
                    <div className="data">
                        <p>Salon Unikatów</p>
                        <p>NIP 1234567890</p>
                        <p>REGON 12345678901234</p>
                        <p>ul. Dekarzy 11</p>
                        <p>30-414 Kraków</p>
                    </div>
                </div>
                <div className="contact-item">
                    salonunikatow@gmail.com
                </div>
                <div className="contact-item">
                    +48 662 921 155
                </div>
            </ul>
            <ul className="contact-data">
                <div className="contact-item">
                <ContactForm/>
                </div>
            </ul>
        </section>
    </>
};