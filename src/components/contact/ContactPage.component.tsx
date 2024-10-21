import './ContactPage.css';
import { ContactForm } from "./contactForm/ContactForm.component";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { translate } from "../../lang/utils/TranslationUtils";
import { CustomContactItem } from '../common/customContactItem/CustomContactItem.component';


export const ContactPage = () => {
    return (
        <section className="contact-form">
            <ul className="contact-data">
                <li className="contact-item">
                    {translate("CONTACT_PAGE_TEXT")}
                </li>
                <CustomContactItem icon={faLocationDot}>
                    <p>
                        Salon Unikatów<br />
                        NIP 6793272126<br />
                        REGON 525857837<br />
                        ul. Dekarzy 11<br />
                        30-414 Kraków
                    </p>
                </CustomContactItem>
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
    );
};
