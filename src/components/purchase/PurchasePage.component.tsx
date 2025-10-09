import './PurchasePage.css';
import { translate } from '../../lang/utils/TranslationUtils';
import {faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { CustomContactItem } from '../common/customContactItem/CustomContactItem.component';
import { Footer } from '../footer/Footer.component';
import { Helmet } from 'react-helmet-async';
import { METADATA } from '../common/utils/metadata';
import { useNavigate } from 'react-router-dom';
import { IconTile } from '../common/iconTile/IconTIle.component';
import { IoShieldCheckmark, IoBriefcase, IoPersonSharp } from "react-icons/io5";


export const PurchasePage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/contact");
        window.scrollTo(0, 0);
    };

    return <>
        <Helmet>
            <title>{METADATA.PURCHASE_TITLE}</title>
            <meta 
                name = "description" 
                content = {METADATA.PURCHASE_DESCRIPTION}/>
        </Helmet>
        <section className="purchase__hero">
            <h1>{translate("PURCHASE.TITLE")}</h1>
        </section>
        <section className="purchase">
            <div className="purchase__page-content">
                <p>{translate("PURCHASE.FIRST")}</p>
                <p>{translate("PURCHASE.SECOND")}</p>
                <p>{translate("PURCHASE.THIRD")}</p>
                <p>{translate("PURCHASE.FOURTH")}</p>
                <p>{translate("PURCHASE.FIFTH")}</p>      
            </div>
            <div className = "purchase__additional-info">
                <div className = "purchse__why">
                    <h1>{translate("PURCHASE.WHY")}</h1>
                    <IconTile 
                        icon = {<IoShieldCheckmark/>} 
                        title = {translate("PURCHASE.SAFETY")}/>
                    <IconTile 
                        icon = {<IoBriefcase />} 
                        title = {translate("PURCHASE.PROFESSIONALISM")}/>
                    <IconTile 
                        icon = {<IoPersonSharp />} 
                        title = {translate("PURCHASE.CLIENT")}/>
                </div>
                <div className="purchase__contact">
                    <button 
                        onClick = {handleClick}>
                            {translate("PURCHASE.CONTACT")}
                    </button>
                    <CustomContactItem icon={faEnvelope}>
                        <a href="mailto:salonunikatow@gmail.com">salonunikatow@gmail.com</a>
                    </CustomContactItem>
                    <CustomContactItem icon={faPhone}>
                        <a href="tel:+48662921155">+48 662 921 155</a>
                    </CustomContactItem>
                </div>
            </div>
        </section>
        <Footer/>
    </>
}