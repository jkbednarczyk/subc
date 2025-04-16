import { translate } from "../../../lang/utils/TranslationUtils";
import './AboutUs.css';
import Camera from '../../../assets/images/camera.jpg';
import Atmos from '../../../assets/images/atmos.jpg';
import Lady from '../../../assets/images/lady.jpg';
import Ens from '../../../assets/images/ens.jpg';
import AlbertClock from '../../../assets/images/albert_clock.jpg';
import { AnimatedPhotoTile } from "../../common/animatedPhotoTile/AnimatedPhotoTile.component";
import { useEffect, useState } from "react";
import { ContentSection } from "../../common/contentSection/ContentSection.component";

export const AboutUs  = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
    
            // Cleanup event listener
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

    return <div className = "about_us">
        <h1>{translate("ABOUT_US")}</h1>
        <ContentSection 
            text = {translate("WHO_WE_ARE")}  
            imgSrc = {Camera}
            alt = {translate("ALT.CAMERA")}         
            />
        <ContentSection 
            text = {translate("OUR_WORK")}  
            imgSrc={Atmos}
            alt = {translate("ALT.ATMOS")}
            reverse        
            />
        <div className = "about_us_photo_container">
            <div className = "about_us_photo_wrapper">
            {windowWidth >= 1150 &&
                <ul className = "about_us_photo_tiles">
                    <AnimatedPhotoTile
                        imageLocation = {Ens}
                        alt = {translate("ALT.ENS")}/>
                    <AnimatedPhotoTile
                        imageLocation = {AlbertClock}
                        alt = {translate("ALT.ALBERT_CLOCK")}/>
                    <AnimatedPhotoTile
                        imageLocation = {Lady}
                        alt = {translate("ALT.LADY")}/>
                </ul>}
            </div>
        </div>
    </div>
}