// 'use client'

// import React, { useRef } from 'react'
import { categories } from '@/utils/Category'
import Image from 'next/image'
// import { useGSAP } from '@gsap/react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)
// gsap.registerPlugin(useGSAP)

function CategorySection() {
//   const sectionRef = useRef(null)
//   const wrapperRef = useRef(null)

//   useGSAP(() => {
//     const ctx = gsap.context(() => {
//       // Initial state setup
//       gsap.set(wrapperRef.current, {
//         x: 0
//       })

//       // Create the scroll-triggered animation
//       ScrollTrigger.create({
//         trigger: sectionRef.current,
//         start: "top center",
//         end: "+=200%",
//         pin: true,
//         pinSpacing: true,
//         scrub: 1,
//         onEnter: () => {
//           // Show first 3 images immediately
//           gsap.to('.category-item', {
//             opacity: 1,
//             x: 0,
//             duration: 0.5,
//             stagger: 0.2,
//             ease: "power2.out"
//           })
//         },
//         onUpdate: (self) => {
//           const progress = self.progress
//           if (progress > 0.3 && progress <= 0.6) {
//             // Slide in 4th image
//             gsap.to(wrapperRef.current, {
//               x: "-33.33%",
//               duration: 0.5,
//               ease: "power2.inOut"
//             })
//           } else if (progress > 0.6) {
//             // Slide in 5th image
//             gsap.to(wrapperRef.current, {
//               x: "-66.66%",
//               duration: 0.5,
//               ease: "power2.inOut"
//             })
//           }
//         },
//         markers: false
//       })
//     }, sectionRef)

//     return () => ctx.revert()
//   }, { scope: sectionRef })

  return (
    <section
      // ref={sectionRef}
      id="categories"
      className="relative h-screen flex items-center justify-between px-14 pt-10 overflow-hidden"
    >
      {/* Left: Title Section */}
      <div
        id="title-section"
        className="flex flex-col gap-4 items-start w-[30%] z-10 sticky left-0"
      >
        <h2 className="text-[#503C3C] text-[2rem] font-extrabold tracking-tight leading-snug">
          Discover a furniture set that matches your vibe.
        </h2>
        <p className="text-[#A87C7C] max-w-xs text-lg font-medium">
          Bring harmony to your space with thoughtfully selected pieces.
        </p>
      </div>

      {/* Right: Image Wrapper */}
      <div className="w-[70%] overflow-hidden relative">
        <div
          // ref={wrapperRef}
          className="flex gap-6 transition-transform duration-500"
        >
          {categories.map((item, index) => (
            <div
              key={item.id}
              className={`category-item flex flex-col items-center gap-4 w-[calc(33.33%-1rem)] shrink-0 ${
                index > 2 ? 'opacity-0' : ''
              }`}
            >
              <div className="relative w-full h-80">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h4 className="text-[#503C3C] font-bold">{item.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection