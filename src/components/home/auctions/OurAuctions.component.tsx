import { AuctionsTile } from "./auctionsTile/AuctionsTile.component";
import "./OurAuctions.css";
import Teacups from '../../../assets/images/teacups.jpg';
import Clock from '../../../assets/images/clock.jpg';
import Meissen from '../../../assets/images/meissen.jpg';
import Rosenthal from '../../../assets/images/rosenthal.jpg';
import Watches from '../../../assets/images/clock.jpg';
import Figurines from '../../../assets/images/figurines.jpg';
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
                    />
                    <AuctionsTile 
                        to = {CustomLink.allegroRosenthal} 
                        imageLocation = {Rosenthal}
                        text = {translate("ROSENTHAL")}
                    />
                    <AuctionsTile 
                        to = {CustomLink.allegroClocksAndWatches} 
                        imageLocation = {Watches}
                        text = {translate("CLOCKS_AND_WATCHES")}
                    />
                </ul>
                <ul className="auctions_tiles">
                    <AuctionsTile 
                        to = {CustomLink.allegroMeissen} 
                        imageLocation = {Meissen}
                        text = {translate("MEISSEN")}
                    />
                    <AuctionsTile 
                        to = {CustomLink.allegroCups}
                        imageLocation = {Teacups}
                        text = {translate("CUPS")}
                    />
                    <AuctionsTile 
                        to = {CustomLink.allegroAllAuctions} 
                        imageLocation = {Clock}
                        text = {translate("ALL_AUCTIONS")}
                    />
                </ul>
            </div>
        </div>
    </div>
}