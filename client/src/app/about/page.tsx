"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { SharpMenu } from "@/assets/Menu";
// import Image from 'next/image';

export default function Home() {
    const [openNavbar, setOpenNavbar] = useState(false);
    const [animationClass, setAnimationClass] = useState('animate-slide-in-from-left');

    const handleOpen = () => {
        setAnimationClass('animate-slide-in-from-left');
        setTimeout(() => {
            setOpenNavbar(true);
        }, 10)
    }

    const navBarProps = {
      setOpenNavbar,
      animationClass,
      setAnimationClass
    }

    return (
      <>
        <div className="relative min-h-screen bg-cover bg-left bg-no-repeat">
          <main className={`transition-opacity duration-500 `}>
            <div className="flex items-center justify-between w-full px-8">
              <div className="flex items-center">
                <img alt="logo" src="/YJ_Planning&Events_Logo.png" className="w-15 h-25 mt-2"/>
              </div>
              <div className="text-5xl text-center">
                About
              </div>
              {!openNavbar ? (
                <div className="flex items-center cursor-pointer mr-10" onClick={handleOpen}>
                    <SharpMenu/>
                </div>
              ) : (
                <Navbar {...navBarProps}/>
              )}
            </div>
            <div className="mt-10 text-slate-500 overflow-hidden flex flex-col items-center">
              <div className="flex justify-center">
                <img alt="profile" src="/profile.png" className="w-80 h-100"/>
              </div>
              <div className="max-w-4xl w-full px-4">
                <p className="text-xl font-bold m-10">
                  Hello, and welcome! My name is Allison, and I’m the founder, hands, and heart behind YJ Planning & Events — 
                  a boutique event planning service dedicated to creating timeless, romantic, and thoughtfully curated celebrations.</p>
                <p className="text-xl font-bold m-10">
                  My journey into event planning began in the most personal way: helping close friends plan their weddings and special 
                  occasions. I quickly became the “go-to” person for timelines, floral ideas, and design inspiration — not because it was 
                  my job at the time, but because I genuinely loved crafting moments that felt intentional and beautiful. Word of mouth 
                  began to spread, and one event led to another, until I realized just how much joy and fulfillment this work brought me.</p>
                <p className="text-xl font-bold m-10">
                  Over the years, I’ve learned that planning an event isn’t just about logistics and décor; it’s about telling a story. Each 
                  celebration I design reflects the personalities, values, and dreams of the people at its heart. I consider it an incredible 
                  honor to be entrusted with such meaningful milestones, and I approach every project with care, creativity, and a commitment 
                  to making the process as seamless and enjoyable as possible.</p>
                <p className="text-xl font-bold m-10">
                  Whether it’s an intimate gathering, a once-in-a-lifetime wedding, or a milestone celebration, my goal is to create moments 
                  that you’ll remember — not just for how beautiful they looked, but for how they made you feel.</p>
              </div>
            </div>
              
          </main>
        </div>
      </>
    );
}