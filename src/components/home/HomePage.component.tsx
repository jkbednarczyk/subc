import './HomePage.css';
import Clock from '../../assets/images/clock.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faEnvelope} from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import '../../fontawesome.config';
import { NavLink } from "react-router-dom";
import allegro from "../../assets/images/allegro.svg"

export const HomePage = () => {

    return <>
        <section className="home">
            <div className="content">
                <h1>Salon Unikatów</h1>
                <p>Z Nami Odkryjesz Piękno Przeszłości</p>
            </div>
        </section>
        <section className="introduction">
            <div className="intro-content">
            <img src={Clock} alt="" className="intro-image" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut erat in purus accumsan placerat. Vestibulum imperdiet ornare turpis, non semper sapien commodo nec. Quisque dolor mauris, euismod vitae sagittis et, sodales id sem. Sed et convallis felis. Fusce eu pretium ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vitae urna magna. Morbi scelerisque nisl dapibus mollis tristique. Mauris ullamcorper felis nunc, non mattis lacus condimentum ac. Phasellus at augue et arcu sagittis consequat sed sed leo.
                </p>
            </div>
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
                    <NavLink to="https://www.instagram.com/salon_unikatow/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </NavLink>
                </div>
                <div className="footer-allegro">
                     <NavLink to="https://allegro.pl/uzytkownik/SalonUnikatow/" target="_blank">
                        <img src={allegro} alt="" className="footer-allegro-icon"/>
                    </NavLink>
                </div>
                <div className="footer-copyright">
                    <FontAwesomeIcon icon={faCopyright}/> 2024 Salon Unikatów. Zapoznaj się z 
                    <a href={"/privacyPolicy"}>{" polityką prywatności"}</a>.
                </div>
            </div>
        </section>
    </>
};