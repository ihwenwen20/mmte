import Circle from '@/components/elements/Circle'
import LogoSmall from '@/components/elements/LogoSmall'
import Image from 'next/image'
import React from 'react'

const FieldOfBusinessPage = () => {
  return (
    <section id='field-of-business'>
      <div className='flex flex-col border-b gap-2'>
        <div className='left-0 right-0'>
          <div className='grid grid-cols-12'>
            <div className='col-span-12'>
              <div className='flex justify-end'>
                <div className='bg-oren rounded-bl-full w-3/6 h-20 md:h-28 lg:h-36 2xl:h-44 2xl:w-2/5 2xl:mt-0'></div>
              </div>
            </div>
            <div className='col-span-4'>
              <div className='-translate-y-20 -translate-x-1 md:-translate-x-6 lg:-translate-x-12'>
                <LogoSmall />
              </div>
            </div>
          </div>
          <div className='container -translate-y-24 md:-translate-y-24'>
            <div className='italic p-2 md:p-3 pt-0'>
              <div className='mt-5 lg:mt-10'>
                <Circle
                  text='Field of'
                  text2='Business'
                  pading='w-64 m-2 md:m-4 lg:my-6 lg:text-nowrap'
                />
              </div>

              <div className=' md:my-8 my-4 font-bold md:text-2xl text-normal px-2 text-justify lg::tracking-wider md:leading-relaxed'>
                <p className=''>
                  Engaged in the fields of
                  <span className='text-oren'>
                    {' '}
                    General Contractor, Building Material
                    Supplier, Interior Design & Build, Heavy
                    Equipment Rent, and Transportation
                  </span>
                </p>
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
                    General Contractor
                  </h3>

                  <p className='text-sm md:text-xl'>
                    Construction of buildings, factories,
                    offices, shophouses, houses,
                    construction of highways (hotmix,
                    rigid), land preparation (earth work),
                    cut and fill, u ditch precast, concrete
                    panel fences, etc.
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
                    Building Material Supplier
                  </h3>

                  <p className='text-sm md:text-xl'>
                    Providing natural materials such as
                    sand, soil, limestone, basecourse, split
                    stone, and also providing building
                    materials such as cement, bricks, tiles,
                    iron, etc.
                  </p>
                </div>
              </div>

              <div className='md:flex md:items-center gap-4 md:gap-6 mt-4 mb-8 lg:mt-6'>
                <Image
                  width={1500}
                  height={1500}
                  alt='demo-img'
                  className='float-left mr-3 md:mr-0 size-28 md:size-40 rounded-full border-4 lg:border-8 border-black shadow-lgobject-cover object-center'
                  src='/image/p1.jpeg'
                />

                <div>
                  <h3 className='md:font-bold md:text-3xl font-bold text-lg mb-1 md:mb-3'>
                    Interior Design & Build
                  </h3>

                  <p className='text-sm md:text-xl'>
                    Providing interior design services and
                    doing interior work for homes, offices,
                    cafes and other buildings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-rows-2 grid-cols-2 -mt-24'>
          <div className='row-span-2 order-2 flex justify-end'>
            <div className='bg-darkblue dark:border-white dark:border-l rounded-tl-full w-48 h-40 md:w-[20rem] md:h-[20rem] lg:w-[32rem] lg:h-[28rem] 2xl:h-[32rem] 2xl:w-[40rem]'>
              <Image
                src='/image/kerjasama.jpg'
                alt='kerjasama'
                width={1500}
                height={1500}
                className='rounded-full md:h-72 md:w-72 h-36 w-36 lg:h-[28rem] lg:w-[28rem] 2xl:h-[32rem] 2xl:w-[32rem] box-border border-[4px] md:border-[10px] border-white border-solid shadow-inner shadow-white'
              />
            </div>
          </div>
          <div className='row-span-2 order-1 flex justify-center items-center text-center sm:items-center cursor-pointer hover:text-oren italic font-semibold text-slate-700 dark:text-oren text-xs sm:text-sm md:text-lg z-10'>
            www.mmtecontractor.com
          </div>
        </div>
      </div>
    </section>
  )
}

export default FieldOfBusinessPage
