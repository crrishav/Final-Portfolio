import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function BluredMenu({ isOpen, onClose }) {
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
      
      gsap.to(menuRef.current, {
        opacity: 1,
        visibility: 'visible',
        duration: 0.5,
        ease: 'power2.out'
      });
      
      gsap.fromTo(linksRef.current, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: 'power3.out', 
          delay: 0.3 
        }
      );
    } else {
      document.body.style.overflow = '';
      
      // Exit animation for links
      gsap.to(linksRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.in'
      });

      gsap.to(menuRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
        delay: 0.2, // Wait for links to start exiting
        onComplete: () => {
          if (menuRef.current) menuRef.current.style.visibility = 'hidden';
        }
      });
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    // Play exit animation
    gsap.to(linksRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power2.in'
    });

    gsap.to(menuRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in',
      delay: 0.2,
      onComplete: () => {
        if (menuRef.current) menuRef.current.style.visibility = 'hidden';
        onClose(); 
        
        if (element) {
          // Slow cinematic scroll using GSAP
          // For contact, we scroll to the end of its 200vh sequence to "play" it
          const scrollTarget = targetId === 'contact' 
            ? element.offsetTop + window.innerHeight * 2 
            : element.offsetTop;

          gsap.to(window, {
            duration: 3, // Slow and cinematic
            scrollTo: {
              y: scrollTarget,
              autoKill: true
            },
            ease: "power2.inOut"
          });
        }
      }
    });
  };

  const menuItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div 
      ref={menuRef}
      className="fixed inset-0 z-[200] bg-white/70 backdrop-blur-2xl flex items-center justify-center invisible opacity-0 transition-opacity perspective-1000"
    >
      <div 
        className="absolute inset-0" 
        onClick={() => {
          // Play exit animation for background click
          gsap.to(linksRef.current, {
            opacity: 0,
            y: 50,
            duration: 0.5,
            stagger: 0.05,
            ease: 'power2.in'
          });

          gsap.to(menuRef.current, {
            opacity: 0,
            duration: 0.4,
            ease: 'power2.in',
            delay: 0.2,
            onComplete: () => {
              if (menuRef.current) menuRef.current.style.visibility = 'hidden';
              onClose();
            }
          });
        }}
      />
      <div className="flex flex-col gap-6 md:gap-10 text-center px-10 relative z-10 pointer-events-none">
        {menuItems.map((item, index) => (
          <a 
            key={item.label}
            href={item.href}
            onClick={(e) => handleLinkClick(e, item.href)}
            ref={el => linksRef.current[index] = el}
            className="group block relative pointer-events-auto"
          >
            <div className="flex items-center justify-center gap-4 group-hover:scale-105 transition-transform duration-500 ease-out py-2 px-4">
              <span className="text-[20px] md:text-[30px] text-black group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
              <span className="text-[35px] md:text-[60px] font-normal tracking-tight text-black font-['Inter']">
                {item.label}
              </span>
            </div>
            <div className="h-[2px] w-0 bg-black group-hover:w-full transition-all duration-500 ease-in-out mx-auto mt-[-2px]"></div>
          </a>
        ))}
      </div>
    </div>
  );
}
