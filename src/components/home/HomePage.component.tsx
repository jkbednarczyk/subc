import React from "react";
import './HomePage.css';
import Clock from '../../assets/images/clock.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import '../../fontawesome.config';

export const HomePage = () => {
    return <>
        <section className="home">
            <div className="content">
                <h1>Salon Unikatów</h1>
                <p>Z Nami Odkryjesz Piękno Przeszłości</p>
            </div>
        </section>
        <section className="introduction">
            <div className="intro-content">
            <img src={Clock} alt="" className="intro-image" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut erat in purus accumsan placerat. Vestibulum imperdiet ornare turpis, non semper sapien commodo nec. Quisque dolor mauris, euismod vitae sagittis et, sodales id sem. Sed et convallis felis. Fusce eu pretium ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vitae urna magna. Morbi scelerisque nisl dapibus mollis tristique. Mauris ullamcorper felis nunc, non mattis lacus condimentum ac. Phasellus at augue et arcu sagittis consequat sed sed leo.
                </p>
            </div>
        </section>
        <section className="footer">
            <div className="footer-content">
            <FontAwesomeIcon icon={faCopyright} />
            </div>
        </section>
    </>
};