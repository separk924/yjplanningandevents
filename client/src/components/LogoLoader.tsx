"use client";

import { useEffect, useState } from "react";

interface LogoLoaderProps {
    onFinish: () => void;
}

const LogoLoader = ({ onFinish }: LogoLoaderProps ) => {
    const [animateIn, setAnimateIn] = useState(false);
    const [animateOut, setAnimateOut] = useState(false);

    useEffect(() => {
        setAnimateIn(true);

        const fadeOutTimer = setTimeout(() => {
            setAnimateOut(true);
        }, 3000);

        const finishTimer = setTimeout(() => {
            onFinish();
        }, 4000)
        
        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(finishTimer);
        };
    }, [onFinish]);

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 bg-orange-50
            ${animateOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className={`transform transition-all duration-2000
                ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-[-200px] opacity-0'}`}>
                <img src="/YJ_Planning&Events_Logo.png" alt="Logo" className="w-32 h-[220px]"/>
            </div>
        </div>
    )
} 

export default LogoLoader;