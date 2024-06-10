import Circle from '@/components/elements/Circle'
import FooterPage from '@/components/elements/FooterPage'
import Image from 'next/image'
import React from 'react'

const OurContactPage = () => {
  return (
    <>
      <section id='contact'>
        <div className='flex flex-col border-b'>
          <div className='left-0 right-0'>
            <div className='bg-center bg-no-repeat rounded-b-full h-80 lg:h-[56rem] sm:h-[40rem] bg-darkblue dark:border-white border-b'>
              <div className='grid grid-cols-12'>
                <div
                  className='col-start-9 col-span-3 flex justify-center -translate-x-3 translate-y-3
                    sm:translate-y-18 md:translate-y-6'>
                  <Image
                    src='/image/logo.jpg'
                    alt='logoperusahaan'
                    width={1500}
                    height={1500}
                    className='rounded-full 2xl:w-72 2xl:h-72 lg:w-56 lg:h-56 md:w-40 md:h-40 sm:h-40 sm:w-40 h-20 w-20'
                  />
                </div>
                <div
                  // className='flex justify-center col-start-3 sm:col-span-10 col-span-7 -translate-y-8 -translate-x-4
                  className='flex justify-center col-start-1 col-span-10 -translate-y-4 translate-x-1
                      sm:-translate-y-1 md:-translate-y-14 lg:-translate-y-1 2xl:-translate-y-52'>
                  <Image
                    src='/image/perusahaan.jpg'
                    alt='perusahaan'
                    width={1500}
                    height={1500}
                    className='rounded-full w-60 h-60 sm:w-[28rem] sm:h-[28rem] md:w-[32rem] md:h-[32rem] lg:w-[40rem] lg:h-[40rem] 2xl:w-[48rem] 2xl:h-[48rem] box-border border-[10px] sm:border-[12px] md:border-[16px] 2xl:border-[20px] border-white border-solid shadow-inner shadow-white'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='container px-6 md:px-12 mb-6 mx-auto italic'>
            <Circle
              text='Our'
              text2='Contact'
              pading='m-2 ml-2 md:m-4 lg:m-6 '
            />
            <div className='md:my-10 my-6 md:text-2xl px-2 md:px-6'>
              <ul className='text-sm md:text-2xl font-semibold'>
                <li className='flex items-center gap-2 my-2 md:gap-6 md:my-5'>
                  <div className='rounded-full bg-black p-2 dark:border-white dark:shadow-slate-100 border text-2xl md:p-2 md:text-4xl text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='1em'
                      height='1em'
                      viewBox='0 0 24 24'>
                      <path
                        fill='currentColor'
                        d='M13 8a3 3 0 0 1 3 3a1 1 0 0 0 2 0a5 5 0 0 0-5-5a1 1 0 0 0 0 2'
                      />
                      <path
                        fill='currentColor'
                        d='M13 4a7 7 0 0 1 7 7a1 1 0 0 0 2 0a9 9 0 0 0-9-9a1 1 0 0 0 0 2m8.75 11.91a1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a9.91 9.91 0 0 1-4.87-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72a3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2A4.6 4.6 0 0 0 2 6.6A15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6a4.77 4.77 0 0 0-.06-.76a4.34 4.34 0 0 0-.19-.73'
                      />
                    </svg>
                  </div>
                  <span>+62 818-0255-5222</span>
                </li>
                <li className='flex items-center gap-2 my-2 md:gap-6 md:my-5'>
                  <div className='rounded-full bg-black p-2 dark:border-white dark:shadow-slate-100 border text-2xl md:text-4xl text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='1em'
                      height='1em'
                      viewBox='0 0 24 24'
                      className='shrink-0'>
                      <g fill='none'>
                        <path
                          fill='currentColor'
                          d='M3 5V3.75c-.69 0-1.25.56-1.25 1.25zm18 0h1.25c0-.69-.56-1.25-1.25-1.25zM3 6.25h18v-2.5H3zM19.75 5v12h2.5V5zM19 17.75H5v2.5h14zM4.25 17V5h-2.5v12zm.75.75a.75.75 0 0 1-.75-.75h-2.5A3.25 3.25 0 0 0 5 20.25zM19.75 17a.75.75 0 0 1-.75.75v2.5A3.25 3.25 0 0 0 22.25 17z'></path>
                        <path
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2.5}
                          d='m3 5l9 9l9-9'></path>
                      </g>
                    </svg>
                  </div>
                  <span>mmte.contractor@gmail.com</span>
                </li>
                <li className='flex items-center gap-2 my-2 md:gap-6 md:my-5'>
                  <div className='rounded-full bg-black p-2 dark:border-white dark:shadow-slate-100 border text-2xl md:text-4xl text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='1em'
                      height='1em'
                      viewBox='0 0 24 24'>
                      <path
                        fill='currentColor'
                        d='M8.904 16.5h3.618q-.021.248-.022.5c0 1.201.457 2.361 1.272 3.488c-.54.959-1.157 1.511-1.772 1.511c-1.197 0-2.4-2.094-3.038-5.204zm-.23-1.5h4.2a5.52 5.52 0 0 1 2.627-2.901v-.098q0-1.03-.076-2h-6.85l-.033.488A26 26 0 0 0 8.674 15M18 11.5a5.48 5.48 0 0 1 3.935 1.658A10.1 10.1 0 0 0 21.802 10h-4.87l.038.657q.022.463.029.934q.488-.09 1.001-.091M3.066 16.501h4.306c.364 2.082.983 3.854 1.792 5.093a10.03 10.03 0 0 1-5.952-4.814zm-.867-6.5h4.87a28 28 0 0 0 .033 4.42l.057.58H2.456a10.05 10.05 0 0 1-.258-5m12.745-7.424l-.108-.17A10.03 10.03 0 0 1 21.373 8.5h-4.59c-.316-2.416-.957-4.492-1.838-5.923m-5.902-.133l.122-.037C8.283 3.757 7.628 5.736 7.28 8.06l-.062.44H2.63a10.03 10.03 0 0 1 6.413-6.057M12 2.002c1.319 0 2.646 2.542 3.214 6.183l.047.315H8.739C9.28 4.691 10.644 2.002 12 2.002M22.5 17a4.5 4.5 0 0 0-9 0c0 1.863 1.42 3.815 4.2 5.9a.5.5 0 0 0 .6 0c2.78-2.085 4.2-4.037 4.2-5.9m-6 0a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0'></path>
                    </svg>
                  </div>
                  <span>www.mmtecontractor.com</span>
                </li>
                <li className='flex items-start gap-2 my-2 md:gap-6 md:my-5'>
                  <div className='rounded-full bg-black p-2 dark:border-white dark:shadow-slate-100 border text-2xl md:text-4xl text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='1em'
                      height='1em'
                      viewBox='0 0 14 14'>
                      <g
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'>
                        <path d='M11.5 5c0 3-4.5 6.5-4.5 6.5S2.5 8 2.5 5C2.5 2.549 4.549.5 7 .5s4.5 2.049 4.5 4.5'></path>
                        <path d='M7 6.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m4.077 3.5H12l1.5 3.5H.5L2 10h.923'></path>
                      </g>
                    </svg>
                  </div>
                  <span className='capitalize'>
                    Jl. Cilemahabang Raya U5 No. 105 Desa
                    Jayamukti. Cikarang Pusat, Kab.Bekasi,
                    Jawa Barat 17530
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <FooterPage />
        </div>
      </section>
    </>
  )
}

export default OurContactPage
