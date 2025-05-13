import { translate } from "../../../lang/utils/TranslationUtils";
import './AboutUs.css';
import Camera from '../../../assets/images/camera.jpg';
import Atmos from '../../../assets/images/atmos.jpg';
import Lady from '../../../assets/images/lady.jpg';
import { ContentSection } from "../../common/contentSection/ContentSection.component";
import { NavLink } from "react-router-dom";
import { EXTERNAL_LINKS } from "../../common/utils/externalLinks";

export const AboutUs  = () => {

    return <div className = "about_us">
        <h1>{translate("WELCOME")}</h1>
        <p>{translate("WHO_WE_ARE")}</p>
        <ContentSection 
            text = {translate("OUR_WORK")}  
            imgSrc = {Camera}
            alt = {translate("ALT.CAMERA")}         
            />
        <ContentSection 
            text = {translate("APPROACH")}  
            imgSrc={Atmos}
            alt = {translate("ALT.ATMOS")}
            reverse        
            />
        <ContentSection 
            text = {translate("CUSTOMERS")}  
            imgSrc = {Lady}
            alt = {translate("ALT.LADY")}         
            />
        <p>
            {translate("CUSTOMERS_COMMENTS")}
            <NavLink to = {EXTERNAL_LINKS.ALLEGRO_COMMENTS} target="_blank">
                {translate("COMMENTS_LINK")}
            </NavLink>.
        </p>
        <p className = "about_us__thanks">
            {translate("THANK_YOU")}
        </p>
    </div>
}