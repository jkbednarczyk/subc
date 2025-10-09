import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./LinkTile.css";

interface LinkTileProps {
    to: string;
    imageLocation: string;
    text: string;
    alt: string;
}

export const LinkTile: FC<LinkTileProps> = (props) => {
    return <>
        <div className = "link-tile">
            <NavLink className = "link-tile__link" to = {props.to} target = "_blank">
                <figure className = "link-tile__pic-wrap">
                    <img src = {props.imageLocation} alt = {props.alt} className = "link-tile__img" />
                </figure>
                <div className = "link-tile__info">
                    <h2 className = "link-tile__text">
                        {props.text}
                    </h2>
                </div>
            </NavLink>
        </div>
    </>
}