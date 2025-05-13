import { translate } from "../../../lang/utils/TranslationUtils";
import './AboutUs.css';
import Camera from '../../../assets/images/camera.jpg';
import Atmos from '../../../assets/images/atmos.jpg';
import Lady from '../../../assets/images/lady.jpg';
import Comment1 from '../../../assets/images/comments/1.png';
import Comment2 from '../../../assets/images/comments/2.png';
import Comment3 from '../../../assets/images/comments/3.png';
import Comment4 from '../../../assets/images/comments/4.png';
import Comment5 from '../../../assets/images/comments/5.png';
import Comment6 from '../../../assets/images/comments/6.png';
import Comment7 from '../../../assets/images/comments/7.png';
import Comment8 from '../../../assets/images/comments/8.png';
import { ContentSection } from "../../common/contentSection/ContentSection.component";
import { NavLink } from "react-router-dom";
import { EXTERNAL_LINKS } from "../../common/utils/externalLinks";
import { AutoCarousel } from "../../common/autoCarousel/AutoCarousel.component";

export const AboutUs  = () => {

    const imagesSrc: string[] = [
        Comment1,
        Comment2,
        Comment3,
        Comment4,
        Comment5,
        Comment6,
        Comment7,
        Comment8
    ];

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
        <AutoCarousel 
            images = {imagesSrc}/>
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