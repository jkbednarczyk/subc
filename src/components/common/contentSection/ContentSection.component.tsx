import { FC } from "react";
import "./ContentSection.css";

interface ContentSectionProps {
    text: string;
    imgSrc: string;
    alt: string;
    reverse?: boolean;
}

export const ContentSection: FC<ContentSectionProps> = ({
    text,
    imgSrc,
    alt,
    reverse = false,
    }) => {
    return (
      <div className = {`content-section ${reverse ? 'content-section-reverse' : ''}`}>
        <div className = "content-section-text">{text}</div>
        <img className = "content-section-image" src = {imgSrc} alt = {alt} />
      </div>
    );
  };
  