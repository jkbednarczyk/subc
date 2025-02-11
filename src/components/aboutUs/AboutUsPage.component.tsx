import './AboutUsPage.css';
import { translate } from '../../lang/utils/TranslationUtils';
import {Galleria, GalleriaResponsiveOptions} from 'primereact/galleria';
import { useState, useEffect } from 'react';
import { PhotoService } from './PhotoService.service';
import Camera from '../../assets/images/block_camera.jpg';
import DancingLady from '../../assets/images/dancing_lady.jpg';
import Napoleon from '../../assets/images/napoleon.jpg';
import { NavLink } from 'react-router-dom';
import { EXTERNAL_LINKS } from '../common/utils/externalLinks';
import { Footer } from '../footer/Footer.component';
import { Helmet } from 'react-helmet-async';
import { METADATA } from '../common/utils/metadata';

export const AboutUsPage = () => {
    const [images, setImages] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const responsiveOptions: GalleriaResponsiveOptions[] = [
        {
            breakpoint: '991px',
            numVisible: 3
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 2
        }
    ];

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        // Cleanup event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        PhotoService.getImages().then((data: any) => setImages(data));
    }, []);

    const itemTemplate = (item: any) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item: any) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} />
    }

    return <>
        <Helmet>
            <title>{METADATA.ABOUT_TITLE}</title>
            <meta 
                name = "description" 
                content = {METADATA.ABOUT_DESCRIPTION} />
        </Helmet>
        <section className = "about_us_page">
            <ul className = "about_us_content_container">
                <li className = 'about_us_photo_tile'>
                    <figure className = "about_us_pic_wrap">
                        <img src={Camera} alt = {translate("ALT.BLOCK_CAMERA")} className = "about_us_photo_tile_img"/>
                    </figure>
                </li>
                <li className="about_us_content_text">
                    <p>{translate("ABOUT_US_PAGE.WELCOME")}</p>
                    <p>{translate("ABOUT_US_PAGE.MEMORIES")}</p>
                    <p>{translate("ABOUT_US_PAGE.APPROACH")}</p>
                    <p>{translate("ABOUT_US_PAGE.INVITATION")}</p>
                </li>
            </ul>
            <h2>{translate("ABOUT_US_PAGE.CUSTOMERS")}</h2>
            <ul className = "about_us_content_container">
                <li className = "about_us_comments_intro">
                    <p>
                        {translate("ABOUT_US_PAGE.CUSTOMERS_TEXT")}
                        <NavLink to = {EXTERNAL_LINKS.ALLEGRO_COMMENTS} target="_blank">
                            {translate("ABOUT_US_PAGE.COMMENTS_LINK")}
                        </NavLink>.
                    </p>
                    {windowWidth >= 1150 &&
                    <ul className = "about_us_photo_tiles_wrap">
                        <li className = 'about_us_photo_tile'>
                            <figure className = "about_us_pic_wrap">
                                <img src = {DancingLady} alt = {translate("ALT.DANCING_LADY")} className = "about_us_photo_tile_img"/>
                            </figure>
                        </li>
                        <li className = 'about_us_photo_tile'>
                            <figure className = "about_us_pic_wrap">
                                <img src={Napoleon} alt = {translate("ALT.NAPOLEON")} className = "about_us_photo_tile_img"/>
                            </figure>
                        </li>
                    </ul> }
                </li>
                <li className = "about_us_comments">
                    <Galleria 
                        value = {images} 
                        responsiveOptions = {responsiveOptions} 
                        numVisible = {3}  
                        item = {itemTemplate} 
                        thumbnail = {thumbnailTemplate} 
                        circular 
                        autoPlay 
                        transitionInterval = {4000}
                    />
                </li>
            </ul>
        </section>
        <Footer/>
    </>
}