import { FC } from 'react';
import './AnimatedPhotoTile.css';

interface AnimatedPhotoTileProps {
    imageLocation: string;
    alt: string;
}

export const AnimatedPhotoTile: FC<AnimatedPhotoTileProps> = (props) => {
    return <li className = "photo_tile">
        <figure className = "photo_tile_pic_wrap">
            <img src = {props.imageLocation} alt = {props.alt} className = "photo_tile_img" />
        </figure>
    </li>
}