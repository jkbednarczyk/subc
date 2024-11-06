import { translate } from "../../../lang/utils/TranslationUtils";
import './AboutUs.css';
import Teacups from '../../../assets/images/teacups2.jpg';
import Clock from '../../../assets/images/clock2.jpg';
import Meissen from '../../../assets/images/meissen2.jpg';
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
                        imageLocation = {Teacups}/>
                    <AnimatedPhotoTile
                        imageLocation = {Meissen}/>
                    <AnimatedPhotoTile
                        imageLocation = {Clock}/>
                </ul>
            </div>
        </div>
    </div>
}