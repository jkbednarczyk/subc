import{ FC, useState } from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export const Navbar: FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          Salon Unikatów
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/about-us" className="nav__link" onClick={closeMenuOnMobile}>
                O Nas
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="https://allegro.pl/uzytkownik/SalonUnikatow" target="_blank" className="nav__link" onClick={closeMenuOnMobile}>
                Nasze Aukcje
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/contact" className="nav__link" onClick={closeMenuOnMobile}>
                Kontakt
              </NavLink>
            </li>
            <li className="nav__item">
              <button className="nav__lang">
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