import { LinkTile } from "../../common/linkTile/LinkTile.component";
import "./OurAuctions.css";
import { EXTERNAL_LINKS } from "../../common/utils/externalLinks";
import { translate } from "../../../lang/utils/TranslationUtils";
import Teacups from "../../../assets/images/teacups.jpg";
import Meissen from "../../../assets/images/meissen.jpg";
import Rosenthal from "../../../assets/images/rosenthal.jpg";
import Watches from "../../../assets/images/clock.jpg";
import Figurines from "../../../assets/images/figurines.jpg";
import Logo from "../../../assets/images/logo_redirect.png";

const AUCTION_ITEMS = [
  { to: EXTERNAL_LINKS.ALLEGRO_FIGURINES, image: Figurines, text: "FIGURINES", alt: "ALT.FIGURINES" },
  { to: EXTERNAL_LINKS.ALLERGO_ROSENTHAL, image: Rosenthal, text: "ROSENTHAL", alt: "ALT.ROSENTHAL" },
  { to: EXTERNAL_LINKS.ALLEGRO_CLOCKS_AND_WATCHES, image: Watches, text: "CLOCKS_AND_WATCHES", alt: "ALT.CLOCK" },
  { to: EXTERNAL_LINKS.ALLEGRO_MEISSEN, image: Meissen, text: "MEISSEN", alt: "ALT.MEISSEN" },
  { to: EXTERNAL_LINKS.ALLEGRO_CUPS, image: Teacups, text: "CUPS", alt: "ALT.TEACUPS" },
  { to: EXTERNAL_LINKS.ALLEGRO_ALL_AUCTIONS, image: Logo, text: "ALL_AUCTIONS", alt: "ALT.LOGO_REDIRECT" },
];

export const OurAuctions = () => {
  return (
    <div className = "our_auctions">
      <h1>{translate("OUR_OFFER")}</h1>
      <div className = "auctions_container">
        <div className = "links__wrapper">
          <p>{translate("OUR_OFFER_TEXT")}</p>
          <ul className = "links__tiles">
            {AUCTION_ITEMS.map((item, index) => (
              <li key = {index}>
                <LinkTile 
                  to = {item.to} 
                  imageLocation = {item.image} 
                  text = {translate(item.text)} 
                  alt = {translate(item.alt)} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
