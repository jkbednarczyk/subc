import './ContactPage.css';
import { ContactForm } from "./contactForm/ContactForm.component";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { translate } from "../../lang/utils/TranslationUtils";
import { CustomContactItem } from '../common/customContactItem/CustomContactItem.component';
import { Footer } from '../footer/Footer.component';
import { Helmet } from 'react-helmet-async';
import { METADATA } from '../common/utils/metadata';


export const ContactPage = () => {
    return <>
        <Helmet>
            <title>{METADATA.CONTACT_TITLE}</title>
            <meta 
                name = "description" 
                content = {METADATA.CONTACT_DESCRIPTION}/>
        </Helmet>
        <section className = "contact__page">
            <ul className = "contact__data">
                <h1>{translate("CONTACT.CONTACT_PAGE_TITLE")}</h1> 
                <li className = "contact__data-item"> 
                    <p>{translate("CONTACT.CONTACT_PAGE_TEXT")}</p>
                </li>
                <CustomContactItem icon = {faEnvelope}>
                    <a href = "mailto:salonunikatow@gmail.com">salonunikatow@gmail.com</a>
                </CustomContactItem>
                <CustomContactItem icon = {faPhone}>
                    <a href = "tel:+48662921155">+48 662 921 155</a>
                </CustomContactItem>
            </ul>
            <ul className = "contact__form">
                <li className = "contact-item">
                    <ContactForm />
                </li>
            </ul>
        </section>
        <Footer/>
    </>
};
