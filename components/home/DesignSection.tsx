// import React from 'react'
// import design1 from '../../public/images/design1.svg'
// import design2 from '../../public/images/design2.svg'
// import design3 from '../../public/images/design3.svg'
// import design4 from '../../public/images/design4.svg'
// import Image from 'next/image'

// export default function DesignSection() {
//   const designs = [
//     { id: 1, image: design1, alt: 'Design 1' },
//     { id: 2, image: design2, alt: 'Design 2' },
//     { id: 3, image: design3, alt: 'Design 3' },
//     { id: 4, image: design4, alt: 'Design 4' },
//   ]

//   return (
//     <section className="container mx-auto p-6 mt-7">
//       <div className="lg:flex lg:gap-8 lg:items-center">
//         {/* Text Content */}
//         <div className='flex flex-col lg:w-3/5 '>
//           <h3 className="text-4xl font-bold mb-4">Design your Dream Space</h3>
//           <p className='text-gray-600 leading-relaxed w-2/3 '>
//             With a variety of styles and designs, FurniHome offers furniture solutions 
//             for every room in your home. Enjoy a delightful shopping experience, 
//             excellent customer service, and top quality. Transform your house into 
//             a comfortable and welcoming place with FurniHome!
//           </p>
//         </div>

//         {/* Images Grid */}
//         <div className="grid grid-cols-2 lg:w-2/5 gap-4">
//   {designs.map((design) => (
//     <div
//       key={design.id}
//       className={`
//         relative rounded-lg overflow-hidden
//         ${design.id === 1 ? 'h-[300px]' : ''}    /* Top-left portrait */
//         ${design.id === 2 ? 'h-[400px]' : ''} /* Top-right, shorter + pushed down */
//         ${design.id === 3 ? 'h-[400px] -mt-5' : ''} /* Bottom-left, shorter + pulled up */
//         ${design.id === 4 ? 'h-[300px]' : ''}    /* Bottom-right portrait */
//       `}
//     >
//       <Image
//         src={design.image}
//         alt={design.alt}
//         fill
//         className="object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
//         sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
//       />
//     </div>
//   ))}
//   </div>

//       </div>
//     </section>
//   )
// }

"use client"

import React, { useEffect, useRef } from 'react'
import design1 from '../../public/images/design1.svg'
import design2 from '../../public/images/design2.svg'
import design3 from '../../public/images/design3.svg'
import design4 from '../../public/images/design4.svg'
import Image from 'next/image'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function DesignSection() {
  const textRef = useRef<HTMLDivElement | null>(null)
  const imageRefs = useRef<HTMLDivElement[]>([])

  const designs = [
    { id: 1, image: design1, alt: 'Design 1' },
    { id: 2, image: design2, alt: 'Design 2' },
    { id: 3, image: design3, alt: 'Design 3' },
    { id: 4, image: design4, alt: 'Design 4' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text entrance
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        }
      })

      // Images pop in diagonally
      gsap.from(imageRefs.current, {
        opacity: 0,
        scale: 0.5,
        x: (i) => i % 2 === 0 ? -100 : 100, // alternate left/right
        y: (i) => i % 2 === 0 ? 100 : -100, // alternate up/down
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.3,
        delay: 0.6, // wait until text animation plays
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        }
      })

      // Floating bounce loop
      imageRefs.current.forEach((el, i) => {
        gsap.to(el, {
          y: "+=20",
          duration: 2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.3, // stagger the float
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="container mx-auto p-6 mt-7">
      <div className="lg:flex lg:gap-8 lg:items-center">
        {/* Text Content */}
        <div ref={textRef} className="flex flex-col lg:w-3/5">
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
