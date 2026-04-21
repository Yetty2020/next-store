import CategorySection from "./CategorySection"
//import CategorySectionAnimation from "./CategorySectionAnimation"
import ChooseUsSection from "./ChooseUsSection"

function GradientSection() {
  return (
    <section 
      id="gradient-trigger" 
      className="bg-[url('/images/bg-.svg')] 
        md:bg-[url('/images/bg-desktop-light-gradient.svg')] 
        md:dark:bg-yellow 
        bg-cover 
        bg-center 
        bg-no-repeat 
        relative 
        z-20 
        pt-10 
       
        -mt-2 
        rounded-t-[2.5rem] 
        bg-white"
    >
      <div className="flex flex-col gap-10">
        <CategorySection/>
        
        <ChooseUsSection/>
      </div>
    </section>
  )
}

export default GradientSection