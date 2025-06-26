import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HeroCarousel from './HeroCarousel';


function Hero() {
  return (
   <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

    <div>
      <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">Elevate Your Living Space</h1>
      <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">From cozy sofas to elegant dining sets, we offer thoughtfully crafted pieces designed to elevate every room. Whether youre refreshing a space or starting from scratch, find furniture that fits your life, your taste, and your budget — all in one place.</p>
      <Button asChild size="lg" className="mt-10">
        <Link href="/products" >
          Our Products</Link>
      </Button>
    </div>
    <HeroCarousel/>
   </section>

  )
}

export default Hero