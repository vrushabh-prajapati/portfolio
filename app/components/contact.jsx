'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6cf9c3b3-9d13-42a8-a275-a890ad8c861e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id='contact'
      className='w-full px-[12%] py-12 scroll-mt-20 bg-white text-gray-900 dark:bg-transparent dark:text-white transition-colors duration-300'
    >
      {/* Subheading & Heading */}
      <h4 className='text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-300 font-semibold'>
        Connect with me
      </h4>
      <h2 className='text-center text-4xl sm:text-5xl font-Ovo font-bold text-black dark:text-white'>
        Get in touch
      </h2>

      {/* Description */}
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-800 dark:text-gray-300 font-medium text-base sm:text-lg leading-relaxed'>
        I’d love to hear from you! Whether you have a question, want to discuss a full-stack engineering role, or collaborate on a project, feel free to drop a message below.
      </p>

      {/* Contact Form */}
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
          <input
            type='text'
            placeholder='Enter your name'
            required
            name='name'
            className='p-4 outline-none border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900/50 text-black dark:text-white font-medium focus:border-black dark:focus:border-white focus:bg-white dark:focus:bg-gray-900 transition-all'
          />
          <input
            type='email'
            placeholder='Enter your email'
            required
            name='email'
            className='p-4 outline-none border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900/50 text-black dark:text-white font-medium focus:border-black dark:focus:border-white focus:bg-white dark:focus:bg-gray-900 transition-all'
          />
        </div>

        <textarea
          rows='6'
          placeholder='Enter your message'
          required
          name='message'
          className='w-full p-4 outline-none border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900/50 text-black dark:text-white font-medium focus:border-black dark:focus:border-white focus:bg-white dark:focus:bg-gray-900 transition-all mb-6'
        ></textarea>

        <button
          type='submit'
          className='py-3.5 px-10 flex items-center justify-center gap-2 bg-black text-white dark:bg-white dark:text-black font-bold rounded-full mx-auto hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-md'
        >
          Submit now{' '}
          <Image 
            src={isDarkMode ? assets.right_arrow_bold : assets.right_arrow_white} 
            alt='arrow' 
            className='w-4' 
          />
        </button>

        <p className='mt-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300'>
          {result}
        </p>
      </form>
    </div>
  )
}

export default Contact