'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-white/50 backdrop-blur-lg dark:bg-darkTheme/50 border-b border-gray-200 dark:border-gray-800 transition-colors">
      
      {/* Logo */}
      <a href="#top" className="text-2xl font-bold font-Ovo text-black dark:text-white">
        Vrushabh<span className="text-rose-500">.</span>
      </a>

      {/* Nav Items */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/80 dark:bg-gray-900/80 shadow-sm border border-gray-200 dark:border-gray-700">
        <li><a className="font-Ovo text-black dark:text-white hover:text-rose-500" href="#top">Home</a></li>
        <li><a className="font-Ovo text-black dark:text-white hover:text-rose-500" href="#about">About me</a></li>
        <li><a className="font-Ovo text-black dark:text-white hover:text-rose-500" href="#services">Services</a></li>
        <li><a className="font-Ovo text-black dark:text-white hover:text-rose-500" href="#work">My Work</a></li>
        <li><a className="font-Ovo text-black dark:text-white hover:text-rose-500" href="#contact">Contact me</a></li>
      </ul>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle Button */}
        <button 
          onClick={() => setIsDarkMode(prev => !prev)}
          className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle Theme"
        >
          <Image 
            src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
            alt="theme toggle" 
            className="w-5 h-5" 
          />
        </button>

        {/* Contact Button */}
        <a 
          href="#contact" 
          className="hidden lg:flex items-center gap-3 px-6 py-2.5 border border-black dark:border-white rounded-full font-Ovo text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
        >
          Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className="w-3" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar