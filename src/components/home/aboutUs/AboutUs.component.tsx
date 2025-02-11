import { translate } from "../../../lang/utils/TranslationUtils";
import './AboutUs.css';
import Camera from '../../../assets/images/camera.jpg';
import Atmos from '../../../assets/images/atmos.jpg';
import Lady from '../../../assets/images/lady.jpg';
import { AnimatedPhotoTile } from "../../common/animatedPhotoTile/AnimatedPhotoTile.component";
import { useEffect, useState } from "react";

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
        <div className = "about_us_text">
            <p>{translate("WHO_WE_ARE")}</p>
            <p>{translate("OUR_WORK")}</p>
        </div>
        <div className = "about_us_photo_container">
            <div className = "about_us_photo_wrapper">
            {windowWidth >= 1150 &&
                <ul className = "about_us_photo_tiles">
                    <AnimatedPhotoTile
                        imageLocation = {Camera}
                        alt = {translate("ALT.CAMERA")}/>
                    <AnimatedPhotoTile
                        imageLocation = {Atmos}
                        alt = {translate("ALT.ATMOS")}/>
                    <AnimatedPhotoTile
                        imageLocation = {Lady}
                        alt = {translate("ALT.LADY")}/>
                </ul>}
            </div>
        </div>
    </div>
}