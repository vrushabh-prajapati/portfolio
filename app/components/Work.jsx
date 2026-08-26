'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const projects = [
  {
    title: 'NexoraSpace',
    category: 'Multi-Tenant GenAI SaaS Platform',
    description: 'A multi-tenant SaaS application featuring Gemini AI RAG pipelines, vector data processing, and scalable user management.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini AI'],
    link: 'https://github.com/vrushabh-prajapati'
  },
  {
    title: 'Employee Management System',
    category: 'Enterprise Automation & Payroll',
    description: 'Role-based multi-portal system managing automated workflow processes, employee analytics, and background job queues.',
    techStack: ['MERN Stack', 'Inngest', 'Tailwind CSS', 'REST API'],
    link: 'https://github.com/vrushabh-prajapati'
  }
]

const Work = ({ isDarkMode }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work' 
      className='w-full px-[12%] py-12 scroll-mt-20 bg-white text-gray-900 dark:bg-darkTheme dark:text-white transition-colors duration-300'
    >
      
      {/* Section Subheading & Heading */}
      <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='text-center mb-2 text-lg font-Ovo text-blue-600 dark:text-blue-400 font-semibold'
      >
        My portfolio
      </motion.h4>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-center text-4xl sm:text-5xl font-Ovo font-bold text-black dark:text-white'
      >
        My latest work
      </motion.h2>

      {/* Overview Paragraph */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-14 font-Ovo text-gray-800 dark:text-gray-300 font-medium text-base sm:text-lg leading-relaxed'
      >
        Explore my production-grade projects built with modern web technologies, multi-tenant architectures, and scalable AI integrations.
      </motion.p>

      {/* 2-Column Professional Card Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto my-10'>
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            whileHover={{ y: -8 }}
            key={index}
            className='border border-gray-200 dark:border-gray-800 rounded-2xl p-8 bg-gray-50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-900 hover:border-gray-400 dark:hover:border-gray-700 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group'
          >
            <div>
              {/* Category Badge & Action Arrow */}
              <div className='flex items-center justify-between mb-4'>
                <span className='text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-3 py-1 rounded-full border border-rose-200 dark:border-rose-800/60'>
                  {project.category}
                </span>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.link} 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='w-10 h-10 border border-black dark:border-white rounded-full flex items-center justify-center bg-black dark:bg-white text-white dark:text-black group-hover:bg-rose-600 dark:group-hover:bg-rose-600 group-hover:border-rose-600 dark:group-hover:border-rose-600 transition-colors'
                >
                  <Image src={assets.send_icon} alt='view project' className='w-4 invert dark:invert-0' />
                </motion.a>
              </div>

              {/* Title */}
              <h3 className='text-2xl font-bold font-Ovo text-black dark:text-white mb-3'>
                {project.title}
              </h3>

              {/* Description */}
              <p className='text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-6'>
                {project.description}
              </p>
            </div>

            {/* Tech Stack Tags */}
            <div className='flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-800'>
              {project.techStack.map((tech, i) => (
                <span key={i} className='text-xs font-medium bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md border border-gray-300 dark:border-gray-700'>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More / GitHub Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='flex justify-center mt-12'
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href='https://github.com/vrushabh-prajapati'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center gap-3 text-black dark:text-white border-2 border-black dark:border-white font-bold w-max px-10 py-3 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300'
        >
          View all repositories{' '}
          <Image
            src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold}
            alt='right arrow'
            className='w-4'
          />
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

export default Work