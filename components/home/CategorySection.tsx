"use client"
import { categories } from '@/utils/Category'
import Image from 'next/image'
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from "@studio-freight/lenis"

gsap.registerPlugin(ScrollTrigger)

function CategorySection() {
  const stickyRef = useRef<HTMLDivElement | null>(null)
  const scrollCards = useRef<HTMLDivElement[]>([]) // store all card refs
  const titleRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const totalCards = categories.length
  const stickyHeight = window.innerHeight * totalCards;
  const spacing = 500; // gap between cards
  const totalScrollDistance = (totalCards - 1) * spacing;

  function positionCards(progress = 0) {
    scrollCards.current.forEach((card, i) => {
      if (!card) return;
      const cardOffset = (i - progress * totalCards) * spacing;
      gsap.set(card, {
        x: cardOffset,
        y: 0,
        rotation: 0,
        transformOrigin: "center center",
      });
    });
  }

  useEffect(() => {

    if (typeof window === "undefined") return;
    const stickyHeight = window.innerHeight * totalCards;
    const lenis = new Lenis()
    lenis.on("scroll", ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000) 
    })

    ScrollTrigger.create({
      trigger: stickyRef.current,
      start: "top top",
      end: `+=${totalScrollDistance}`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        positionCards(self.progress)
      },
      onEnter: () => {
        gsap.to(progressRef.current, { opacity: 1, duration: 0.3 })
      },
      onLeave: () => {
        gsap.to(progressRef.current, { opacity: 0, duration: 0.3 })
      },
      onEnterBack: () => {
        gsap.to(progressRef.current, { opacity: 1, duration: 0.3 })
      },
      onLeaveBack: () => {
        gsap.to(progressRef.current, { opacity: 0, duration: 0.3 })
      },
    })

    // Progress bar width animation
    gsap.to(progressRef.current, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: stickyRef.current,
        start: "top top",
        end: `+=${totalScrollDistance}`,
        scrub: true,
      },
    })

    gsap.from(scrollCards.current, {
      opacity: 0,
      scale: 0.8,
      y: 50,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.2,
      scrollTrigger: {
        trigger: stickyRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(titleRef.current, {
      opacity: 0,
      x: -100,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 95%",
        toggleActions: "play none none reverse",
      }
    })

//     gsap.to(titleRef.current, {
//   opacity: 0,
//   ease: "power1.out",
//   scrollTrigger: {
//     trigger: stickyRef.current,
//     start: "top top",
//     end: `+=${totalScrollDistance * 0.4}`, // 10% into horizontal scroll
//     scrub: true,
//   },
// })

    gsap.to(stickyRef.current, {
      opacity: 0,
      ease: "power1.out",
      scrollTrigger: {
        trigger: stickyRef.current,
        start: `top+=${stickyHeight * 0.7} top`,
        end: `+=${stickyHeight * 0.3}`,
        scrub: true,
      },
    })

    gsap.ticker.lagSmoothing(0)

    const observer = new IntersectionObserver(() => {}, { threshold: 0.5 })
    scrollCards.current.forEach((card) => observer.observe(card))

    window.addEventListener("resize", () => positionCards(0))

    return () => {
      lenis.destroy()
      observer.disconnect()
      window.removeEventListener("resize", () => positionCards(0))
    }
  }, [])

  return (
    <section
      ref={stickyRef}
      id="categories"
      className="h-screen flex items-center justify-between relative px-14 pt-10 pb-10"
    >
      {/* Left: Title Section */}
      <div ref={titleRef}
        id="title-section"
        className="flex flex-col gap-4 items-center justify-center w-[30%] z-10 sticky left-0"
      >
        <h2 className="text-[#503C3C] text-[2.5rem] font-extrabold tracking-tight leading-snug">
          Discover a furniture set that matches your vibe.
        </h2>
        <p className="text-[#A87C7C] max-w-xs text-lg font-medium">
          Bring harmony to your space with thoughtfully selected pieces.
        </p>
      </div>

      {/* Cards Section */}
      <div
        className="absolute top-[15%] left-[50%] 
        transform -translate-x-1/2 -translate-y-1/2 
        w-[100vw] will-change-transform z-20"
      >
        {categories.map((item, index) => (
          <div
            key={item.id}
            className="absolute w-[600px] h-[550px] top-[50%] left-[50%] ml-[-200px] transform origin-center flex flex-col items-center justify-center gap-2 will-change-transform p-3"
            ref={(el) => {
              if (el) scrollCards.current[index] = el
            }}
          >
            {/* <div className="relative w-[600px] h-[550px] rounded-md shrink-0 bg-white p-6">
  <div className="relative w-full h-full rounded-lg overflow-hidden">
    <Image
      src={item.image}
      alt={item.label}
      fill
      className="object-cover"
    />
  </div>
</div> */}

<div className="w-[600px] h-[550px] rounded-md shrink-0 bg-white border-amber-300  p-6">
  
  <Image
    src={item.image}
    alt={item.label}
    width={500}
    height={550}
    className="rounded-lg  w-full h-full"
  />
  
</div>



            <div>
              <h4 className="text-[#503C3C] font-bold self-center text-xl">{item.label}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-6 left-0 w-full px-12">
        <div 
          ref={progressRef}
          className="h-1 bg-[#503C3C] rounded-md opacity-0"
          style={{ width: "0%" }}
        />
      </div>
    </section>
  )
}

export default CategorySection
