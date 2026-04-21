'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CategorySectionAnimation() {
  useGSAP(() => {
    const wrapper = document.getElementById('images-wrapper');
    const container = document.getElementById('categories');
    const images = wrapper?.children;

    if (!wrapper || !container || !images) return;

    const imageWidth = images[0].getBoundingClientRect().width;
    const gap = 24; // 1.5rem from space-x-6
    const totalImages = images.length;

    function getScrollAmount() {
      return -(imageWidth + gap) * (totalImages - 3);
    }

    // Main horizontal scroll animation
    const horizontalScroll = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "+=1000",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
        markers: true
      }
    });

    horizontalScroll.to(wrapper, {
      x: getScrollAmount,
      ease: "none",
      duration: 1
    });

    // Individual image animations
    Array.from(images).slice(3).forEach((image, i) => {
      gsap.fromTo(
        image,
        { 
          opacity: 0,
          x: 50 
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: container,
            start: `top+=${100 + i * 80} center`,
            end: "+=200",
            scrub: true,
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []); // useGSAP will automatically clean up ScrollTrigger instances

  return null;
}