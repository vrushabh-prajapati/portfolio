'use client'
import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Services = ({ isDarkMode }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='services' 
      className='w-full px-[12%] py-10 scroll-mt-20 bg-white text-gray-900 dark:bg-transparent dark:text-white transition-colors duration-300'
    >
      <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='text-center mb-2 text-lg font-Ovo text-blue-600 dark:text-blue-400 font-semibold'
      >
        What I offer
      </motion.h4>
      
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-center text-4xl sm:text-5xl font-Ovo font-bold text-slate-900 dark:text-white'
      >
        My Services
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-slate-600 dark:text-slate-300 font-medium text-base sm:text-lg leading-relaxed'
      >
        I am a full-stack engineer specializing in MERN stack web development, building multi-tenant GenAI platforms, designing scalable REST APIs, and automating backend operations.
      </motion.p>

      {/* Services Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            key={index}
            className='border border-slate-200 dark:border-slate-800/80 rounded-xl px-8 py-10 bg-slate-50/50 dark:bg-slate-900/60 backdrop-blur-md hover:bg-white dark:hover:bg-slate-900 hover:border-blue-500/50 dark:hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer flex flex-col justify-between group'
          >
            <div>
              {/* UNIFORM ALL-PINK ICON CONTAINER */}
              <div className='w-12 h-12 bg-pink-600 dark:bg-pink-600/90 border border-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-md shadow-pink-500/20 p-2.5'>
                <Image 
                  src={icon} 
                  alt={title} 
                  className='w-full h-full object-contain' 
                />
              </div>

              {/* Title */}
              <h3 className='text-xl font-bold font-Ovo text-slate-900 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                {title}
              </h3>

              {/* Description */}
              <p className='text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed'>
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Services