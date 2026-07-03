import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
export const Header = ({ isOpen, setIsOpen }) => {
    const [brands, setBrands] = useState(false);
    return (
        <div className="header bg-white fixed top-10 w-full h-[80px] z-[100] ">
            <div className="container flex justify-between items-center p-4 md:px-8 md:py-12 w-full h-full max-w-none">
                {/* toggole-menu */}
                <div className="nav relative">
                    {/* toggole-button */}
                    <button onClick={() => setIsOpen(!isOpen)} className='text-3xl'>
                        {isOpen ? <IoCloseOutline /> :<AiOutlineMenu  />}
                    </button>
                    {/* menu */}
                    {isOpen && (
                        <>
                              {/* Overlay */}
                            <div
                                className="fixed top-[120px] left-0 right-0 bottom-0 bg-black/40 z-40"
                                onClick={() => setIsOpen(false)}
                            />
                            
                        </>
                       
                    )}
                    {/* Main_List */}
                    <div className={` absolute top-[50px] left-[-40px] bg-white shadow-md z-[999]  transition-all
                                        duration-300 ease-in-out
                         ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                        <div className="menu flex flex-col gap-3  w-[400px] py-8 ">
                            {/* LINKS */}
                            <button onClick={() => setBrands(!brands)} className='text-3xl '>
                            <NavLink 
                                className={`flex  justify-between items-center py-2 px-4 md:px-8 hover:bg-slate-100 group`}>
                                <span className='text-xl text-slate-900'>Brands</span>
                               
                                    <IoIosArrowRoundForward className={`transition-transform duration-300 ${brands ?  "rotate-180" : ""}`} />
                                   
                               
                                {/* BRANDS MENU */}
                                {brands && (
                                    <>
                                            <div className={` absolute  top-[0] left-[0] bg-white shadow-md z-[999]  transition-all
                                        duration-300 ease-in-out`}>
                                                <div className="menu flex flex-col gap-3 overflow-y-auto max-h-[80vh]  w-[400px] py-8 ">
                                                    {/* LINKS */}
                                                    <NavLink 
                                                        className={`flex  justify-between items-center py-2 px-4 md:px-8 hover:bg-slate-100 group`}>
                                                        <span className='text-xl text-slate-900'>Brands</span>
                                                        <button onClick={() => setBrands(!brands)} className='text-3xl '>
                                                            <IoIosArrowRoundForward className={`transition-transform duration-300 ${brands ? "rotate-180" : ""}`} />

                                                        </button>
                                                    </NavLink>
                                                <NavLink to={"/ageal"}
                                                    className={`flex  justify-between items-center py-2 px-4 md:px-8 hover:bg-slate-100 group`}>
                                                    <span className='text-xl text-slate-900'>AGEAL</span>
                                                   
                                                </NavLink>
                                                <NavLink to={"/boduim"}
                                                    className={`flex  justify-between items-center py-2 px-4 md:px-8 hover:bg-slate-100 group`}>
                                                    <span className='text-xl text-slate-900'>BODUIM </span>

                                                </NavLink>
                                                <NavLink to={"/cica"}
                                                    className={`flex  justify-between items-center py-2 px-4 md:px-8 hover:bg-slate-100 group`}>
                                                    <span className='text-xl text-slate-900'>CICA </span>

                                                </NavLink>
                                                <NavLink to={"/melatex"}
                                                    className={`flex  justify-between items-center py-2 px-4 md:px-8 hover:bg-slate-100 group`}>
                                                    <span className='text-xl text-slate-900'>MELATEX </span>

                                                </NavLink>
                                                <NavLink to={"/sebaclare"}
                                                    className={`flex  justify-between items-center py-2 px-4 md:px-8 hover:bg-slate-100 group`}>
                                                    <span className='text-xl text-slate-900'>SEBACLARE</span>
                                                    
                                                </NavLink>
                                                <NavLink to={"/straline"}
                                                    className={`flex  justify-between items-center py-2 px-4 md:px-8 hover:bg-slate-100 group`}>
                                                    <span className='text-xl text-slate-900'> STRALINE  </span>

                                                </NavLink>
                                                <NavLink to={"/trix"}
                                                    className={`flex  justify-between items-center py-2 px-4 md:px-8 hover:bg-slate-100 group`}>
                                                    <span className='text-xl text-slate-900'>TRIX </span>

                                                </NavLink>
                                                <NavLink to={"/urepar"}
                                                    className={`flex  justify-between items-center py-2 px-4 md:px-8 hover:bg-slate-100 group`}>
                                                    <span className='text-xl text-slate-900'>UREBAR </span>

                                                </NavLink>
                                                <NavLink to={"/uvepro"}
                                                    className={`flex  justify-between items-center py-2 px-4 md:px-8 hover:bg-slate-100 group`}>
                                                    <span className='text-xl text-slate-900'>UVEPRO </span>

                                                </NavLink>
                                            </div>
                                            

                                        </div>
                                    </>
                                )}
                            </NavLink>
                            </button>
                            <NavLink to={"/skincare"}
                                className={`flex  justify-between items-center py-2 px-4 md:px-8 hover:bg-slate-100 group`}>
                                <span className='text-xl text-slate-900'>Skin Care</span>

                            </NavLink>
                            <NavLink to={"/haircare"}
                                className={`flex  justify-between items-center py-2 px-4 md:px-8 hover:bg-slate-100 group`}>
                                <span className='text-xl text-slate-900'>Hair Care</span>

                            </NavLink>
                            <NavLink to={"/personalcare"}
                                className={`flex  justify-between items-center py-2 px-4 md:px-8 hover:bg-slate-100 group`}>
                                <span className='text-xl text-slate-900'>Personal Care</span>

                            </NavLink>
                            <NavLink to={"/offers"}
                                className={`flex  justify-between items-center py-2 px-4 md:px-8 hover:bg-slate-100 group`}>
                                <span className='text-xl text-slate-900'>Offers</span>
                                <IoIosArrowRoundForward className='text-3xl transition-transform duration-300 group-hover:translate-x-2' />
                            </NavLink>
                            <NavLink to={"/bunndelsandkits"}
                                className={`flex  justify-between items-center py-2 px-4 md:px-8 hover:bg-slate-100 group`}>
                                <span className='text-xl text-slate-900'>Bunndels And Kits </span>

                            </NavLink>
                            <NavLink to={"/aboutus"}
                                className={`flex  justify-between items-center py-2 px-4 md:px-8 hover:bg-slate-100 group`}>
                                <span className='text-xl text-slate-900'>About US</span>

                            </NavLink>
                        </div>
                        {/* Second_List */}
                    
                    </div>

                </div>
                {/* logo */}
                <div className="logo flex flex-col items-center">
                    <h1 className='text-2xl font-barlow'>HAYAH</h1>
                    <p className='text-xs text-gray-500 font-barlow tracking-tight'>LABORATORIES</p>
                </div>
                {/* icons */}
                <div className="icons  ">
                    <div className="div flex gap-4 pr-0 text-3xl">
                        <NavLink to={"login"}>
                            <CiUser className='transition-all duration-300 hover:scale-125 cursor-pointer' />
                      </NavLink>
                        <NavLink to={"/cart"}>
                            <PiShoppingCartLight className='transition-all duration-300 hover:scale-125 cursor-pointer' />
                      </NavLink>
                    </div>
                  
                </div>


                



               

            </div>
        </div>
    )
};
