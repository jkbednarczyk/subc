import{ FC, useState } from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {translate} from '../../lang/utils/TranslationUtils';
import { useTranslation } from "react-i18next";
import { CustomLink } from "../common/CustomLink";
import {CustomNavLink} from "./CustomNavLink.component";
import Logo from '../../assets/images/main_logo.png';

interface NavbarProps {
  language: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [t, i18n] = useTranslation("global");
  const [currentLang, setCurrentLang] = useState<string>(props.language);

  const handleLanguageChange = (lang: string) => {
    const afterChange: string = lang === "pl" ? "eng" : "pl"; 
    setCurrentLang(afterChange);
    i18n.changeLanguage(afterChange);
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToTopAndCloseMenuOnMobile = () => {
    window.scrollTo(0, 0);
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          <img src={Logo} alt="" className="nav_logo_img"/>
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <CustomNavLink 
              to = "/"
              onClick = {scrollToTopAndCloseMenuOnMobile}
              text = {translate("NAVBAR.HOME")}
            />
            <CustomNavLink 
              to = {CustomLink.allegroAllAuctions}
              onClick = {scrollToTopAndCloseMenuOnMobile}
              text = {translate("NAVBAR.OUR_AUCTIONS")}
              target = "_blank"
            />
            <CustomNavLink 
              to = "/about"
              onClick = {scrollToTopAndCloseMenuOnMobile}
              text = {translate("NAVBAR.ABOUT_US")}
            />
            <CustomNavLink 
              to = "/purchase"
              onClick = {scrollToTopAndCloseMenuOnMobile}
              text = {translate("NAVBAR.PURCHASE")}
            />
            <CustomNavLink 
              to = "/contact"
              onClick = {scrollToTopAndCloseMenuOnMobile}
              text = {translate("NAVBAR.CONTACT")}
            />
            <li className="nav__item">
              <button className="nav__lang" onClick={() => handleLanguageChange(currentLang)}>
                <FontAwesomeIcon icon={faGlobe} className="button_icon" />
                <span>PL | ENG</span>
              </button>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};