"use client";
import { useState } from "react";
import LogoLoader from "@/components/LogoLoader";
import Navbar from "@/components/Navbar";
import { SharpMenu } from "@/assets/Menu";

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
        <div className="relative min-h-screen bg-cover bg-left bg-no-repeat">
          <main className={`transition-opacity duration-500 `}>
            <div className="flex items-center justify-between w-full px-8">
              <div className="flex items-center">
                <img src="/YJ_Planning&Events_Logo.png" className="w-15 h-25 mt-2"/>
              </div>
              <div className="text-5xl text-center">
                Services
              </div>
              {!openNavbar ? (
                <div className="flex items-center cursor-pointer mr-10" onClick={handleOpen}>
                    <SharpMenu/>
                </div>
              ) : (
                <Navbar {...navBarProps}/>
              )}
            </div>
            <div className="mt-10 text-slate-500 overflow-hidden">
              <div className="flex justify-center">
                <img src="/profile.png" className="w-80 h-100"/>
              </div>
              <p className="text-xl font-bold m-10 ml-80 mr-80">
                I am happy to take your donation; any amount will be greatly appreciated. 
                The Japanese yen for commerce is still well-known. Happiness can be found in the depths of chocolate pudding. 
                The reservoir water level continued to lower while we enjoyed our long shower.</p>
              <p className="text-xl font-bold m-10 ml-80 mr-80">
                The bread dough reminded her of Santa Clause’s belly.
                The pigs were insulted that they were named hamburgers.
                She felt that chill that makes the hairs on the back of your neck when he walked into the room.
                You have every right to be angry, but that doesn't give you the right to be mean.
                Two more days and all his problems would be solved.</p>
              <p className="text-xl font-bold m-10 ml-80 mr-80">
                They called out her name time and again, but were met with nothing but silence.
                I was very proud of my nickname throughout high school but today- I couldn’t be any different to what my nickname was.
                I come from a tribe of head-hunters, so I will never need a shrink.
                Before he moved to the inner city, he had always believed that security complexes were psychological.
                The small white buoys marked the location of hundreds of crab pots.</p>
            </div>
          </main>
        </div>
      </>
    );
}