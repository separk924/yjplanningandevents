"use client";
import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import { SharpMenu } from "@/assets/Menu";
import Image from 'next/image';

export default function Home() {
    const [openNavbar, setOpenNavbar] = useState(false);
    const [animationClass, setAnimationClass] = useState('animate-slide-in-from-left');
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [eventLocation, setEventLocation] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [guestCount, setGuestCount] = useState(0);
    const [additionalDetails, setAdditionalDetails] = useState("");

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

    // ------------------ FORM SUBMIT HANDLER ------------------
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevent page reload

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Convert FormData to JSON
        const data = Object.fromEntries(formData.entries());

        try {
            // Create new user
            const res = await fetch("/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Failed to submit form");

            // Send email
            fetch("/api/emails", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            }).catch((err) => console.error("Email failed:", err));

            const result = await res.json();
            console.log("Form submitted successfully:", result);

            // Optionally, reset the form
            form.reset();
        } catch (err) {
            console.error(err);
        }
    };

    return (
      <>
        <div className="relative min-h-screen bg-cover bg-left bg-no-repeat">
          <main className={`transition-opacity duration-500 `}>
            <div className="flex items-center justify-between w-full px-8">
              <div className="flex items-center">
                <Image alt="YJ Planning & Events Logo - Wedding Planning Services in Seattle" src="/YJ_Planning&Events_Logo.png" className="w-10 sm:w-14 md:w-16 lg:w-20 h-auto mt-2" width={60} height={100}/>
              </div>
              <div className="text-5xl text-center">
                Contact
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
                        <Image alt="profile" src="/profile.png" className="w-[250px] sm:w-[300px] md:w-[350px] mx-auto" width={350} height={583}/>
                    </div>

                    {/* FORM */}
                    <form className="max-w-md w-full" onSubmit={handleSubmit}>
                        {/* NAME INPUTS */}
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer"
                                placeholder=" "
                                required/>
                                <label
                                htmlFor="firstName"
                                className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                First name
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer"
                                placeholder=" "
                                required/>
                                <label
                                htmlFor="lastName"
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                name="phoneNumber"
                                id="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer"
                                placeholder=" "
                                required/>
                            <label
                                htmlFor="phoneNumber"
                                className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Phone Number
                            </label>
                        </div>

                        {/* EVENT LOCATION */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="eventLocation"
                                id="eventLocation"
                                value={eventLocation}
                                onChange={(e) => setEventLocation(e.target.value)}
                                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer"
                                placeholder=" "
                                required/>
                            <label
                                htmlFor="eventLocation"
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
                                value={eventDate}
                                onChange={(e) => setEventDate(e.target.value)}
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
                                value={guestCount}
                                onChange={(e) => setGuestCount(Number(e.target.value))}
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
                                name="additionalDetails"
                                id="additionalDetails"
                                value={additionalDetails}
                                onChange={(e) => setAdditionalDetails(e.target.value)}
                                rows={4} // or however many rows you want to show by default
                                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer resize-none"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="additionalDetails"
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