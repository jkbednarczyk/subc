import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { translate } from '../../lang/utils/TranslationUtils';
import { CustomContactItem } from '../common/customContactItem/CustomContactItem.component';
import { Footer } from '../footer/Footer.component';
import './PrivacyPolicy.css';
import { NavLink } from 'react-router-dom';
import { CustomLink } from '../common/CustomLink';

export const PrivacyPolicy = () => {
    return <>
        <section className="privacy_policy">
            <h1>{translate("PRIVACY_POLICY_PAGE.TITLE")}</h1>
                <p>{translate("PRIVACY_POLICY_PAGE.INTRODUCTION")}</p>
            <h2>{translate("PRIVACY_POLICY_PAGE.TITLE_1")}</h2>
                <p>{translate("PRIVACY_POLICY_PAGE.PARAGRAPH_1_1")}</p>
            <div>
            <CustomContactItem icon={faLocationDot}>
                    <p>
                        Salon Unikatów<br />
                        ul. Dekarzy 11<br />
                        30-414 Kraków
                    </p>
                </CustomContactItem>
                <CustomContactItem icon={faEnvelope}>
                    <a href="mailto:salonunikatow@gmail.com">salonunikatow@gmail.com</a>
                </CustomContactItem>
            </div>     
            <h2>{translate("PRIVACY_POLICY_PAGE.TITLE_2")}</h2>
                <h3>{translate("PRIVACY_POLICY_PAGE.SUBTITLE_2_1")}</h3>
                    <p>{translate("PRIVACY_POLICY_PAGE.PARAGRAPH_2_1")}</p>
                <h3>{translate("PRIVACY_POLICY_PAGE.SUBTITLE_2_2")}</h3>
                    <p className="outside_policy">{translate("PRIVACY_POLICY_PAGE.PARAGRAPH_2_2")}
                        <NavLink to = {CustomLink.web3FormsPrivacyPolicy} target="_blank">
                            {translate("PRIVACY_POLICY_PAGE.PARAGRAPH_2_LINK")}
                        </NavLink>.
                    </p>
            <h2>{translate("PRIVACY_POLICY_PAGE.TITLE_3")}</h2>
                <p className="outside_policy">{translate("PRIVACY_POLICY_PAGE.PARAGRAPH_3_1")}
                    <NavLink to = {CustomLink.allegroHomePage} target="_blank">
                        {translate("PRIVACY_POLICY_PAGE.PARAGRAPH_3_LINK")}
                    </NavLink>
                    {translate("PRIVACY_POLICY_PAGE.PARAGRAPH_3_2")}
                </p>
            <h2>{translate("PRIVACY_POLICY_PAGE.TITLE_4")}</h2>
                <p>{translate("PRIVACY_POLICY_PAGE.PARAGRAPH_4_1")}</p>
            <h2>{translate("PRIVACY_POLICY_PAGE.TITLE_5")}</h2>
                <p>{translate("PRIVACY_POLICY_PAGE.PARAGRAPH_5_1")}</p>
            <h2>{translate("PRIVACY_POLICY_PAGE.TITLE_6")}</h2>
                <p>{translate("PRIVACY_POLICY_PAGE.PARAGRAPH_6_1")}</p>
                <p>{translate("PRIVACY_POLICY_PAGE.PARAGRAPH_6_LIST_1")}</p>
                <p>{translate("PRIVACY_POLICY_PAGE.PARAGRAPH_6_LIST_2")}</p>
                <p>{translate("PRIVACY_POLICY_PAGE.PARAGRAPH_6_LIST_3")}</p>
                <p>{translate("PRIVACY_POLICY_PAGE.PARAGRAPH_6_LIST_4")}</p>
                <p>{translate("PRIVACY_POLICY_PAGE.PARAGRAPH_6_LIST_5")}</p>
                <p>{translate("PRIVACY_POLICY_PAGE.PARAGRAPH_6_2")}</p>
            <h2>{translate("PRIVACY_POLICY_PAGE.TITLE_7")}</h2>
                <p>{translate("PRIVACY_POLICY_PAGE.PARAGRAPH_7_1")}</p>
            <h2>{translate("PRIVACY_POLICY_PAGE.TITLE_8")}</h2>
                <p>{translate("PRIVACY_POLICY_PAGE.PARAGRAPH_8_1")}</p>
                <p></p>
                <p>{translate("PRIVACY_POLICY_PAGE.DATE")}</p>
                <p>{translate("PRIVACY_POLICY_PAGE.CLOSURE")}</p>
        </section>
        <Footer/>
    </>
};