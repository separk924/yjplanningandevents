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
            <div className="text-slate-500">
                <div className="flex justify-center items-start gap-10 px-10 py-10 flex-wrap">
                    {/* IMAGE */}
                    <div className="flex-shrink-0">
                        <img src="/profile.png" className="w-80 h-100" alt="Profile" />
                    </div>

                    {/* FORM */}
                    <form className="max-w-md w-full">
                        {/* NAME INPUTS */}
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                type="text"
                                name="floating_first_name"
                                id="floating_first_name"
                                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer"
                                placeholder=" "
                                required/>
                                <label
                                htmlFor="floating_first_name"
                                className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                First name
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                type="text"
                                name="floating_last_name"
                                id="floating_last_name"
                                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer"
                                placeholder=" "
                                required/>
                                <label
                                htmlFor="floating_last_name"
                                className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Last name
                                </label>
                            </div>
                        </div>

                        {/* EMAIL */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer"
                                placeholder=" "
                                required/>
                            <label
                                htmlFor="email"
                                className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Email
                            </label>
                        </div>

                        {/* PHONE NUMBER */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer"
                                placeholder=" "
                                required/>
                            <label
                                htmlFor="phone"
                                className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Phone Number
                            </label>
                        </div>

                        {/* EVENT LOCATION */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="location"
                                id="location"
                                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer"
                                placeholder=" "
                                required/>
                            <label
                                htmlFor="location"
                                className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Event Location
                            </label>
                        </div>

                        {/* EVENT DATE */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="date"
                                name="eventDate"
                                id="eventDate"
                                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer"
                                placeholder=" "
                                required/>
                            <label
                                htmlFor="eventDate"
                                className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Event Date
                            </label>
                        </div>

                        {/* GUEST COUNT */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="number"
                                name="guestCount"
                                id="guestCount"
                                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer"
                                placeholder=" "
                                required/>
                            <label
                                htmlFor="guestCount"
                                className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Est. Guest Count
                            </label>
                        </div>

                        {/* ADDITIONAL DETAILS */}
                        <div className="relative z-0 w-full mb-5 group">
                            <textarea
                                name="addDetails"
                                id="addDetails"
                                rows={4} // or however many rows you want to show by default
                                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer resize-none"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="addDetails"
                                className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Additional Details
                            </label>
                        </div>

                        <button
                        type="submit"
                        className="font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center shadow-sm hover:shadow-md cursor-pointer bg-[#FFEBE3]">
                        Submit
                        </button>
                    </form>
                </div>
            </div>
          </main>
        </div>
      </>
    );
}