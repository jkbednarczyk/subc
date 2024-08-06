import React from "react";
import './ContactPage.css';
import { ContactForm } from "./contactForm/ContactForm.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope} from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

export const ContactPage = () => { 

    return <>
        <section className="contact-form">
            <ul className="contact-data">
            <div className="contact-item contact-intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a condimentum augue. Praesent lacinia accumsan dolor, nec semper diam luctus ac. Nullam tincidunt auctor interdum. Etiam pretium tempor felis at hendrerit. Praesent aliquam mi ac massa fringilla mollis. Nunc bibendum erat in enim ultricies, sodales ultrices erat ornare. Vestibulum volutpat, nisi vel tristique pharetra, quam lectus dictum justo, quis porta quam orci vel nisl. Nunc id posuere metus. Sed in pharetra neque. Nam id efficitur arcu. Sed venenatis, ligula vitae bibendum commodo, leo diam scelerisque purus, viverra ornare nisi magna at lorem. Morbi egestas lorem est, eu hendrerit lectus tristique id. Pellentesque tempus massa sed hendrerit facilisis. 
                </div>
                <div className="contact-item">
                    <div className="icon">
                        <FontAwesomeIcon icon={faLocationDot}/>
                    </div>    
                    <div className="data">
                        <p> 
                            Salon Unikatów<br/>
                            NIP 6793272126<br/>
                            REGON 525857837<br/>
                            ul. Dekarzy 11<br/>
                            30-414 Kraków
                        </p>
                    </div>
                </div>
                <div className="contact-item">
                    <div className="icon">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </div>    
                    <div className="data">
                        salonunikatow@gmail.com
                    </div>
                </div>
                <div className="contact-item">
                    <div className="icon">
                        <FontAwesomeIcon icon={faPhone}/>
                    </div>    
                    <div className="data">
                        +48 662 921 155
                    </div>
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