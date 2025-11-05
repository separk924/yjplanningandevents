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
        <div className="relative min-h-screen bg-contain sm:bg-cover bg-left bg-no-repeat bg-[#F2F6F7]" style={{ backgroundImage: "url('/main.jpg')" }}>
          <main className={`transition-opacity duration-500 ${isLogoDone ? 'opacity-100' : 'opacity-0'}`}>
            <div className="grid grid-cols-3 items-center w-full">
              <div></div>
              <div className="flex justify-center">
                <Image alt="logo" src="/YJ_Planning&Events_Logo.png" className="mt-2 w-20 sm:w-28 md:w-32 lg:w-35 h-auto" width={100} height={180}/>
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
            <div className="absolute bottom-[50px] overflow-hidden flex justify-start items-center w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold m-10 sm:m-20 md:ml-20 sm:text-white text-black">Let&apos;s make your dream wedding come true</h1>
            </div>
          </main>
        </div>
      </>
    );
}
