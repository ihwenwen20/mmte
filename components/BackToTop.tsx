'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isAnimating, setIsAnimating] = useState(false)

  const toggle = () => {
    if (theme === 'light') setTheme('dark')
    else setTheme('light')
  }

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true)
    } else {
      const timeout = setTimeout(
        () => setIsAnimating(false),
        300
      ) // Sesuaikan durasi dengan animasi slide-out
      return () => clearTimeout(timeout)
    }
  }, [isVisible])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='fixed bottom-5 end-5 flex flex-col gap-1 items-center z-[1000]'>
      {/* <!-- Back to Top --> */}
      {isAnimating && (
        <button
          className={`h-10 w-10 bg-primary/20  hover:border hover:text-white text-primary rounded-full z-50 flex justify-center items-center transition-all shadow-[inset_0px_0px_12px_0px] shadow-primary/40 duration-300 ${isVisible ? 'animate-slide-in' : 'animate-slide-out'}`}
          onClick={scrollToTop}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 16 16'
            className='h-4 w-4'>
            <path
              fill='currentColor'
              fillRule='evenodd'
              d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z'></path>
          </svg>
        </button>
      )}

      {/* <!-- Light/Dark Toggle --> */}
      <button
        className='bg-primary text-white rounded-xl z-20 hover:border hover:transition-all'
        onClick={toggle}>
        <span
          className='h-9 w-9 flex justify-center items-center group'
          id='light-theme'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
            className='h-5 w-5 dark:hidden'>
            <g fill='white' fillOpacity={0}>
              <path d='M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z'>
                <animate
                  fill='freeze'
                  attributeName='fill-opacity'
                  begin='0.7s'
                  dur='0.4s'
                  values='0;1'></animate>
              </path>
              <path d='M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z'>
                <animate
                  fill='freeze'
                  attributeName='fill-opacity'
                  begin='1.1s'
                  dur='0.4s'
                  values='0;1'></animate>
              </path>
            </g>
            <path
              fill='none'
              stroke='white'
              strokeDasharray={56}
              strokeDashoffset={56}
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z'>
              <animate
                fill='freeze'
                attributeName='stroke-dashoffset'
                dur='0.6s'
                values='56;0'></animate>
            </path>
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 256 256'
            className='hidden h-5 w-5 fill-white dark:block'>
            <g fill='white'>
              <path
                d='M184 128a56 56 0 1 1-56-56a56 56 0 0 1 56 56'
                opacity={0.2}></path>
              <path d='M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64m-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48M58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16'></path>
            </g>
          </svg>
        </span>
      </button>
    </div>
  )
}

export default BackToTop
