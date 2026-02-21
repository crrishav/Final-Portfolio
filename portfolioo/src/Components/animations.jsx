import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * FadeIn Animation Component
 */
export const FadeIn = ({ children, duration = 1, delay = 0, stagger = 0 }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const el = elementRef.current;
        gsap.fromTo(el,
            { opacity: 0 },
            { opacity: 1, duration, delay, stagger, ease: 'power2.out' }
        );
    }, [duration, delay, stagger]);

    return <div ref={elementRef} style={{ opacity: 0 }}>{children}</div>;
};

/**
 * FadeIn and SlideUp Animation Component
 */
export const FadeInSlideUp = ({ children, duration = 1, delay = 0, distance = 50, stagger = 0 }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const el = elementRef.current;
        gsap.fromTo(el,
            { opacity: 0, y: distance },
            { opacity: 1, y: 0, duration, delay, stagger, ease: 'power2.out' }
        );
    }, [duration, delay, distance, stagger]);

    return <div ref={elementRef} style={{ opacity: 0 }}>{children}</div>;
};

/**
 * FadeIn and SlideDown Animation Component
 */
export const FadeInSlideDown = ({ children, duration = 1, delay = 0, distance = 50, stagger = 0 }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const el = elementRef.current;
        gsap.fromTo(el,
            { opacity: 0, y: -distance },
            { opacity: 1, y: 0, duration, delay, stagger, ease: 'power2.out' }
        );
    }, [duration, delay, distance, stagger]);

    return <div ref={elementRef} style={{ opacity: 0 }}>{children}</div>;
};
