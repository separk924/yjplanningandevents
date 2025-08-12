"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { SharpMenu } from "@/assets/Menu";

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
                <img src="/YJ_Planning&Events_Logo.png" className="w-15 h-25 mt-2"/>
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
              <div className="max-w-4xl w-full px-6">
                <h1 className="text-2xl font-bold mt-10 -mb-6">Full Planning</h1>
                <p className="text-xl font-bold m-10">
                  Perfect for couples who want a seamless, guided experience from “Yes” to “I Do.”<br/>
                  From the very first consultation to the last dance, I’ll manage every detail — designing your event’s look and feel, sourcing and managing 
                  vendors, creating and tracking budgets, building timelines, and ensuring everything comes together flawlessly. This package gives you the 
                  freedom to truly enjoy the planning process without the overwhelm.<br/><br/>
                  Includes:</p>
                <ul className="list-disc list-outside text-xl font-bold m-10 pl-8 -mt-10">
                  <li>Initial vision and style consultation</li>
                  <li>Venue and vendor research, recommendations, and bookings</li>
                  <li>Budget creation and tracking</li>
                  <li>Monthly planning meetings and updates</li>
                  <li>Timeline creation and management</li>
                  <li>Vendor communication and contract management</li>
                  <li>On-site coordination and management on the day of the event</li>
                  <li>Unlimited email support throughout planning</li>
                </ul>
                <p className="text-xl font-bold m-10">Full planning starts at $4550</p>

                <h1 className="text-2xl font-bold mt-10 -mb-6">Partial Planning</h1>
                <p className="text-xl font-bold m-10">
                  Ideal for couples who have started planning but want professional guidance to bring all the pieces together.<br/>
                  You may already have your venue and some vendors booked, but need help refining the design, finalizing details, 
                  and keeping everything on track. I’ll step in partway to make sure your vision is cohesive, your plans are solid, 
                  and nothing is overlooked.<br/><br/>
                  Includes:</p>
                <ul className="list-disc list-outside text-xl font-bold m-10 pl-8 -mt-10">
                  <li>Review of plans, contracts, and vendors booked so far</li>
                  <li>Supplemental vendor recommendations</li>
                  <li>Design refinement and style direction</li>
                  <li>Budget review and adjustments</li>
                  <li>6 month, 3 month, 1 month, 2 week before planning meetings</li>
                  <li>Timeline creation and vendor confirmation</li>
                  <li>On-site coordination and management on the day of the event</li>
                </ul>
                <p className="text-xl font-bold m-10">Partial planning starts at $3250</p>

                <h1 className="text-2xl font-bold mt-10 -mb-6">Day-Of Coordination</h1>
                <p className="text-xl font-bold m-10">
                  For couples who have done all the planning but want to relax and fully enjoy the day without worrying about logistics.<br/>
                  I’ll step in a few weeks before your event to learn all the details, confirm vendor arrangements, create a detailed 
                  timeline, and handle every moving part on the wedding day so you can simply be present and soak in the moments.<br/><br/>
                  Includes:</p>
                <ul className="list-disc list-outside text-xl font-bold m-10 pl-8 -mt-10">
                  <li>Consultation 4–6 weeks before the event</li>
                  <li>Review of contracts, vendor lists, and final details</li>
                  <li>Creation of a detailed day-of timeline</li>
                  <li>Vendor confirmations and point of contact</li>
                  <li>On-site management of the ceremony, reception, and transitions</li>
                  <li>Coordination of setup, décor placement, and breakdown</li>
                  <li>Discreet troubleshooting for any unexpected issues</li>
                </ul>
                <p className="text-xl font-bold m-10">Day of Coordinator starts at $1250</p>

                <p className="text-xl font-bold mt-10 mb-30">No matter which package you choose, my goal is the same: to bring your vision to life while keeping the process calm, 
                  organized, and beautifully executed.</p>
              </div>
            </div>
              
          </main>
        </div>
      </>
    );
}