import { FC } from "react";
import { NavLink } from "react-router-dom";
import "../OurAuctions.css"

interface AuctionsTileProps {
    to: string;
    imageLocation: string;
    text: string;
}

export const AuctionsTile: FC<AuctionsTileProps> = (props) => {
    return <>
        <li className="auctions_tile">
            <NavLink className="auctions_tile_link" to={props.to} target="_blank">
                <figure className="auctions_tile_pic_wrap">
                    <img src={props.imageLocation} alt="" className="auctions_tile_img" />
                </figure>
                <div className="auctions_tile_info">
                    <h5 className="auctions_tile_text">
                        {props.text}
                    </h5>
                </div>
            </NavLink>
        </li>
    </>
}