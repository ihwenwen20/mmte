import Circle from '@/components/elements/Circle'
import LogoSmall from '@/components/elements/LogoSmall'
import Image from 'next/image'
import React from 'react'

const VisionMisionMottoPage = () => {
  return (
    <>
      <section id='vision-mission-motto'>
        <div className='flex flex-col gap-2 border-b'>
          <div className='left-0 right-0'>
            <div className='grid grid-cols-12'>
              <div className='col-span-12'>
                <div className='flex justify-end'>
                  <div className='bg-oren rounded-bl-full w-3/6 h-20 md:h-28 lg:h-36 2xl:h-44 2xl:w-2/5 2xl:mt-0'></div>
                </div>
              </div>
              <div className='col-span-4'>
                <div className='-translate-y-20 md:-translate-x-8 md:-translate-y-28 sm:-translate-x-20 lg:-translate-x-14 lg:-translate-y-32'>
                  <LogoSmall />
                </div>
              </div>
            </div>
            <div className='container -translate-y-20 md:-translate-y-32'>
              <div className='italic p-2 md:p-3 pt-0'>
                <div className='mt-5 lg:mt-10'>
                  <Circle
                    text='Vision, Mission'
                    text2='& Motto'
                    pading='w-64 leading-tight ml-2 md:m-4 lg:my-6 lg:text-nowrap'
                  />
                </div>

                <div className='md:my-12 mt-4 md:text-xl text-xs px-2 text-justify leading-relaxed'>
                  <h2 className='md:font-bold md:text-3xl font-semibold text-lg mb-1 md:mb-3'>
                    Vision
                  </h2>
                  <p className='mb-3 md:mb-6'>
                    <span className='text-oren uppercase md:font-bold font-semibold'>
                      PT MEDIA MITRA TEKHNIK ENGINEERING
                    </span>{' '}
                    is determined to become a construction
                    services company with international
                    qualifications & competence, as well as
                    professional business orientation and
                    strives to be a leading company in its
                    field by always providing innovative
                    solutions so that each of our partners
                    will always be satisfied with the
                    services provided. we provide.
                  </p>

                  <h2 className='md:font-bold md:text-3xl font-semibold text-lg mb-1 md:mb-3'>
                    Mission
                  </h2>
                  <p className='mb-3 md:mb-6'>
                    We build a company that is able to
                    create quality jobs, by carrying out the
                    values of continuously developing
                    employee competency, seeking consistent
                    financial, intellectual growth and
                    company image as well as investing back
                    into the business we run, and
                    maintaining high standards of ethical
                    code in business activities.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className='col-span-12 border border-oren lg:-translate-y-16'> */}
            <div className='col-span-12'>
              <div className='grid grid-cols-5'>
                <div className='col-span-2'>
                  <div className='bg-darkblue dark:border-white dark:border-r rounded-tr-full w-48 h-44 md:w-[20rem] md:h-[20rem] lg:w-[32rem] lg:h-[28rem] 2xl:h-[32rem] 2xl:w-[40rem]'>
                    <Image
                      src='/image/kerjasama.jpg'
                      alt='kerjasama'
                      width={1500}
                      height={1500}
                      className='-translate-y-3 translate-x-10 md:translate-x-24 rounded-full md:h-72 md:w-72 h-36 w-36 lg:h-[28rem] lg:w-[28rem] 2xl:h-[32rem] 2xl:w-[32rem] box-border border-[4px] md:border-[10px] border-white border-solid shadow-inner shadow-white'
                    />
                  </div>
                </div>
                <div className='col-span-3 xl:col-span-2 z-10'>
                  <div className='italic text-center md:text-xl text-xs md:p-12'>
                    <h2 className='md:font-bold md:text-3xl font-semibold text-lg mb-1 lg:mb-6'>
                      Motto
                    </h2>
                    <p className='mb-3 md:mb-14 '>
                      <span className='text-oren md:font-bold font-semibold text-justify'>
                        Competitive Price, Good Quality, On
                        Time Delivery and Customer
                        Satisfaction is our Commitment.
                      </span>{' '}
                    </p>
                    <p className='cursor-pointer hover:text-oren italic font-semibold text-slate-700 dark:text-white text-xs sm:text-sm md:text-xl'>
                      www.mmtecontractor.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default VisionMisionMottoPage
