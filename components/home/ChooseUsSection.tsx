'use client'

import { useRef, useEffect } from 'react'
import { Features } from '@/utils/ChooseUs'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function ChooseUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Reset refs array
    cardsRef.current = cardsRef.current.slice(0, Features.length)

    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(cardsRef.current, {
        opacity: 0,
        scale: 0.8,
        y: 50
      })

      // Create scroll trigger animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        onEnter: () => {
          gsap.to(cardsRef.current, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.5,
            ease: "back.out(1.7)",
            overwrite: true
          })
        },
        onLeaveBack: () => {
          gsap.to(cardsRef.current, {
            opacity: 0,
            scale: 0.8,
            y: 50,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.in",
            overwrite: true
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-12 mb-10 flex justify-between items-center">
      <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 lg:w-[70%]">
        {Features.map((feature, index) => (
          <div
            key={feature.id}
            ref={el => cardsRef.current[index] = el}
            className=""
          >
            <div className="relative w-8 h-8 mb-4 mx-auto ">
              <Image
                src={feature.icon}
                alt={feature.title}
                fill
                className="object-contain"
              />
            </div>
            <div className='flex flex-col gap-4 '>            <h3 className="text-xl font-semibold text-center mb-3">{feature.title}</h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default ChooseUsSection