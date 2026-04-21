"use client"

import Link from "next/link";
//import Navbar from "../navbar/Navbar";
import { Button } from "../ui/button";
import { Suspense } from "react";
import NavSearch from "../navbar/NavSearch";





export default function Heros() {

 
  return (
    <section id="hero-trigger" className="relative bg-[url('/images/bg-mobile.svg')] md:bg-[url('/images/bg-desktop.svg')] bg-cover bg-center h-screen flex items-center bg-no-repeat py-8 px-14 z-10 relative ">
        {/* <Navbar/> */}
        <div id="hero-content" className="flex flex-col  items-center gap-y-4  lg:p-6 p-3 md:items-start bg-[#FFF3E3] w-fit rounded-md lg:mt-8">
            <h1 className="max-w-4xl font-bold text-6xl tracking-tight sm:text-2xl dark:text-yellow text-[#503C3C]">Elevate Your Living Space</h1>
                  <p className=" max-w-xl text-lg leading-8 text-muted-foreground text-[#503C3C]">From cozy sofas to elegant dining sets, we offer thoughtfully crafted pieces designed to elevate every room. Whether youre refreshing a space or starting from scratch, find furniture that fits your life, your taste, and your budget — all in one place.</p>
                  <Button asChild size="lg" className="bg-[#503C3C] text-white hover:bg-[#C5A178]">
                    <Link href="/products" >
                      Our Products</Link>
                  </Button>

                  <Suspense>
                          <NavSearch  />
                          </Suspense>
                          

        </div>
    </section>
  );
}
