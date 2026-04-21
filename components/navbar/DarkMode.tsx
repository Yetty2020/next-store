"use client"

import * as React from "react"
// import {FaMoon, FaSun} from "react-icons/fa"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DarkMode() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu  >
      <DropdownMenuTrigger asChild >
        <Button variant="outline" size="icon" className="flex gap-4 max-w-[100px] text-[#503C3C]  border-2-[#503C3C] hover:bg-red-50" >
          {/* <FaSun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <FaMoon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" /> */}
          <span>Light/Dark</span>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-[#FFF3E3] border-0" sideOffset={20}>
        <DropdownMenuItem onClick={() => setTheme("light")} className="hover:bg-[#C5A178] px-1.5 py-2 rounded-md">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="hover:bg-[#C5A178] px-1.5 py-2 rounded-md">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="hover:bg-[#C5A178] px-1.5 py-2 rounded-md">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
