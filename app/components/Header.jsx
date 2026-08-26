'use client'
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'motion/react'

const Header = () => {
  return (
    <div className='relative w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 dark:text-white overflow-hidden'>
      
      {/* Soft Blue Glow Background */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] pointer-events-none dark:opacity-20"
      />

      {/* Profile Image Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg mb-1'
      >
        <Image 
          src="/face.jpeg" 
          alt="Vrushabh Prajapati" 
          fill
          sizes="(max-width: 640px) 112px, 128px"
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Modern Greeting Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/30 backdrop-blur-md shadow-sm mb-2'
      >
        <span className='text-xs sm:text-sm font-semibold font-Ovo text-blue-900 dark:text-blue-300 flex items-center gap-2'>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Hi! I'm Vrushabh 👋
        </span>
      </motion.div>

      {/* Main Headline - Solid Blue Accent */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='text-3xl sm:text-6xl lg:text-[64px] font-Ovo text-slate-900 dark:text-white font-bold leading-tight tracking-tight'
      >
        Full-Stack{' '}
        <span className='text-blue-600 dark:text-blue-400'>
          Software Engineer.
        </span>
      </motion.h1>

      {/* Subtext Paragraph */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='max-w-2xl mx-auto font-Ovo text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed'
      >
        B.E. Computer Science, 2026. Specializing in MERN stack, REST APIs, and GenAI SaaS platforms. Built production-grade applications covering multi-tenancy, RAG pipelines, asynchronous processing, and CI/CD.
      </motion.p>

      {/* Action Buttons (Solid Black & High Contrast) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='flex flex-col sm:flex-row items-center gap-4 mt-4'
      >
        {/* Contact Me Button - Black */}
        <motion.a 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="#contact" 
          className='px-9 py-3.5 border border-black dark:border-white rounded-full bg-black text-white flex items-center gap-3 dark:bg-white dark:text-black font-medium transition-all shadow-md'
        >
          Contact Me 
          <Image 
            src={assets.right_arrow_white} 
            alt="arrow" 
            className='w-4 dark:invert'
          />
        </motion.a>

        {/* My Resume Button */}
        <motion.a 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="/VRUSHABH-resume.pdf" 
          download 
          className='px-9 py-3.5 rounded-full border border-slate-400 dark:border-slate-600 flex items-center gap-3 bg-white text-slate-900 dark:bg-transparent dark:text-white dark:hover:bg-slate-800/50 font-medium transition-all'
        >
          My Resume 
          <Image src={assets.download_icon} alt="download" className='w-4 dark:invert' />
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Header