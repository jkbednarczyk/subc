import { AuctionsTile } from "./auctionsTile/AuctionsTile.component";
import "./OurAuctions.css";
import Teacups from '../../../assets/images/teacups.jpg';
import Meissen from '../../../assets/images/meissen.jpg';
import Rosenthal from '../../../assets/images/rosenthal.jpg';
import Watches from '../../../assets/images/clock.jpg';
import Figurines from '../../../assets/images/figurines.jpg';
import Logo from '../../../assets/images/logo_redirect.png';
import { CustomLink } from "../../common/CustomLink";
import {translate} from '../../../lang/utils/TranslationUtils';


export const OurAuctions = () => {
    return <div className="auctions">
        <h1>{translate("OUR_OFFER")}</h1>
        <div className="auctions_container">
            <div className="auctions_wrapper">
            <p>{translate("OUR_OFFER_TEXT")}</p>
                <ul className="auctions_tiles">
                    <AuctionsTile 
                        to = {CustomLink.allegroFigurines}
                        imageLocation = {Figurines}
                        text = {translate("FIGURINES")}
                        alt = {translate("ALT.FIGURINES")}
                    />
                    <AuctionsTile 
                        to = {CustomLink.allegroRosenthal} 
                        imageLocation = {Rosenthal}
                        text = {translate("ROSENTHAL")}
                        alt = {translate("ALT.ROSENTHAL")}
                    />
                    <AuctionsTile 
                        to = {CustomLink.allegroClocksAndWatches} 
                        imageLocation = {Watches}
                        text = {translate("CLOCKS_AND_WATCHES")}
                        alt = {translate("ALT.CLOCK")}
                    />
                </ul>
                <ul className="auctions_tiles">
                    <AuctionsTile 
                        to = {CustomLink.allegroMeissen} 
                        imageLocation = {Meissen}
                        text = {translate("MEISSEN")}
                        alt = {translate("ALT.MEISSEN")}
                    />
                    <AuctionsTile 
                        to = {CustomLink.allegroCups}
                        imageLocation = {Teacups}
                        text = {translate("CUPS")}
                        alt = {translate("ALT.TEACUPS")}
                    />
                    <AuctionsTile 
                        to = {CustomLink.allegroAllAuctions} 
                        imageLocation = {Logo}
                        text = {translate("ALL_AUCTIONS")}
                        alt = {translate("ALT.LOGO_REDIRECT")}
                    />
                </ul>
            </div>
        </div>
    </div>
}