import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { translate } from '../../lang/utils/TranslationUtils';
import { CustomLink } from '../common/CustomLink';
import allegro from "../../assets/images/allegro.svg"
import { faCopyright, faEnvelope} from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {

    return <>
        <section className = "footer">
            <div className = "footer-content">
                <div className = "footer-item">
                    <FontAwesomeIcon icon = {faLocationDot}/> Kraków, Małopolska
                </div>
                <div className = "footer-item">
                    <FontAwesomeIcon icon = {faEnvelope}/>
                    <a href = "mailto:salonunikatow@gmail.com"> salonunikatow@gmail.com</a>
                </div>
                <div className = "footer-item">
                    <FontAwesomeIcon icon = {faPhone}/>
                    <a href = "tel:+48662921155"> +48 662 921 155</a>
                </div>
                <div className = 'footer-social-media'>
                    <NavLink to = {CustomLink.facebook} target = "_blank">
                        <FontAwesomeIcon icon = {faSquareFacebook}/>
                    </NavLink>
                    <NavLink to = {CustomLink.instagramPage} target = "_blank">
                        <FontAwesomeIcon icon = {faInstagram}/>
                    </NavLink>
                </div>
                <div className = "footer-allegro">
                     <NavLink to = {CustomLink.allegroAllAuctions} target = "_blank">
                        <img src = {allegro} alt = "" className = "footer-allegro-icon"/>
                    </NavLink>
                </div>
                <div className = "footer-copyright">
                    <FontAwesomeIcon icon = {faCopyright}/> {translate("COPYRIGHT")}
                    <NavLink to = "/privacyPolicy">
                        {translate("PRIVACY_POLICY")}
                    </NavLink>.
                </div>
            </div>
        </section>
    </>
}