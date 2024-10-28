import './PurchasePage.css';
import { translate } from '../../lang/utils/TranslationUtils';
import {faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { CustomContactItem } from '../common/customContactItem/CustomContactItem.component';
import { Footer } from '../footer/Footer.component';


export const PurchasePage = () => {
    return <>
        <section className="purchase">
            <h1>{translate("PURCHASE.TITLE")}</h1>
            <div className="purchase_page_content">
                <p>{translate("PURCHASE.FIRST")}</p>
                <p>{translate("PURCHASE.SECOND")}</p>
                <p>{translate("PURCHASE.THIRD")}</p>
                <p>{translate("PURCHASE.FOURTH")}</p>
                <p>{translate("PURCHASE.FIFTH")}</p>      
            </div>
            <h2>{translate("PURCHASE.CONTACT")}</h2>
            <ul className="purchase_contact">
                <CustomContactItem icon={faEnvelope}>
                    <a href="mailto:salonunikatow@gmail.com">salonunikatow@gmail.com</a>
                </CustomContactItem>
                <CustomContactItem icon={faPhone}>
                    <a href="tel:+48662921155">+48 662 921 155</a>
                </CustomContactItem>
            </ul>
        </section>
        <Footer/>
    </>
}