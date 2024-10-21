"use client"

import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Use usePathname to get the current path

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const getLinkClass = (path) => {
        return pathname === path || (path === "/gallery" && pathname.startsWith("/gallery"))
            ? "block py-2 px-3 text-white bg-black rounded-full md:bg-black md:p-4" // Active link class
            : "block py-2 px-3 text-black rounded-full hover:bg-black hover:text-white md:hover:bg-black md:border-0 md:hover:text-white md:p-4"; // Default link class
    };
    return (
        <>
            <nav className="bg-white">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Frozen In Time</span>
                    </a>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
                        aria-controls="navbar-default"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <a href="/" className={getLinkClass("/")}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href={"/gallery"} className={getLinkClass("/gallery")}>
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href="/services" className={getLinkClass("/services")}>
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/pricing" className={getLinkClass("/pricing")}>
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className={getLinkClass("/contact")}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}