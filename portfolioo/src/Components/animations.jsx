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

/**
 * Contact Reveal Animation Component
 */
export const ContactReveal = ({ children, logo }) => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const contentRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const container = containerRef.current;
    const logoEl = logoRef.current;
    const contentEl = contentRef.current;
    const wrapper = wrapperRef.current;

    if (!container || !logoEl || !contentEl) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        toggleActions: "play none none none",
        // markers: true // Uncomment for debugging
      }
    });

    // Initial state
    gsap.set(logoEl, { opacity: 0, scale: 0.8 });
    gsap.set(contentEl, { opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? 50 : 0 });

    if (isMobile) {
      // Simple fade in and slide up for mobile (slight delay so it doesn't feel too fast)
      tl.to(contentEl, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.35,
        ease: "power2.out"
      });
    } else {
      // Phase 1: Initial Entry (Desktop)
      tl.to(logoEl, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out"
      })
      .to({}, { duration: 0.8 })
      // Phase 2: The Split
      .to(logoEl, {
        x: -200,
        duration: 1,
        ease: "power2.inOut"
      }, "split")
      .to(contentEl, {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.35,
        ease: "power2.out"
      }, "split")
      .to({}, { duration: 0.5 });
    }

    // Let ScrollTrigger recalc after layout (helps with Lenis + pin/scrub on desktop)
    const refreshId = requestAnimationFrame(() => {
      requestAnimationFrame(() => ScrollTrigger.refresh());
    });

    return () => {
      cancelAnimationFrame(refreshId);
      tl.kill();
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-white">
      <div ref={wrapperRef} className="h-screen md:h-screen w-full flex items-center justify-center overflow-hidden bg-white">
        <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-6xl px-4 md:px-8">
          <div ref={logoRef} className="z-10 flex items-center justify-center mb-8 md:mb-0 md:absolute">
            {logo}
          </div>
          <div ref={contentRef} className="opacity-0 md:pl-[400px] text-center md:text-left">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
