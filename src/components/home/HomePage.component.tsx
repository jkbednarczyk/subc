import './HomePage.css';
import Clock from '../../assets/images/clock.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faEnvelope} from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import '../../fontawesome.config';
import { NavLink } from "react-router-dom";
import allegro from "../../assets/images/allegro.svg"
import { translate } from '../../lang/utils/TranslationUtils';
import { OurAuctions } from '../auctions/OurAuctions.component';
import { CustomLink } from '../common/CustomLink';


export const HomePage = () => {

    return <>
        <section className="home">
            <div className="content">
                <h1>Salon Unikatów</h1>
                <p>{translate("MOTTO")}</p>
            </div>
        </section>
        <section className="introduction">
            <OurAuctions/>
        </section>
        <section className="footer">
            <div className="footer-content">
                <div className="footer-item">
                    <FontAwesomeIcon icon={faLocationDot}/> Kraków, Małopolska
                </div>
                <div className="footer-item">
                    <FontAwesomeIcon icon={faEnvelope}/> salonunikatow@gmail.com
                </div>
                <div className="footer-item">
                    <FontAwesomeIcon icon={faPhone}/> +48 662 921 155
                </div>
                <div className='footer-instagram'>
                    <NavLink to = {CustomLink.instagramPage} target="_blank">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </NavLink>
                </div>
                <div className="footer-allegro">
                     <NavLink to = {CustomLink.allegroAllAuctions} target="_blank">
                        <img src={allegro} alt="" className="footer-allegro-icon"/>
                    </NavLink>
                </div>
                <div className="footer-copyright">
                    <FontAwesomeIcon icon={faCopyright}/> {translate("COPYRIGHT")}
                    <NavLink to="/privacyPolicy">
                        {translate("PRIVACY_POLICY")}
                    </NavLink>.
                </div>
            </div>
        </section>
    </>
};