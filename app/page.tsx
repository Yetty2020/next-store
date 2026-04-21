//import Hero from "@/components/home/Hero"
import Heros from "@/components/home/Heros"
import LoadingContainer from "@/components/global/LoadingContainer"
import FeaturedProducts from "@/components/home/FeaturedProducts"
import { Suspense } from "react"
import GradientSection from "@/components/home/GradientSection"
//import ScrollAnimation from "@/components/home/ScrollAnimation"
import DesignSection from "@/components/home/DesignSection"
import TestiomonialSection from "@/components/home/TestimonialSection"
import Footer from "@/components/home/Footer"
import DesignSections from "@/components/home/DesignSections"




export default function Homepage() {
  return (
    <div>
      <Heros />
      <GradientSection />
     <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
       <DesignSection/>
       <DesignSections/>
       {/* <CategorySections/> */}
      <TestiomonialSection/>
     
      
      <Footer/>
      <>
      
      </>
    
      {/* <Hero /> */}
      
     
      
     
      
    </div>
  )
}
