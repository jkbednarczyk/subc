import './AboutUsPage.css';
import { translate } from '../../lang/utils/TranslationUtils';

export const AboutUsPage = () => {
    return <>
        <section className="about_us">
            <div className="about_us_content">
                <p>{translate("ABOUT_US_PAGE.WELCOME")}</p>
                <p>{translate("ABOUT_US_PAGE.MEMORIES")}</p>
                <p>{translate("ABOUT_US_PAGE.APPROACH")}</p>
                <p>{translate("ABOUT_US_PAGE.INVITATION")}</p>
            </div>
        </section>
    </>
}