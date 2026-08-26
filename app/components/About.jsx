'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

const About = ({ isDarkMode }) => {
  const infoList = [
    {
      title: 'Education',
      description: 'B.E. Computer Science (2022 - 2026)',
    },
    {
      title: 'Projects',
      description: 'Built 2 Production-Grade SaaS Apps',
    },
    {
      title: 'Specialization',
      description: 'MERN Stack, GenAI (RAG), & Cloud',
    },
  ]

  const techStack = [
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'TypeScript',
    'MongoDB',
    'Tailwind CSS',
    'Git',
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='about' 
      className='w-full px-[12%] py-10 scroll-mt-20 bg-white text-gray-900 dark:bg-transparent dark:text-white transition-colors duration-300'
    >
      {/* Section Headings */}
      <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='text-center mb-2 text-lg font-Ovo text-blue-600 dark:text-blue-400 font-semibold'
      >
        Introduction
      </motion.h4>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-center text-4xl sm:text-5xl font-Ovo font-bold text-slate-900 dark:text-white'
      >
        About me
      </motion.h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-12 lg:gap-16 my-12'>
        
        {/* Profile Image Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-64 h-80 sm:w-72 sm:h-96 rounded-3xl relative overflow-hidden border-2 border-blue-500/30 shadow-xl flex-shrink-0'
        >
          <Image 
            src="/face.jpeg" 
            alt="Vrushabh Prajapati" 
            fill
            sizes="(max-width: 768px) 256px, 288px"
            className="object-cover rounded-3xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Content Side */}
        <div className='flex-1 max-w-4xl'>
          
          {/* Main Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='mb-8 font-Ovo text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-normal'
          >
            I am a full-stack software engineer pursuing my B.E. in Computer Science (2022–2026). I specialize in building scalable web applications using the MERN stack, designing robust REST APIs, and integrating GenAI SaaS features. My experience includes architecting multi-tenant systems, RAG pipelines, background job automation with Inngest, and automated CI/CD deployment pipelines.
          </motion.p>

          {/* Info Cards Grid */}
          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8'
          >
            {infoList.map((item, index) => (
              <motion.li
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                key={index}
                className='border border-slate-200 dark:border-slate-800 rounded-xl p-5 bg-slate-50/50 dark:bg-slate-900/60 backdrop-blur-md shadow-sm'
              >
                <h3 className='mb-1 font-bold text-slate-900 dark:text-white text-base'>
                  {item.title}
                </h3>
                <p className='text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-medium'>
                  {item.description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Key Technologies & Tools Header */}
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='mb-4 font-Ovo font-bold text-slate-900 dark:text-white text-lg'
          >
            Technologies & Tools I Use
          </motion.h4>

          {/* Tech Stack Pills */}
          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='flex flex-wrap items-center gap-3'
          >
            {techStack.map((tech, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={index}
                className='px-4 py-2 text-xs sm:text-sm font-semibold border border-slate-300 dark:border-slate-800 rounded-lg bg-slate-100 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white hover:border-blue-600 transition-all duration-300 cursor-default shadow-sm'
              >
                {tech}
              </motion.li>
            ))}
          </motion.ul>
        </div>

      </div>
    </motion.div>
  )
}

export default About