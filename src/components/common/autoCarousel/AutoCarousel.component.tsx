import { FC, useEffect, useRef, useState } from 'react';
import './AutoCarousel.css';

interface AutoCarouselProps {
    images: string[];
}

export const AutoCarousel: FC<AutoCarouselProps> = ({ images }) => {
    const [paused, setPaused] = useState(false);
    const [showControls, setShowControls] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef(0);
    const scrollStart = useRef(0);

    useEffect(() => {
        let animationFrameId: number;
        let lastTimestamp: DOMHighResTimeStamp = performance.now();

        const scrollSpeed: number = 0.06;

        const animate = (timestamp: number) => {
            if (!containerRef.current || paused) return;

            const delta: number = timestamp - lastTimestamp;
            lastTimestamp = timestamp;

            containerRef.current.scrollLeft += scrollSpeed * delta;

            const scrollLimit: number = containerRef.current.scrollWidth / 2;
            if (containerRef.current.scrollLeft >= scrollLimit) {
                containerRef.current.scrollLeft -= scrollLimit;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [paused]);

    const handlePrev = () => {
        containerRef.current?.scrollBy({
            left: -containerRef.current.offsetWidth / 3,
            behavior: 'smooth',
        });
    };

    const handleNext = () => {
        containerRef.current?.scrollBy({
            left: containerRef.current.offsetWidth / 3,
            behavior: 'smooth',
        });
    };

    const handleMouseEnter = () => {
        setPaused(true);
        setShowControls(true);
    };

    const handleMouseLeave = () => {
        setPaused(false);
        setShowControls(false);
    };

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
        <div 
            className = "carousel-wrapper"
            onMouseEnter = {handleMouseEnter}
            onMouseLeave = {handleMouseLeave}>
            <div
                className = "carousel-track"
                ref = {containerRef}
                
                onTouchStart = {handleTouchStart}
                onTouchMove = {handleTouchMove}
                onTouchEnd = {handleTouchEnd}
            >
                {[...images, ...images].map((src, i) => (
                    <img key={i} src={src} alt={`comment-${i}`} className="carousel-image" />
            ))}
            </div>
            {showControls && (
            <>
                <button className="carousel-control prev" onClick={handlePrev}>‹</button>
                <button className="carousel-control next" onClick={handleNext}>›</button>
            </>
        )}
        </div>
    );
}