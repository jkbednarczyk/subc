import { Helmet } from "react-helmet-async";
import { METADATA } from "../common/utils/metadata";
import "./AboutPage.css";
import { Footer } from "../footer/Footer.component";
import Napoleon from "../../assets/images/napoleon.jpg"
import { IconTile } from "../common/iconTile/IconTIle.component";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaDolly, FaMagnifyingGlass, FaHandshake } from "react-icons/fa6";
import { translate } from "../../lang/utils/TranslationUtils";

export const AboutPage = () => {
    return <>
        <Helmet>
            <title>{METADATA.ABOUT_TITLE}</title>
            <meta 
                name = "description" 
                content = {METADATA.ABOUT_DESCRIPTION} />
        </Helmet>
        <section className = "about_hero">
            <h1>{translate("ABOUT_PAGE.TITLE")}</h1>
            <h2>{translate("ABOUT_PAGE.SUBTITLE")}</h2>
        </section>
        <section className = "about">
            <div className = "about__content-wrapper">
                <div className = "about__text-container">
                    <h3>{translate("ABOUT_PAGE.MISSION_TITLE")}</h3>
                    <p>{translate("ABOUT_PAGE.MISSION_1")}</p>
                    <p>{translate("ABOUT_PAGE.MISSION_2")}</p>
                    <h3>{translate("ABOUT_PAGE.COLLECTION_ORIGIN_TITLE")}</h3>
                    <p>{translate("ABOUT_PAGE.COLLECTION_ORIGIN_1")}</p>
                    <p>{translate("ABOUT_PAGE.COLLECTION_ORIGIN_2")}</p>
                    <h3>{translate("ABOUT_PAGE.CHARACTERISTICS_TITLE")}</h3>
                    <p>{translate("ABOUT_PAGE.CHARACTERISTICS_1")}</p>
                    <p>{translate("ABOUT_PAGE.CHARACTERISTICS_2")}</p>
                </div>
                <div className = "about__image-container">
                    <img src = {Napoleon} alt = "About Us" className = "about__image" />  
                    <p>{translate("ABOUT_PAGE.QUOTE")}</p> 
                </div>
            </div>
            <div className = "about__tiles-container">
                <IconTile 
                    icon = {<FaMagnifyingGlass/>} 
                    title = {translate("ABOUT_PAGE.TILE_1")} />
                <IconTile 
                    icon = {<FaDolly/>} 
                    title = {translate("ABOUT_PAGE.TILE_2")} />
                <IconTile 
                    icon = {<FaHandshake/>} 
                    title = {translate("ABOUT_PAGE.TILE_3")} /> 
                <IconTile 
                    icon = {<IoMdCheckmarkCircleOutline/>} 
                    title = {translate("ABOUT_PAGE.TILE_4")} />            
            </div>
        </section>
        <Footer/>
    </>
};