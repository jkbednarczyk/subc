import './AboutUsPage.css';
import { translate } from '../../lang/utils/TranslationUtils';
import {Galleria, GalleriaResponsiveOptions} from 'primereact/galleria';
import { useState, useEffect } from 'react';
import { PhotoService } from './PhotoService.service';
import {Button} from 'primereact/button';

export const AboutUsPage = () => {
    const [images, setImages] = useState([]);
    const responsiveOptions: GalleriaResponsiveOptions[] = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
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
        <section className="about_us">
            <div className="about_us_content">
                <p>{translate("ABOUT_US_PAGE.WELCOME")}</p>
                <p>{translate("ABOUT_US_PAGE.MEMORIES")}</p>
                <p>{translate("ABOUT_US_PAGE.APPROACH")}</p>
                <p>{translate("ABOUT_US_PAGE.INVITATION")}</p>
            </div>
            <div className="about_us_comments">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={3}  
                item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
        </section>
    </>
}