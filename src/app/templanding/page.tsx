import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import HeroProfileCard from "@/components/custom/heroProfileCard";


// Data for navigation items
const navItems = [
  { label: "Jobs", href: "#" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];



export default function TempLanding() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen">
      {/* Navigation Bar - Reduced height and spacing */}
      <header className="absolute w-full h-[80px] backdrop-blur-[5.85px] z-40">
        <div className="flex items-center justify-between px-[180px] h-full">
          {/* Logo - Adjusted alignment */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8">
              <img
                className="w-[26px] h-[26px] ml-[2px]"
                alt="ContentSociety Logo"
                src="/templanding/group.png"
              />
            </div>
            <span className="font-bold text-white text-base leading-[19px] [font-family:'Inter',Helvetica]">
              ContentSociety
            </span>
          </div>

          {/* Navigation Links - Reduced spacing */}
          <nav className="flex items-center gap-[40px] px-[30px] py-[8px]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="[font-family:'Inter',Helvetica] font-medium text-[#86878a] text-base leading-[19px] hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Post a job button */}
          <Button
            variant="outline"
            className="w-[120px] h-10 bg-white text-black rounded-xl hover:bg-gray-100 text-sm"
          >
            Post a job
          </Button>
        </div>
      </header>
      {/* Hero Section */}
      <section className="flex flex-col items-center w-full min-h-screen relative overflow-hidden">
        <div className="relative w-full h-full max-w-[1920px] flex flex-col gap-5 border border-red-500">
          
          <div className="flex flex-col items-center justify-center text-center px-4 mt-[8rem] z-[1] border border-blue-400">
            <h1 className="w-full max-w-[900px] text-4xl lg:text-6xl [font-family:'Inter',Helvetica] font-semibold text-white leading-[60px]">
              Hire top talent for your
            </h1>
            <h1 className="[font-family:'Inter',Helvetica] font-semibold text-4xl lg:text-6xl leading-[70px] bg-gradient-to-r from-[#F0EEBD] via-[#F17945] to-[#7431E8] bg-clip-text text-transparent">
              content creation
            </h1>
            <p className="max-w-[600px] mt-4 [font-family:'Inter',Helvetica] font-normal text-[#9da7b3] text-base text-center leading-[24px]">
              Connect with skilled professionals to bring your content vision to
              life. From videographers to editors, find your perfect team.
            </p>
            <Button className="mt-8 w-[209px] h-14 rounded-[106px] bg-white text-black hover:bg-gray-100">
              <span className="[font-family:'Inter',Helvetica] font-medium text-base">
                Hire Talent
              </span>
            </Button>
          </div>

          {/* Background images */}
          <Image
            className="absolute w-[99%] top-[60px] left-0 z-0"
            alt="Textured background"
            src="/templanding/abstract/textured-background.png"
            width={1200}
            height={981}
          />
          {/* Radial glow */}
          <div className="z-10 relative mt-[2rem] w-full border border-blue-800">
            <div className="relative flex h-full w-full mt-28">
              <Image
                className="h-[490px] mx-auto z-1"
                // style={{'left': 'calc(100% - 98vw)'}}
                alt="circle shine"
                src="/templanding/abstract/circle-shine.png" 
                priority={true}
                placeholder='blur'
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMM5jszGQADqwHCQLH4TQAAAABJRU5ErkJggg=="
                width={1820}
                height={400}
              />
            </div>
            {/* Profile Cards */}
            <div className="absolute inset-0 border border-pink-500 w-full h-fit flex items-center justify-center">
              <div className="w-fit z-30">
                <HeroProfileCard />
              </div>
              <div className="absolute h-[27rem] w-[30rem] border border-red-500">
                <div className="absolute -right-56 top-[3.9rem] rotate-[17.6deg]">
                  <HeroProfileCard />
                </div>
                <div className="absolute -left-56 top-[3.9rem] -rotate-[17.6deg]">
                  <HeroProfileCard />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Bento-section */}
      <section className="flex flex-col items-center w-full border border-slate-400 min-h-screen">
        {/* First bento gradient */}
        {/* <div class="w-[640px] h-[420px] rounded-lg bg-[linear-gradient(to_bottom,_#120E25_14%,_#352390_69%)]"></div> */}
        {/* <div className="grid gap-6 p-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-6 auto-rows-fr">
          <!-- Box 1: Flexible Search (Takes 2 columns on large screens) -->
          <div className="lg:col-span-4 bg-[#1a1235] rounded-xl p-6"> 
              <h3 className="text-white font-semibold">Flexible Search</h3>
              <p className="text-gray-400">Find the right candidate...</p>
          </div>

          <!-- Box 2: Master Social Presence -->
          <div className="lg:col-span- bg-[#1a1235] rounded-xl p-6">
              <h3 className="text-white font-semibold">Master Social Presence</h3>
              <p className="text-gray-400">Free social media managers...</p>
          </div>

          <!-- Box 3: Effortless Hiring Process (Takes 2 columns on large screens) -->
          <div className="lg:col-span-2 bg-[#1a1235] rounded-xl p-6">
              <h3 className="text-white font-semibold">Effortless Hiring Process</h3>
              <p className="text-gray-400">Find and onboard top talent...</p>
          </div>

          <!-- Box 4: Diverse Talent Pool -->
          <div className="bg-[#1a1235] rounded-xl p-6">
              <h3 className="text-white font-semibold">Diverse Talent Pool</h3>
              <p className="text-gray-400">Access a curated network...</p>
          </div>
        </div> */}

        <div className="border border-rose-600 w-[80%] h-[70vh] mt-8">
          <div className="w-full">
            {/* Card-1 */}
            <div className="w-[640px] h-[420px] rounded-2xl bg-[linear-gradient(to_bottom,_#120E25_14%,_#352390_69%)]">

            </div>
          </div>
        </div>

      </section>

    </main> 
    
  );
}
