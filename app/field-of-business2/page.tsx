import Circle from '@/components/elements/Circle'
import LogoSmall from '@/components/elements/LogoSmall'
import Image from 'next/image'
import React from 'react'

const FieldOfBusinessPage2 = () => {
  return (
    <section id='field-of-business2'>
      {/* Field of Business 2 */}
      <div className='flex flex-col border-b'>
        <div className='left-0 right-0'>
          <div className='grid grid-rows-2 grid-cols-2'>
            <div className='row-span-2 order-2 flex justify-end'>
              <div className='bg-darkblue dark:border-white dark:border-l rounded-bl-full w-48 h-40 md:w-[20rem] md:h-[20rem] lg:w-[32rem] lg:h-[28rem] 2xl:h-[32rem] 2xl:w-[40rem]'>
                <Image
                  src='/image/kerjasama.jpg'
                  alt='kerjasama'
                  width={1500}
                  height={1500}
                  className='translate-y-2 rounded-full md:h-72 md:w-72 h-36 w-36 lg:h-[28rem] lg:w-[28rem] 2xl:h-[32rem] 2xl:w-[32rem] box-border border-[4px] md:border-[10px] border-white border-solid shadow-inner shadow-white'
                />
              </div>
            </div>
            <div className='row-span-1 order-1 flex justify-start translate-x-4 md:translate-x-14 lg:translate-x-20 2xl:translate-x-48'>
              <LogoSmall />
            </div>
          </div>

          <div className='container -translate-y-24 md:-translate-y-44 lg:-translate-y-60 '>
            <div className='italic p-3 md:p-3 pt-0'>
              <div className='mt-5 mb-6 lg:mt-10'>
                <Circle
                  text='Field of'
                  text2='Business'
                  pading='w-64 m-2 md:m-4 lg:my-6 lg:text-nowrap'
                />
              </div>

              <div className='md:flex md:items-center gap-4 md:gap-6 mt-4 mb-8 md:mb-8 lg:mt-6'>
                <Image
                  width={1500}
                  height={1500}
                  alt='demo-img'
                  className='float-left mr-3 md:mr-0 size-28 md:size-40 rounded-full border-4 lg:border-8 border-black shadow-lg object-cover object-center'
                  src='/image/p1.jpeg'
                />

                <div>
                  <h3 className='md:font-bold md:text-3xl font-bold text-lg mb-1 md:mb-3'>
                    Heavy Equipment Rental
                  </h3>

                  <p className='text-sm md:text-xl'>
                    Serves heavy equipment rental for civil
                    work/infrastructure construction needs
                    such as excavators, mobile cranes,
                    bulldozers and compactors.
                  </p>
                </div>
              </div>

              <div className='md:flex md:items-center gap-4 md:gap-6 mt-4 mb-8 lg:mt-6'>
                <Image
                  width={1500}
                  height={1500}
                  alt='demo-img'
                  className='float-left mr-3 md:mr-0 size-28 md:size-40 rounded-full border-4 lg:border-8 border-black shadow-lg object-cover object-center'
                  src='/image/p1.jpeg'
                />

                <div>
                  <h3 className='md:font-bold md:text-3xl font-bold text-lg mb-1 md:mb-3'>
                    Transportation
                  </h3>

                  <p className='text-sm md:text-xl'>
                    Provides goods transport services using
                    trailer trucks, dump trucks, and heavy
                    equipment transport using self-loader
                    trucks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 -mt-6 md:-mt-24'>
          <div className='col-span-12 '>
            <div className='flex justify-between'>
              <div className='bg-oren rounded-tr-full w-3/6 h-20 -mt-8 sm:mt-0 md:mt-8 md:h-28 lg:h-36 2xl:h-44 2xl:w-2/5 2xl:mt-0'></div>
              <div className='flex flex-grow justify-center text-center sm:items-center cursor-pointer hover:text-oren italic font-semibold text-slate-700 dark:text-oren text-xs sm:text-sm md:text-lg'>
                www.mmtecontractor.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FieldOfBusinessPage2
