"use client";
import { useState } from "react";
import LogoLoader from "@/components/LogoLoader";
import Navbar from "@/components/Navbar";
import { SharpMenu } from "../assets/Menu"
import Image from 'next/image';

export default function Home() {
    const [isLogoDone, setIsLogoDone] = useState(false);
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
        {!isLogoDone && <LogoLoader onFinish={() => {return setIsLogoDone(true);}}/>}
        <h1 className="sr-only">Wedding Day Coordinator and Planner in Seattle</h1>

          <div className="relative w-full h-screen">
            <Image
              src="/main.jpg"
              alt="Wedding Planning Hero"
              fill
              className="object-cover"
              priority />
            <main className={`absolute inset-0 transition-opacity duration-500 ${isLogoDone ? 'opacity-100' : 'opacity-0'}`}>
              <div className="grid grid-cols-3 items-center w-full">
                <div></div>
                <div className="flex justify-center">
                  <Image
                    alt="YJ Planning & Events Logo - Wedding Planning Services in Seattle"
                    src="/YJ_Planning&Events_Logo.png"
                    className="mt-2 w-32 lg:w-35 h-auto"
                    width={100}
                    height={180}
                  />
                </div>
                <div className="ml-auto mr-3 sm:-mt-30">
                  {!openNavbar ? (
                    <div onClick={handleOpen}>
                      <SharpMenu />
                    </div>
                  ) : (
                    <Navbar {...navBarProps} />
                  )}
                </div>
              </div>
              <div className="absolute bottom-[50px] flex justify-start items-center w-full overflow-hidden">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold m-10 sm:m-20 md:ml-20 text-white">
                  Let&apos;s make your dream wedding come true
                </h2>
                <h3 className="sr-only">
                  Day-of Wedding Coordination and Full Wedding Planning Services
                </h3>
              </div>
            </main>
          </div>
      </>
    );
}
