import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ScrollAnimationConfig {
  fadeIn?: boolean;
  slideDirection?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  animateChildren?: boolean;
}

export const useScrollAnimation = (ref: RefObject<HTMLElement>, config: ScrollAnimationConfig = {}) => {
  
  useEffect(() => {
    if (!ref.current) return;

    const {
      fadeIn = true,
      slideDirection = 'up',
      distance = 50,
      duration = 1,
      stagger = 0.2,
      delay = 0,
      start = 'top 80%',
      end = 'top 50%',
      scrub = 1,
      animateChildren = false,
    } = config;

    const element: HTMLElement = ref.current;

    const getResponsiveConfig = () => {
      if (typeof window === 'undefined') {
        return { direction: slideDirection, distance };
      }
      
      const width = window.innerWidth;
      
      if (width < 640) {
        if (slideDirection === 'left' || slideDirection === 'right') {
          return {
            direction: 'up' as const,
            distance: distance * 0.5
          };
        }
        return { direction: slideDirection, distance: distance * 0.4 };
      }
      
      if (width < 1024) return { direction: slideDirection, distance: distance * 0.6 };
      return { direction: slideDirection, distance };
    };

    const { direction, distance: responsiveDistance } = getResponsiveConfig();

    const getInitialPosition = () => {
      switch (direction) {
        case 'up':
          return { y: distance };
        case 'down':
          return { y: -distance };
        case 'left':
          return { x: responsiveDistance };
        case 'right':
          return { x: -responsiveDistance };
        case 'none':
          return {};
        default:
          return { y: responsiveDistance };
      }
    };

    const fromVars: gsap.TweenVars = {
      opacity: fadeIn ? 0 : 1,
      ...getInitialPosition(),
    };

    const toVars: gsap.TweenVars = {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub,
      },
    };

    gsap.fromTo(element, fromVars, toVars);

    if (animateChildren && element.children.length > 0) {
      const children = Array.from(element.children);
      gsap.fromTo(
        children,
        {
          opacity: fadeIn ? 0 : 1,
          ...getInitialPosition(),
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: duration * 0.8,
          stagger,
          scrollTrigger: {
            trigger: element,
            start,
            end,
            scrub,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [ref, config]);
};