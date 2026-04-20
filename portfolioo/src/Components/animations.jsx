import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Magnetic effect for buttons and icons
 */
export const Magnetic = ({ children, strength = 0.5 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = el.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) * strength;
      const y = (clientY - (top + height / 2)) * strength;
      gsap.to(el, { x, y, duration: 1, ease: "power2.out" });
    };

    const mouseLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
    };

    el.addEventListener("mousemove", mouseMove);
    el.addEventListener("mouseleave", mouseLeave);
    return () => {
      el.removeEventListener("mousemove", mouseMove);
      el.removeEventListener("mouseleave", mouseLeave);
    };
  }, [strength]);

  return <div ref={ref} className="inline-block">{children}</div>;
};

/**
 * Smooth reveal for text (characters sliding up)
 */
export const TextReveal = ({ children, delay = 0, duration = 1 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chars = el.querySelectorAll('.char');
    gsap.fromTo(chars, 
      { y: 100 }, 
      { 
        y: 0, 
        duration, 
        delay, 
        stagger: 0.03, 
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        }
      }
    );
  }, [delay, duration]);

  const text = typeof children === 'string' ? children : '';
  
  return (
    <div ref={ref} className="reveal-text">
      {text.split('').map((char, i) => (
        <span key={i} className="char inline-block whitespace-pre">
          {char}
        </span>
      ))}
    </div>
  );
};

/**
 * Parallax image effect on scroll
 */
export const ParallaxImage = ({ src, alt, className }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

/**
 * Versatile Fade In component
 */
export const Reveal = ({ children, width = "fit-content", delay = 0, direction = "up" }) => {
  const axisStyle = {
    opacity: 1,
    transform:
      direction === 'up'
        ? 'translateY(0)'
        : direction === 'down'
          ? 'translateY(0)'
          : direction === 'left'
            ? 'translateX(0)'
            : 'translateX(0)',
    transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
  };

  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <div style={axisStyle}>
        {children}
      </div>
    </div>
  );
};

// Keeping these for backward compatibility if needed, but updated to use GSAP better
export const FadeIn = ({ children, duration = 1, delay = 0, trigger = false }) => {
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(ref.current, 
      { opacity: 0 }, 
      { 
        opacity: 1, 
        duration, 
        delay, 
        scrollTrigger: trigger ? { trigger: ref.current, start: "top 85%" } : null 
      }
    );
  }, [delay, duration, trigger]);
  return <div ref={ref} style={{ opacity: 0 }}>{children}</div>;
};

export const FadeInSlideUp = ({ children, duration = 1, delay = 0, distance = 50, trigger = false }) => {
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(ref.current, 
      { opacity: 0, y: distance }, 
      { 
        opacity: 1, y: 0, 
        duration, 
        delay, 
        scrollTrigger: trigger ? { trigger: ref.current, start: "top 85%" } : null 
      }
    );
  }, [delay, distance, duration, trigger]);
  return <div ref={ref} style={{ opacity: 0 }}>{children}</div>;
};

// Placeholder for ContactReveal since we're redesigning the section
export const ContactReveal = ({ children }) => {
  return <div className="w-full">{children}</div>;
};
