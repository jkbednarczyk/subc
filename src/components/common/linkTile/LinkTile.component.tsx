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
        <div className = "link_tile">
            <NavLink className = "link_tile_link" to = {props.to} target = "_blank">
                <figure className = "link_tile_pic_wrap">
                    <img src = {props.imageLocation} alt = {props.alt} className = "link_tile_img" />
                </figure>
                <div className = "link_tile_info">
                    <h5 className = "link_tile_text">
                        {props.text}
                    </h5>
                </div>
            </NavLink>
        </div>
    </>
}