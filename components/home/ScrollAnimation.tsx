'use client';

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
  useEffect(() => {
    const hero = document.getElementById("hero-trigger");
    const gradient = document.getElementById("gradient-trigger");
    const heroContent = document.getElementById("hero-content");

    if (!hero || !gradient || !heroContent) return;

    const heroHeight = hero.offsetHeight;
    const navbarHeight = 80; // Adjust to your navbar height in px
   

    gsap.to(gradient, {
      y: -heroHeight + navbarHeight,
      
      ease: "none",
      scrollTrigger: {
        trigger: gradient,
        start: "top bottom",
        end: `+=${heroHeight - navbarHeight}`,
        scrub: true,
        // markers: true, // enable to debug
      },
    });

     gsap.to(heroContent, {
      opacity: 0,
      y: -100,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: gradient,
        start: "top bottom",
        end: `+=${heroHeight - navbarHeight}`,
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return null; // This component doesn’t render visible UI
}
