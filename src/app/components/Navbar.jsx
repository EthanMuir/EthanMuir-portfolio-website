"use client"
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { useState } from "react"
import Link from "next/link"
import {AioutlineMenu, AiOutlineClose} from "react-icons/ai"
import { BsFillAspectRatioFill } from "react-icons/bs"

export default function Navbar()
{
    const [menuIcon, setIcon] = useState(false);

    const handleSmallerScreensNavigation = () =>{
        setIcon(!menuIcon);
    }

    return (
        <header className=" bg-gradient-to-r from-blue-500 to-teal-200 text-black w-full ease-in duration-300 fixed top-0 left-0 z-10">
            <nav className="max-w-[1366] mx-auto h-[100px] flex justify-between items-center p-4">
                <div>
                    <Link href='/' onClick={handleSmallerScreensNavigation}>
                        <span className="font-extrabold text-3xl md:text-2xl xl:text3xl uppercase hover:text-white">Home</span>
                    </Link>
                </div>

                <ul className="flex gap-5 uppercase font-semibold text-1xl lg:text-[20px] text-black mx-auto">
                    <li className='mr-4 lg:mr-8 hover:text-white'>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li className='mr-4 lg:mr-8 hover:text-white'>
                        <Link href="/resume">Resume</Link>
                    </li>
                </ul>

            </nav>
        </header>
    ) 
    
}