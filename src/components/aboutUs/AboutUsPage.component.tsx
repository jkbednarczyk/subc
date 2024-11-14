import './AboutUsPage.css';
import { translate } from '../../lang/utils/TranslationUtils';
import {Galleria, GalleriaResponsiveOptions} from 'primereact/galleria';
import { useState, useEffect } from 'react';
import { PhotoService } from './PhotoService.service';
import Camera from '../../assets/images/block_camera.jpg';
import DancingLady from '../../assets/images/dancing_lady.jpg';
import Napoleon from '../../assets/images/napoleonjpg.jpg';
import { NavLink } from 'react-router-dom';
import { CustomLink } from '../common/CustomLink';
import { Footer } from '../footer/Footer.component';

export const AboutUsPage = () => {
    const [images, setImages] = useState([]);
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
        PhotoService.getImages().then((data: any) => setImages(data));
    }, []);

    const itemTemplate = (item: any) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item: any) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} />
    }

    return <>
        <section className="about_us_page">
            <div className="about_us_content_container">
                <div className='about_us_photo_tile'>
                    <figure className="about_us_pic_wrap">
                        <img src={Camera} alt="" className="about_us_photo_tile_img"/>
                    </figure>
                </div>
                <div className="about_us_content_text">
                    <p>{translate("ABOUT_US_PAGE.WELCOME")}</p>
                    <p>{translate("ABOUT_US_PAGE.MEMORIES")}</p>
                    <p>{translate("ABOUT_US_PAGE.APPROACH")}</p>
                    <p>{translate("ABOUT_US_PAGE.INVITATION")}</p>
                </div>
            </div>
            <h1>{translate("ABOUT_US_PAGE.CUSTOMERS")}</h1>
            <div className="about_us_content_container">
                <div className="about_us_comments_intro">
                    <p>
                        {translate("ABOUT_US_PAGE.CUSTOMERS_TEXT")}
                        <NavLink to = {CustomLink.allegroComments} target="_blank">
                            {translate("ABOUT_US_PAGE.COMMENTS_LINK")}
                        </NavLink>.
                    </p>
                    <ul className="about_us_photo_tiles_wrap">
                        <div className='about_us_photo_tile'>
                            <figure className="about_us_pic_wrap">
                                <img src={DancingLady} alt="" className="about_us_photo_tile_img"/>
                            </figure>
                        </div>
                        <div className='about_us_photo_tile'>
                            <figure className="about_us_pic_wrap">
                                <img src={Napoleon} alt="" className="about_us_photo_tile_img"/>
                            </figure>
                        </div>
                    </ul> 
                </div>
                <div className="about_us_comments">
                    <Galleria 
                        value={images} 
                        responsiveOptions={responsiveOptions} 
                        numVisible={3}  
                        item={itemTemplate} thumbnail={thumbnailTemplate} 
                        circular 
                        autoPlay 
                        transitionInterval={4000}
                    />
                </div>
            </div>
        </section>
        <Footer/>
    </>
}