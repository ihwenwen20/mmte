'use client'

import { useState, useEffect } from 'react'
// import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  // const router = useRouter()
  const [isMobileMenuOpen, setMobileMenuOpen] =
    useState(false)
  const [language, setLanguage] = useState('en')

  const handleMobileToggle = () => {
    setMobileMenuOpen(
      (prevIsMobileMenuOpen) => !prevIsMobileMenuOpen
    )
  }

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang) // Optionally, you can navigate to a route with the selected language
    // router.push(`/${lang}`);
  }

  const handleLinkClick = () => {
    setMobileMenuOpen(false) // Close the mobile menu
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <>
      <nav
        className={`${isMobileMenuOpen ? 'backdrop-blur h-full' : ''} fixed top-2 w-full z-20 transition-colors`}>
        <div className='flex flex-wrap items-center justify-between mx-2 2xl:mx-40 lg:mx-14'>
          <Link href={'/'} className='flex items-center'>
            <Image
              src='/image/logo.jpg'
              alt='logoperusahaan'
              width={400}
              height={400}
              className='h-12 w-12'
            />
          </Link>
          <div className='flex items-center md:order-2 space-x-1 md:space-x-0'>
            <button
              type='button'
              data-dropdown-toggle='language-dropdown-menu'
              // className='inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-oren dark:text-white rounded-lg cursor-pointer hover:border-2 hover:text-orange-600 dark:hover:bg-gray-700 dark:hover:text-oren'
              className={`${isMobileMenuOpen ? '' : ' hidden sm:inline-flex'} items-center font-medium justify-center px-4 py-2 text-sm text-oren dark:text-white rounded-lg cursor-pointer hover:border-2 hover:text-orange-600 dark:hover:bg-gray-700 dark:hover:text-oren`}
              onClick={() =>
                handleLanguageChange(
                  language === 'en' ? 'id' : 'en'
                )
              }>
              {language === 'en' ? (
                <>
                  <svg
                    className='w-5 h-5 rounded-full sm:me-3'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    viewBox='0 0 3900 3900'>
                    <path
                      fill='#b22234'
                      d='M0 0h7410v3900H0z'
                    />
                    <path
                      d='M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0'
                      stroke='#fff'
                      strokeWidth='300'
                    />
                    <path
                      fill='#3c3b6e'
                      d='M0 0h2964v2100H0z'
                    />
                    <g fill='#fff'>
                      <g id='d'>
                        <g id='c'>
                          <g id='e'>
                            <g id='b'>
                              <path
                                id='a'
                                d='M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z'
                              />
                              <use xlinkHref='#a' y='420' />
                              <use xlinkHref='#a' y='840' />
                              <use
                                xlinkHref='#a'
                                y='1260'
                              />
                            </g>
                            <use xlinkHref='#a' y='1680' />
                          </g>
                          <use
                            xlinkHref='#b'
                            x='247'
                            y='210'
                          />
                        </g>
                        <use xlinkHref='#c' x='494' />
                      </g>
                      <use xlinkHref='#d' x='988' />
                      <use xlinkHref='#c' x='1976' />
                      <use xlinkHref='#e' x='2470' />
                    </g>
                  </svg>
                  <span className='hidden sm:block'>
                    English (US)
                  </span>
                </>
              ) : (
                <>
                  <svg
                    className='w-5 h-5 rounded-full sm:me-3'
                    xmlns='http://www.w3.org/2000/svg'
                    width='1em'
                    height='1em'
                    viewBox='0 0 64 64'>
                    <path
                      fill='#f9f9f9'
                      d='M31.8 62c16.6 0 30-13.4 30-30h-60c0 16.6 13.4 30 30 30'></path>
                    <path
                      fill='#ed4c5c'
                      d='M31.8 2c-16.6 0-30 13.4-30 30h60c0-16.6-13.4-30-30-30'></path>
                  </svg>
                  <span className='hidden sm:block'>
                    Indonesia
                  </span>
                </>
              )}
            </button>
            {/* <!-- Dropdown --> */}
            <div
              className='z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow'
              id='language-dropdown-menu'>
              <ul className='py-2 font-medium' role='none'>
                <li>
                  <Link
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-slate-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-oren'
                    role='menuitem'>
                    <div className='inline-flex items-center'>
                      <svg
                        aria-hidden='true'
                        className='h-3.5 w-3.5 rounded-full me-2'
                        xmlns='http://www.w3.org/2000/svg'
                        id='flag-icon-css-us'
                        viewBox='0 0 512 512'>
                        <g fill-rule='evenodd'>
                          <g stroke-width='1pt'>
                            <path
                              fill='#bd3d44'
                              d='M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z'
                              transform='scale(3.9385)'
                            />
                            <path
                              fill='#fff'
                              d='M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z'
                              transform='scale(3.9385)'
                            />
                          </g>
                          <path
                            fill='#192f5d'
                            d='M0 0h98.8v70H0z'
                            transform='scale(3.9385)'
                          />
                          <path
                            fill='#fff'
                            d='M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z'
                            transform='scale(3.9385)'
                          />
                        </g>
                      </svg>
                      English (US)
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-slate-100 dark:text-gray-400 dark:hover:bg-darkblue dark:hover:text-oren'
                    role='menuitem'>
                    <div className='inline-flex items-center'>
                      <svg
                        aria-hidden='true'
                        className='h-3.5 w-3.5 rounded-full me-2'
                        xmlns='http://www.w3.org/2000/svg'
                        id='flag-icon-css-us'
                        viewBox='0 0 512 512'>
                        <g fill-rule='evenodd'>
                          <g stroke-width='1pt'>
                            <path
                              fill='#bd3d44'
                              d='M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z'
                              transform='scale(3.9385)'
                            />
                            <path
                              fill='#fff'
                              d='M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z'
                              transform='scale(3.9385)'
                            />
                          </g>
                          <path
                            fill='#192f5d'
                            d='M0 0h98.8v70H0z'
                            transform='scale(3.9385)'
                          />
                          <path
                            fill='#fff'
                            d='M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z'
                            transform='scale(3.9385)'
                          />
                        </g>
                      </svg>
                      Indonesia
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle='navbar-language'
              type='button'
              onClick={handleMobileToggle}
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-language'
              aria-expanded='false'>
              <span className='sr-only'>
                Open main menu
              </span>
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'>
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            </button>
          </div>

          {/* Menu Navigation */}
          <div
            className={`${isMobileMenuOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id='navbar-language'>
            <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0'>
              <li>
                <Link
                  href='/#home'
                  className='block py-2 px-3 md:p-0 text-oren rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-orange-600 dark:text-white dark:hover:text-oren'
                  onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/#about'
                  className='block py-2 px-3 md:p-0 text-oren rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-orange-600 dark:text-white dark:hover:text-oren'
                  onClick={handleLinkClick}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/#contact'
                  onClick={handleLinkClick}
                  className='block py-2 px-3 md:p-0 text-oren rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-orange-600 dark:text-white dark:hover:text-oren'>
                  Contact
                </Link>
              </li>
              <li className='group relative hidden sm:block'>
                <div className='flex items-center cursor-pointer'>
                  <Link
                    href='/#company-values'
                    onClick={handleLinkClick}
                    className='block py-2 px-3 md:p-0 text-oren rounded group-hover:bg-slate-100 md:group-hover:bg-transparent md:group-hover:text-orange-600 dark:text-white md:dark:group-hover:text-blue-500 dark:group-hover:bg-gray-700 dark:group-hover:text-white md:dark:group-hover:bg-transparent dark:border-gray-700'>
                    Services
                  </Link>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='1em'
                    height='1em'
                    viewBox='0 0 24 24'
                    className='relative top-[1px] ml-1.5 h-3 w-3 transition duration-200 group-hover:rotate-180'
                    aria-hidden='true'>
                    <path
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='m19 9l-7 7l-7-7'></path>
                  </svg>
                </div>
                <ul className='group-hover:visible md:invisible left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:opacity-100 dark:bg-jacarta-800 md:absolute md:grid md:translate-y-4 md:py-4 md:px-2 md:opacity-0 md:shadow-2xl md:group-hover:translate-y-2'>
                  <li>
                    <Link
                      href='/#company-values'
                      onClick={handleLinkClick}
                      className='flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-ungu focus:text-ungu dark:hover:bg-jacarta-600'>
                      <span className='font-display text-sm text-jacarta-700 dark:text-white'>
                        Company Value
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/#vision-mission-motto'
                      onClick={handleLinkClick}
                      className='flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-ungu focus:text-ungu dark:hover:bg-jacarta-600'>
                      <span className='font-display text-sm text-jacarta-700 dark:text-white'>
                        Vision, Mission & Motto
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/#field-of-business'
                      onClick={handleLinkClick}
                      className='flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-ungu focus:text-ungu dark:hover:bg-jacarta-600'>
                      <span className='font-display text-sm text-jacarta-700 dark:text-white'>
                        Field of Business
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/#customers'
                      onClick={handleLinkClick}
                      className='flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-ungu focus:text-ungu dark:hover:bg-jacarta-600'>
                      <span className='font-display text-sm text-jacarta-700 dark:text-white'>
                        Customers
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/#projects'
                      onClick={handleLinkClick}
                      className='flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-ungu focus:text-ungu dark:hover:bg-jacarta-600'>
                      <span className='font-display text-sm text-jacarta-700 dark:text-white'>
                        Our Projects
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href='/#documentations'
                  onClick={handleLinkClick}
                  className='block py-2 px-3 md:p-0 text-oren rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-orange-600 dark:text-white dark:hover:text-oren'>
                  Documentation
                </Link>
              </li>

              <li className='block sm:hidden'>
                <Link
                  href='/#company-values'
                  onClick={handleLinkClick}
                  className='block py-2 px-3 md:p-0 text-oren rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-orange-600 dark:text-white dark:hover:text-oren'>
                  Company Value
                </Link>
              </li>
              <li className='block sm:hidden'>
                <Link
                  href='/#vision-mission-motto'
                  onClick={handleLinkClick}
                  className='block py-2 px-3 md:p-0 text-oren rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-orange-600 dark:text-white dark:hover:text-oren'>
                  Vision, Mission & Motto
                </Link>
              </li>
              <li className='block sm:hidden'>
                <Link
                  href='/#field-of-business'
                  onClick={handleLinkClick}
                  className='block py-2 px-3 md:p-0 text-oren rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-orange-600 dark:text-white dark:hover:text-oren'>
                  Field of Business
                </Link>
              </li>
              <li className='block sm:hidden'>
                <Link
                  href='/#customers'
                  onClick={handleLinkClick}
                  className='block py-2 px-3 md:p-0 text-oren rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-orange-600 dark:text-white dark:hover:text-oren'>
                  Customers
                </Link>
              </li>
              <li className='block sm:hidden'>
                <Link
                  href='/#projects'
                  onClick={handleLinkClick}
                  className='block py-2 px-3 md:p-0 text-oren rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-orange-600 dark:text-white dark:hover:text-oren'>
                  Our Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
