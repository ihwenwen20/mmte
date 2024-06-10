import React from 'react'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

const HomePage = () => {
  return (
    <>
      <section id='home'>
        <div className='flex flex-col bg-gradient-to-t from-red-600/40 via-violet-600/40 to-blue-600/40  border-b'>
          <Navbar />
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

          <div className='container p-4 mb-6 mx-auto'>
            <div className='container italic mx-auto 2xl:py-12'>
              <h1 className='w-36 font-bold text-4xl sm:text-6xl 2xl:8xl md:leading-tight'>
                Company Profile
                <hr className='w-20 sm:w-36 my-2' />
              </h1>
              <span className='font-bold text-2xl sm:text-5xl mb-1'>
                2024
              </span>
              <h2 className='text-oren font-semibold text-2xl sm:font-bold sm:text-4xl sm:w-full md:w-5/6 lg:w-3/6 mt-2 mb-1 sm:mt-4 md:mt-6 md:mb-3 md:leading-tight'>
                PT. Media Mitra Teknik Engineering
              </h2>
              <span className='font-semibold text-xl sm:text-3xl 2xl:font-bold 2xl:text-4xl capitalize 2xl:py-3'>
                General Contractor & Supplier
              </span>
            </div>
          </div>

          <div className='grid grid-cols-12'>
            <div className='col-span-12'>
              <div className='flex justify-end'>
                <div className='bg-oren rounded-tl-full w-3/6 h-20 -mt-8 sm:mt-0 md:mt-8 md:h-36 lg:h-44 2xl:h-48 2xl:w-2/5 2xl:mt-0'></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
