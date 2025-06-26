import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LuAlignLeft } from "react-icons/lu"
import { Button } from "../ui/button"
import { links } from "@/utils/Links"
import Link from "next/link"


export default function LinksDropDown() {
  return (
    
        <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" size="icon" className="flex gap-4 max-w-[100px]">
      <LuAlignLeft className="w-6 h-6"/>


    </Button>
    
    
    </DropdownMenuTrigger>
  <DropdownMenuContent className="w-48" align="start" sideOffset={10}>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    {links.map((link) => (
      <DropdownMenuItem key={link.href} asChild>
        <Link href={link.href} className="capitalize w-full">
         {link.label}
        </Link>
      </DropdownMenuItem>
    ))}
    
  </DropdownMenuContent>
</DropdownMenu>
      
    
  )
}
