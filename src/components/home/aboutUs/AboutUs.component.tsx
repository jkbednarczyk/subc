import { translate } from "../../../lang/utils/TranslationUtils";
import './AboutUs.css';

export const AboutUs  = () => {
    return <div className="about_us">
        <h1>{translate("ABOUT_US_HP")}</h1>
        <div className="about_us_text">
            <p>{translate("WHO_WE_ARE")}</p>
            <p>{translate("OUR_WORK")}</p>
        </div>
    </div>
}