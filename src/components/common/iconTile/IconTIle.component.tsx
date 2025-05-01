import React from 'react';
import './IconTile.css';

interface IconTileProps {
    icon: React.ReactNode;
    title: string;
}

export const IconTile: React.FC<IconTileProps> = (props) => {
    return (
        <div className = "icon-tile">
            <div className = "icon-tile-icon">{props.icon}</div>
            <div className = "icon-tile-title">{props.title}</div>
        </div>
    );
};