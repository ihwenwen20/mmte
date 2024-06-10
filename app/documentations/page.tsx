import Circle from '@/components/elements/Circle'
import FooterPage from '@/components/elements/FooterPage'
import Kerjasama from '@/components/elements/Kerjasama'
import LogoSmall from '@/components/elements/LogoSmall'
import Image from 'next/image'
import React from 'react'

const DocumentationsPage = () => {
  return (
    <>
      <section id='documentations'>
        <div className='flex flex-col border-b overflow-x-hidden'>
          <div className='grid grid-rows-2 grid-flow-col'>
            <div className='row-span-2'>
              <Kerjasama />
            </div>
            <div className='row-span-1 '>
              <LogoSmall />
            </div>
          </div>
          <div className='italic lg:mx-40 -translate-y-14 -z-50 md:-translate-y-44 lg:-translate-y-60 sm:-translate-y-48'>
            <Circle
              circleClassName='col-start-4 md:col-start-6 lg:col-start-7 2xl:col-start-5'
              pading='py-6 tracking-tighter -ml-9 md:m-4 md:ml-2 lg:my-10'
              text='Documentations'
            />

            <div className='sm:col-span-3 gap-3 flex justify-center items-center'>
              <div className='mx-auto text-center my-6 font-semibold lg:text-2xl md:text-2xl'>
                <h2>
                  PT Bintang Indokarya Gemilang - Brebes
                </h2>
                <p>Cut & Fill, Road, and Drain Project</p>
              </div>
            </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 justify-content-center mx-6'>
              <div className='relative group rounded-lg text-center transition-all duration-500 shadow-md border border-default-100 bg-white hover:-translate-y-1 dark:bg-default-50'>
                <div className='p-4'>
                  <div className='relative rounded-lg overflow-hidden '>
                    <Image
                      width={1500}
                      height={1500}
                      alt='demo-img'
                      className='w-full rounded-lg border border-default-100'
                      src='/image/p1.jpeg'
                    />
                  </div>
                </div>
              </div>
              <div className='relative group rounded-lg text-center transition-all duration-500 shadow-md border border-default-100 bg-white hover:-translate-y-1 dark:bg-default-50'>
                <div className='p-4'>
                  <div className='relative rounded-lg overflow-hidden '>
                    <Image
                      width={1500}
                      height={1500}
                      alt='demo-img'
                      className='w-full rounded-lg border border-default-100'
                      src='/image/p1.jpeg'
                    />
                  </div>
                </div>
              </div>
              <div className='relative group rounded-lg text-center transition-all duration-500 shadow-md border border-default-100 bg-white hover:-translate-y-1 dark:bg-default-50'>
                <div className='p-4'>
                  <div className='relative rounded-lg overflow-hidden '>
                    <Image
                      width={1500}
                      height={1500}
                      alt='demo-img'
                      className='w-full rounded-lg border border-default-100'
                      src='/image/p1.jpeg'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterPage />
        </div>
      </section>
    </>
  )
}

export default DocumentationsPage
