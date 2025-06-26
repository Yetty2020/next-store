import { Button } from "@/components/ui/button"
import Link from "next/link"
import { VscCode } from "react-icons/vsc"



export default function Logo() {
  return (
    <div>
        <Button size="icon" className="bg-primary text-white " asChild>
            <Link href="/">
            
             <VscCode className="w-6 h-6"/></Link>
           

        </Button>
      
    </div>
  )
}
