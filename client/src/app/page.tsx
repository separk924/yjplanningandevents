"use client";
import { useState } from "react";
import LogoLoader from "@/components/LogoLoader";
import Navbar from "@/components/Navbar";
import { SharpMenu } from "../assets/Menu"
// import Image from 'next/image';

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
        <div className="relative min-h-screen bg-cover bg-left bg-no-repeat" style={{ backgroundImage: "url('/main.png')" }}>
          <main className={`transition-opacity duration-500 ${isLogoDone ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center">
              <div className="w-full flex justify-center">
                <img alt="logo" src="/YJ_Planning&Events_Logo.png" className="w-30 h-50 mt-2"/>
              </div>
              {!openNavbar ? (
                <div className="width-auto mr-3 -mt-30" onClick={handleOpen}>
                    <SharpMenu/>
                </div>
              ) : (
                <Navbar {...navBarProps}/>
              )}
            </div>
            <div className="absolute bottom-[50px] text-orange-50 overflow-hidden">
              <h1 className="text-4xl font-bold ml-10">Let&apos;s make your dream wedding come true</h1>
            </div>
          </main>
        </div>
      </>
    );
}
