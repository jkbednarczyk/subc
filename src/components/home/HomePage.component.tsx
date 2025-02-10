import './HomePage.css';
import '../../fontawesome.config';
import { translate } from '../../lang/utils/TranslationUtils';
import { OurAuctions } from './auctions/OurAuctions.component';
import { AboutUs } from './aboutUs/AboutUs.component';
import { Footer } from '../footer/Footer.component';
import { Helmet } from 'react-helmet-async';
import { Metadata } from '../common/utils/metadata';


export const HomePage = () => {

    return <>
        <Helmet>
            <title>{Metadata.homeTitle}</title>
            <meta 
                name = "description" 
                content = {Metadata.homeDescription}/>
        </Helmet>
        <section className="home">
            <div className="content">
                <h1>Salon Unikatów</h1>
                <p>{translate("MOTTO")}</p>
            </div>
        </section>
        <section className="introduction">
            <OurAuctions/>
            <AboutUs />
        </section>
        <Footer/>
    </>
};