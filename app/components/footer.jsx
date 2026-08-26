'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20 bg-white text-gray-900 dark:bg-transparent dark:text-white transition-colors duration-300'>
      {/* Brand Header & Contact Info */}
      <div className='text-center'>
        <a href='#top' className='text-3xl font-black font-Ovo tracking-wide cursor-pointer text-black dark:text-white inline-block mb-2'>
          Vrushabh<span className='text-rose-500'>.</span>
        </a>

        <div className='w-max flex items-center gap-2 mx-auto my-2 text-gray-800 dark:text-gray-300 font-medium'>
          <Image 
            src={isDarkMode ? assets.mail_icon_dark || assets.mail_icon : assets.mail_icon} 
            alt='email' 
            className='w-5 dark:invert' 
          />
          vrushabhprajapati221@gmail.com
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className='text-center sm:flex items-center justify-between border-t border-gray-300 dark:border-gray-800 mx-[10%] mt-12 py-6 text-sm font-semibold text-gray-800 dark:text-gray-400'>
        <p>© 2026 Vrushabh Prajapati. All rights reserved.</p>
        
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li>
            <a 
              target='_blank' 
              rel='noopener noreferrer' 
              href='https://github.com/vrushabh-prajapati'
              className='hover:text-rose-600 dark:hover:text-rose-400 transition-colors'
            >
              GitHub
            </a>
          </li>
          <li>
            <a 
              target='_blank' 
              rel='noopener noreferrer' 
              href='https://www.linkedin.com/in/vrushabh-prajapati-095701277'
              className='hover:text-rose-600 dark:hover:text-rose-400 transition-colors'
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer