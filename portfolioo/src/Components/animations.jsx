import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * FadeIn Animation Component
 */
export const FadeIn = ({ children, duration = 1, delay = 0, stagger = 0, trigger = false }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    
    const animation = {
      opacity: 1, 
      duration, 
      delay, 
      stagger, 
      ease: 'power2.out'
    };

    if (trigger) {
      animation.scrollTrigger = {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none"
      };
    }

    gsap.fromTo(el, 
      { opacity: 0 }, 
      animation
    );
  }, [duration, delay, stagger, trigger]);

  return <div ref={elementRef} style={{ opacity: 0 }}>{children}</div>;
};

/**
 * FadeIn and SlideUp Animation Component
 */
export const FadeInSlideUp = ({ children, duration = 1, delay = 0, distance = 50, stagger = 0, trigger = false }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;

    const animation = {
      opacity: 1, 
      y: 0, 
      duration, 
      delay, 
      stagger, 
      ease: 'power2.out'
    };

    if (trigger) {
      animation.scrollTrigger = {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none"
      };
    }

    gsap.fromTo(el, 
      { opacity: 0, y: distance }, 
      animation
    );
  }, [duration, delay, distance, stagger, trigger]);

  return <div ref={elementRef} style={{ opacity: 0 }}>{children}</div>;
};

/**
 * FadeIn and SlideDown Animation Component
 */
export const FadeInSlideDown = ({ children, duration = 1, delay = 0, distance = 50, stagger = 0, trigger = false }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;

    const animation = {
      opacity: 1, 
      y: 0, 
      duration, 
      delay, 
      stagger, 
      ease: 'power2.out'
    };

    if (trigger) {
      animation.scrollTrigger = {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none"
      };
    }

    gsap.fromTo(el, 
      { opacity: 0, y: -distance }, 
      animation
    );
  }, [duration, delay, distance, stagger, trigger]);

  return <div ref={elementRef} style={{ opacity: 0 }}>{children}</div>;
};

/**
 * FadeIn and SlideLeft Animation Component
 */
export const FadeInSlideLeft = ({ children, duration = 1, delay = 0, distance = 50, stagger = 0, trigger = false }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;

    const animation = {
      opacity: 1, 
      x: 0, 
      duration, 
      delay, 
      stagger, 
      ease: 'power2.out'
    };

    if (trigger) {
      animation.scrollTrigger = {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none"
      };
    }

    gsap.fromTo(el, 
      { opacity: 0, x: distance }, 
      animation
    );
  }, [duration, delay, distance, stagger, trigger]);

  return <div ref={elementRef} style={{ opacity: 0 }}>{children}</div>;
};

/**
 * FadeIn and SlideRight Animation Component
 */
export const FadeInSlideRight = ({ children, duration = 1, delay = 0, distance = 50, stagger = 0, trigger = false }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;

    const animation = {
      opacity: 1, 
      x: 0, 
      duration, 
      delay, 
      stagger, 
      ease: 'power2.out'
    };

    if (trigger) {
      animation.scrollTrigger = {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none"
      };
    }

    gsap.fromTo(el, 
      { opacity: 0, x: -distance }, 
      animation
    );
  }, [duration, delay, distance, stagger, trigger]);

  return <div ref={elementRef} style={{ opacity: 0 }}>{children}</div>;
};
