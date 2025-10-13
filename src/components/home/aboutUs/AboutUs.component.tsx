import { translate } from "../../../lang/utils/TranslationUtils";
import './AboutUs.css';
import Camera from '../../../assets/images/camera.jpg';
import Atmos from '../../../assets/images/atmos.jpg';
import Lady from '../../../assets/images/lady.jpg';
import Comment1 from '../../../assets/images/comments/1.png';
import Comment2 from '../../../assets/images/comments/2.png';
import Comment3 from '../../../assets/images/comments/3.png';
import Comment4 from '../../../assets/images/comments/4.png';
import Comment5 from '../../../assets/images/comments/5.png';
import Comment6 from '../../../assets/images/comments/6.png';
import Comment7 from '../../../assets/images/comments/7.png';
import Comment8 from '../../../assets/images/comments/8.png';
import { ContentSection } from "../../common/contentSection/ContentSection.component";
import { NavLink } from "react-router-dom";
import { EXTERNAL_LINKS } from "../../common/utils/externalLinks";
import { AutoCarousel } from "../../common/autoCarousel/AutoCarousel.component";
import { RefObject, useRef } from "react";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

export const AboutUs  = () => {

    const imagesSrc: string[] = [
        Comment1,
        Comment2,
        Comment3,
        Comment4,
        Comment5,
        Comment6,
        Comment7,
        Comment8
    ];

    const containerRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const headerRef: RefObject<HTMLHeadingElement> = useRef<HTMLHeadingElement>(null);
    const introRef: RefObject<HTMLParagraphElement> = useRef<HTMLParagraphElement>(null);
    const section1Ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const section2Ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const section3Ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

    useScrollAnimation(headerRef, {
        fadeIn: true,
        slideDirection: 'down',
        distance: 30,
        duration: 0.8,
        start: 'top 80%',
        end: 'top 60%',
        scrub: 1,
    });

    useScrollAnimation(introRef, {
        fadeIn: true,
        slideDirection: 'up',
        distance: 20,
        duration: 0.8,
        delay: 0.2,
        start: 'top 80%',
        end: 'top 60%',
        scrub: 1,
    });

    useScrollAnimation(section1Ref, {
        fadeIn: true,
        slideDirection: 'left',
        distance: 100,
        duration: 1.5,
        start: 'top 75%',
        end: 'top 50%',
        scrub: 1,
    });

    useScrollAnimation(section2Ref, {
        fadeIn: true,
        slideDirection: 'right',
        distance: 100,
        duration: 1.5,
        start: 'top 75%',
        end: 'top 50%',
        scrub: 1,
    });

    useScrollAnimation(section3Ref, {
        fadeIn: true,
        slideDirection: 'left',
        distance: 100,
        duration: 1.5,
        start: 'top 75%',
        end: 'top 50%',
        scrub: 1,
    });

    return <div className = "about_us" ref={containerRef}>
        <h1 ref={headerRef}>{translate("WELCOME")}</h1>
        <p ref={introRef}>{translate("WHO_WE_ARE")}</p>
        <div ref={section1Ref}>
            <ContentSection
                text={translate("OUR_WORK")}
                imgSrc={Camera}
                alt={translate("ALT.CAMERA")}
            />
        </div>
        <div ref={section2Ref}>
            <ContentSection
                text={translate("APPROACH")}
                imgSrc={Atmos}
                alt={translate("ALT.ATMOS")}
                reverse
            />
        </div>
        <div ref={section3Ref}>
            <ContentSection
                text={translate("CUSTOMERS")}
                imgSrc={Lady}
                alt={translate("ALT.LADY")}
            />
        </div>
        <AutoCarousel
            images={imagesSrc} />
        <p>
            {translate("CUSTOMERS_COMMENTS")}
            <NavLink to = {EXTERNAL_LINKS.ALLEGRO_COMMENTS} target="_blank">
                {translate("COMMENTS_LINK")}
            </NavLink>.
        </p>
        <p className = "about_us__thanks">
            {translate("THANK_YOU")}
        </p>
    </div>
}