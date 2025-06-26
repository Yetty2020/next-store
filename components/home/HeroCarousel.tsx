"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
// import Hero1 from "@public/images/hero1.jpg"
// import Hero2 from "@public/images/hero2.jpg"
// import Hero3 from "@public/images/hero3.jpg"
// import Hero4 from "@public/images/hero4.jpg"
import Image from "next/image"



import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const CarouselImages = [
  "/images/hero3.jpg",
  "/images/hero2.jpg",
  "/images/hero1.jpg",
  "/images/hero4.jpg",
];


export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="">
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent >
        {CarouselImages.map((img, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className="border-0">
                <CardContent className="relative aspect-square p-0">
                 <Image
                    src={img}
                    alt={`Hero image ${index + 1}`}
                    className="w-full  object-cover rounded" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
