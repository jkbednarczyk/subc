import './ContactPage.css';
import { ContactForm } from "./contactForm/ContactForm.component";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { translate } from "../../lang/utils/TranslationUtils";
import { CustomContactItem } from '../common/customContactItem/CustomContactItem.component';
import { Footer } from '../footer/Footer.component';


export const ContactPage = () => {
    return <>
        <section className="contact-form">
            <ul className="contact-data">
                <li className="contact-item">
                    <p>{translate("CONTACT.CONTACT_PAGE_TEXT")}</p>
                </li>
                <CustomContactItem icon={faEnvelope}>
                    <a href="mailto:salonunikatow@gmail.com">salonunikatow@gmail.com</a>
                </CustomContactItem>
                <CustomContactItem icon={faPhone}>
                    <a href="tel:+48662921155">+48 662 921 155</a>
                </CustomContactItem>
            </ul>
            <ul className="contact-data">
                <li className="contact-item">
                    <ContactForm />
                </li>
            </ul>
        </section>
        <Footer/>
    </>
};
