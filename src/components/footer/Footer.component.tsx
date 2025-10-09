import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { translate } from '../../lang/utils/TranslationUtils';
import { EXTERNAL_LINKS } from '../common/utils/externalLinks';
import allegro from "../../assets/images/allegro.svg"
import { faCopyright, faEnvelope} from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {

    return <>
        <section className = "footer">
            <div className = "footer__content">
                <div className = "footer__item">
                    <FontAwesomeIcon icon = {faLocationDot}/> Kraków, Małopolska
                </div>
                <div className = "footer__item">
                    <FontAwesomeIcon icon = {faEnvelope}/>
                    <a href = "mailto:salonunikatow@gmail.com"> salonunikatow@gmail.com</a>
                </div>
                <div className = "footer__item">
                    <FontAwesomeIcon icon = {faPhone}/>
                    <a href = "tel:+48662921155"> +48 662 921 155</a>
                </div>
                <div className = 'footer__social-media'>
                    <NavLink to = {EXTERNAL_LINKS.FACEBOOK} target = "_blank" aria-label='Facebook'>
                        <FontAwesomeIcon icon = {faSquareFacebook}/>
                    </NavLink>
                    <NavLink to = {EXTERNAL_LINKS.INSTAGRAM} target = "_blank" aria-label='Instagram'>
                        <FontAwesomeIcon icon = {faInstagram}/>
                    </NavLink>
                </div>
                <div className = "footer__allegro">
                     <NavLink to = {EXTERNAL_LINKS.ALLEGRO_ALL_AUCTIONS} target = "_blank" aria-label='Allegro'>
                        <img src = {allegro} alt = "" className = "footer__allegro-icon"/>
                    </NavLink>
                </div>
                <div className = "footer__copyright">
                    <FontAwesomeIcon icon = {faCopyright}/> {translate("COPYRIGHT")}
                    <NavLink to = "/privacyPolicy">
                        {translate("PRIVACY_POLICY")}
                    </NavLink>.
                </div>
            </div>
        </section>
    </>
}