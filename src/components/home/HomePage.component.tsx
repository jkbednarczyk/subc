import './HomePage.css';
import '../../fontawesome.config';
import { translate } from '../../lang/utils/TranslationUtils';
import { OurAuctions } from './auctions/OurAuctions.component';
import { AboutUs } from './aboutUs/AboutUs.component';
import { Footer } from '../footer/Footer.component';
import { Helmet } from 'react-helmet-async';
import { METADATA } from '../common/utils/metadata';
import { EXTERNAL_LINKS } from '../common/utils/externalLinks';


export const HomePage = () => {

    const handleClick = () => {
        window.open(EXTERNAL_LINKS.ALLEGRO_ALL_AUCTIONS, "_blank");
      };

    return <>
        <Helmet>
            <title>{METADATA.HOME_TITLE}</title>
            <meta 
                name = "description" 
                content = {METADATA.HOME_DESCRIPTION}/>
        </Helmet>
        <section className = "home">
            <div className = "content">
                <h1>Salon Unikatów</h1>
                <p>{translate("MOTTO")}</p>
                <button 
                    className = "home-button"
                    onClick = {handleClick}>
                    {translate("OUR_OFFER")}
                </button>
            </div>
        </section>
        <section className = "introduction">
            <OurAuctions/>
            <AboutUs />
        </section>
        <Footer/>
    </>
};