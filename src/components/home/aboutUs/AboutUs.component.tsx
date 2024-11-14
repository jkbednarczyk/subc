import { translate } from "../../../lang/utils/TranslationUtils";
import './AboutUs.css';
import Camera from '../../../assets/images/camera.jpg';
import Atmos from '../../../assets/images/atmos.jpg';
import Lady from '../../../assets/images/lady.jpg';
import { AnimatedPhotoTile } from "../../common/animatedPhotoTile/AnimatedPhotoTile.component";

export const AboutUs  = () => {
    return <div className="about_us">
        <h1>{translate("ABOUT_US")}</h1>
        <div className="about_us_text">
            <p>{translate("WHO_WE_ARE")}</p>
            <p>{translate("OUR_WORK")}</p>
        </div>
        <div className="about_us_photo_container">
            <div className="about_us_photo_wrapper">
                <ul className="about_us_photo_tiles">
                    <AnimatedPhotoTile
                        imageLocation = {Camera}/>
                    <AnimatedPhotoTile
                        imageLocation = {Atmos}/>
                    <AnimatedPhotoTile
                        imageLocation = {Lady}/>
                </ul>
            </div>
        </div>
    </div>
}