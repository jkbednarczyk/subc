import { FC, useEffect, useRef, useState } from 'react';
import './AutoCarousel.css';

interface AutoCarouselProps {
    images: string[];
    interval?: number;
}

export const AutoCarousel: FC<AutoCarouselProps> = ({ images, interval = 136 }) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const [paused, setPaused] = useState(false);
    const touchStartX = useRef(0);
    const scrollStart = useRef(0);

    useEffect(() => {
        let animationFrameId: number;
        let lastTimestamp = performance.now();

        const scrollSpeed = 0.06; // pixels per ms, so 0.5px every millisecond

        const animate = (timestamp: number) => {
            if (!containerRef.current || paused) return;

            const delta = timestamp - lastTimestamp;
            lastTimestamp = timestamp;

            containerRef.current.scrollLeft += scrollSpeed * delta;

            const scrollLimit = containerRef.current.scrollWidth / 2;
            if (containerRef.current.scrollLeft >= scrollLimit) {
                containerRef.current.scrollLeft -= scrollLimit;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [paused]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        scrollStart.current = containerRef.current?.scrollLeft || 0;
        setPaused(true);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!containerRef.current) return;
        const delta = touchStartX.current - e.touches[0].clientX;
        containerRef.current.scrollLeft = scrollStart.current + delta;
    };

    const handleTouchEnd = () => {
        setPaused(false);
    };

    return (
        <div className = "carousel-wrapper">
            <div
                className = "carousel-track"
                ref = {containerRef}
                onMouseEnter = {() => setPaused(true)}
                onMouseLeave = {() => setPaused(false)}
                onTouchStart = {handleTouchStart}
                onTouchMove = {handleTouchMove}
                onTouchEnd = {handleTouchEnd}
            >
                {[...images, ...images].map((src, i) => (
                    <img key={i} src={src} alt={`comment-${i}`} className="carousel-image" />
            ))}
            </div>
        </div>
    );
}