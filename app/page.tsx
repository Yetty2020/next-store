import Hero from "@/components/home/Hero"
import LoadingContainer from "@/components/global/LoadingContainer"
import FeaturedProducts from "@/components/home/FeaturedProducts"
import { Suspense } from "react"
import DebugAuth from "@/components/DebugAuth"


export default function Homepage() {
  return (
    <div>
      <Hero />
      <DebugAuth />
     
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
     
      
    </div>
  )
}
