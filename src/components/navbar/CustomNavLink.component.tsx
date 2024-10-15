import { FC } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

interface CustomNavLinkProps {
    to: string;
    text: string;
    onClick: any;
    target?: string;
}

export const CustomNavLink: FC<CustomNavLinkProps> = (props) => {
    return <>
        <li className = "nav__item">
            <NavLink   
                to = {props.to} 
                className = "nav__link"
                target = {props.target} 
                onClick = {props.onClick}
                >
                {props.text}
            </NavLink>
        </li>
    </>
}