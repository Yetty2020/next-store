"use client"

import React, { useEffect, useRef } from 'react'
import design1 from '../../public/images/design1.svg'
import design2 from '../../public/images/design2.svg'
import design3 from '../../public/images/design3.svg'
import design4 from '../../public/images/design4.svg'
import Image from 'next/image'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger)

export default function DesignSections() {
  const textRef = useRef<HTMLDivElement | null>(null)
  const imageRefs = useRef<HTMLDivElement[]>([])
  const sectionRef = useRef<HTMLElement | null>(null)
  const singleImageRef = useRef<HTMLDivElement | null>(null)
  const textSectionRef = useRef<HTMLDivElement | null>(null)

  const designs = [
    { id: 1, image: design1, alt: 'Design 1' },
    { id: 2, image: design2, alt: 'Design 2' },
    { id: 3, image: design3, alt: 'Design 3' },
    { id: 4, image: design4, alt: 'Design 4' },
  ]

  useEffect(() => {
  const lenis = new Lenis()

  function raf(time: number) {
    lenis.raf(time)
    ScrollTrigger.update()
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${designs.length * 100}%`,
        pin: true,
        scrub: true,
      },
    })

    

    // Step 2: image goes to center + scales up
    tl.to(singleImageRef.current, {
  xPercent: 100,     // move across its container
  scale: 1.5,        // grow in size
  duration: 0.6,       // control how long the move+scale takes
  ease: "power3.out" // smooth ease
}, 0)

tl.to(textSectionRef.current, {
  opacity: 0,        // fade out
  duration: 0.4,       // disappear quickly
  ease: "power3.out"
}, 0) // runs at the same time as image move

    

    // Step 2b: blur everything else (add a class or target container)
    // tl.to(sectionRef.current, {
    //   filter: "blur(10px)",
    //   duration: 1,
    //   ease: "none",
    // }, "<") // "<" means run at same time as scale/center
    // Step 3: unblur + scale back down + move to side

  })

  

  return () => ctx.revert()
}, [])


  return (
    <section ref={sectionRef} className="container h-screen mx-auto p-6 mt-7">
        <div className="flex flex-col gap-6 items-center justify-center relative w-[80%] mx-auto mt-10">
  {/* Heading */}
  <div ref={textSectionRef} className="flex flex-col items-center text-center relative z-30">
    <h3 className="text-[5rem] font-bold">Design your Dream Space</h3>
    <p className="text-lg ">
      With a variety of styles and designs, FurniHome offers furniture solutions 
      for every room in your home.
    </p>
  </div>

  
  {/* Circular glow behind image */}
<div  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
  w-[100%] h-[100%] rounded-lg bg-red-100 blur-2xl z-10" />


  {/* Featured image (stacked slightly in front) */}
  <div ref={singleImageRef} className="h-[300px] w-[300px] rounded-lg relative z-10 self-start mt-[-50]">
    <div className="left-0 top-0 relative h-full w-full rounded-lg overflow-hidden shadow-xl">
      <Image
        src={design1}
        alt="Furniture"
        fill
        className="object-cover hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
      />
    </div>
  </div>
</div>

      <div className="lg:flex lg:gap-8 lg:items-center scale-0 opacity-0">
        {/* Text Content */}

        
        <div ref={textRef} className="flex flex-col lg:w-3/5 ">
          <h3 className="text-4xl font-bold mb-4">Design your Dream Space</h3>
          <p className="text-gray-600 leading-relaxed w-2/3">
            With a variety of styles and designs, FurniHome offers furniture solutions 
            for every room in your home. Enjoy a delightful shopping experience, 
            excellent customer service, and top quality. Transform your house into 
            a comfortable and welcoming place with FurniHome!
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 lg:w-2/5 gap-4">
          {designs.map((design, index) => (
            <div
              key={design.id}
              ref={(el) => { if (el) imageRefs.current[index] = el }}
              className={`
                relative rounded-lg overflow-hidden
                ${design.id === 1 ? 'h-[300px]' : ''}
                ${design.id === 2 ? 'h-[400px]' : ''}
                ${design.id === 3 ? 'h-[400px] -mt-5' : ''}
                ${design.id === 4 ? 'h-[300px]' : ''}
              `}
            >
              <Image
                src={design.image}
                alt={design.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
