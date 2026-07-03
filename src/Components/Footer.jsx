import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-slate-100 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-8">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Logo */}
                    <div>
                        <h1 className="font-barlow text-4xl">
                            HAYAH
                        </h1>

                        <p className="text-xs tracking-[0.4em] uppercase text-gray-500">
                            Laboratories
                        </p>
                    </div>

                    {/* About */}
                    <div>
                        <h3 className="text-lg mb-4 font-medium">
                            HAYAH Laboratories
                        </h3>

                        <p className="text-sm text-gray-500 leading-7">
                            Was founded in 2016 to develop a unique line of
                            dermo-cosmetic products which provide solutions
                            to basic skin problems.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg mb-4 font-medium">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-gray-500">
                            <li>
                                <NavLink
                                    to="/aboutus"
                                    className="hover:text-black hover:underline transition"
                                >
                                    About Us
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/contact"
                                    className="hover:text-black hover:underline transition"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Policies */}
                    <div>
                        <h3 className="text-lg mb-4 font-medium">
                            Policies
                        </h3>

                        <ul className="space-y-3 text-gray-500">
                            <li>
                                <NavLink to={"/termsofuse"}
                                    className={` transition hover:text-black hover:underline`}>
                                    Terms of Use
                                </NavLink>
                                    
                               
                            </li>

                            <li>
                                <NavLink to={"/return"}
                                    className={` transition hover:text-black hover:underline`}>
                                    Return & Exchange Policy
                                </NavLink>
                                  
                               
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Newsletter */}
                <div className="mt-16 max-w-md">
                    <h2 className="text-lg mb-4">
                        Subscribe to our emails
                    </h2>

                    <div className="relative ">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full border border-gray-300 rounded-full py-3 px-5 pr-14 outline-none focus:border-black"
                        />

                        <button className="absolute right-5 top-1/2 -translate-y-1/2">
                            <IoArrowForward className="text-xl" />
                        </button>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Social */}
                    <div className="flex gap-5 text-xl">

                        <FaFacebookF className="cursor-pointer transition hover:scale-110 hover:text-blue-600" />

                        <FaInstagram className="cursor-pointer transition hover:scale-110 hover:text-pink-600" />

                        <FaTiktok className="cursor-pointer transition hover:scale-110" />

                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-gray-500">
                        © 2026 HAYAH Laboratories. All rights reserved.
                    </p>

                </div>

            </div>
        </footer>
    );
}