import { AuctionsTile } from "./auctionsTile/AuctionsTile.component";
import "./OurAuctions.css";
import Teacup from '../../assets/images/teacup.png';
import Clock from '../../assets/images/clock.png';
import Meissen from '../../assets/images/meissen.webp';
import Rosenthal from '../../assets/images/rosenthal.jpg';
import Watches from '../../assets/images/watches.jpg';
import { CustomLink } from "../common/CustomLink";


export const OurAuctions = () => {
    return <div className="auctions">
        <h1>Nasze aukcje</h1>
        <div className="auctions_container">
            <div className="auctions_wrapper">
                <ul className="auctions_tiles">
                    <AuctionsTile 
                        to = {CustomLink.allegroFigurines}
                        imageLocation={Teacup}
                        text="Figurki porcelanowe"
                    />
                    <AuctionsTile 
                        to = {CustomLink.allegroRosenthal} 
                        imageLocation={Rosenthal}
                        text="Porcelana Rosenthal"
                    />
                    <AuctionsTile 
                        to = {CustomLink.allegroClocksAndWatches} 
                        imageLocation={Watches}
                        text="Zegary i zegarki"
                    />
                </ul>
                <ul className="auctions_tiles">
                    <AuctionsTile 
                        to = {CustomLink.allegroMeissen} 
                        imageLocation={Meissen}
                        text="Miśnia"
                    />
                    <AuctionsTile 
                        to = {CustomLink.allegroNineteenthCentury}
                        imageLocation={Teacup}
                        text="XIX wiek"
                    />
                    <AuctionsTile 
                        to = {CustomLink.allegroAllAuctions} 
                        imageLocation={Clock}
                        text="Wszystkie aukcje"
                    />
                </ul>
            </div>
        </div>
    </div>
}