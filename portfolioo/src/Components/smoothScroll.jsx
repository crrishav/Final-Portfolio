import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children, options }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            anchors: true,
            ...options,
        });
        lenisRef.current = lenis;

        // Sync ScrollTrigger with Lenis
        lenis.on('scroll', ScrollTrigger.update);

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        const rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.off('scroll', ScrollTrigger.update);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, [options]);

    return <>{children}</>;
}
