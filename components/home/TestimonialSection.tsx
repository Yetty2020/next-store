import React from 'react'
import Image from 'next/image'
import { testimonials } from '@/utils/Testimonials'

export default function TestimonialSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className='text-center max-w-2xl mx-auto'>
          <h3 className="text-4xl font-bold mb-4">Testimonials</h3>
          <p className='text-gray-600 leading-relaxed'>
            Each review and testimonial motivates us to keep providing the best service and perfectly meet furniture needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((item) => (
            <div key={item.id} className='relative w-[350px] h-[400px] group'> 
              {/* Background Image */}
              <div className='absolute inset-0 rounded-lg overflow-hidden'>
                <Image
                  src={item.biggerImage}
                  alt={item.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>

              {/* Content Box */}
              <div className='absolute bottom-10 left-0 right-0 bg-white/95 p-6 rounded-lg 
                            transform transition-transform duration-300
                            group-hover:translate-y-0 translate-y-[60%]'>
                <p className='text-gray-600 mb-6'>{item.quote}</p>
                <div className='flex items-center gap-4'>
                  <div className='relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0'>
                    <Image 
                      src={item.image} 
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className='text-left'>
                    <h4 className='font-semibold text-lg'>{item.name}</h4>
                    <p className='text-gray-500 text-sm'>{item.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}