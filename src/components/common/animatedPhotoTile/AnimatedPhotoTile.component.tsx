import { FC } from 'react';
import './AnimatedPhotoTile.css';

interface AnimatedPhotoTileProps {
    imageLocation: string;
    alt: string;
}

export const AnimatedPhotoTile: FC<AnimatedPhotoTileProps> = (props) => {
    return <li className = "photo__tile">
        <figure className = "photo__tile-pic-wrap">
            <img src = {props.imageLocation} alt = {props.alt} className = "photo__tile-img" />
        </figure>
    </li>
}