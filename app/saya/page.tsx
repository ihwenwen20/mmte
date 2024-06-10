import Image from 'next/image'
import React from 'react'

const VisionMisionMottoPage = () => {
  return (
    <>
      <section id='vision' className=''>
        <div className='flex flex-col gap-2'>
          <div className='left-0 right-0'>
            <div className='grid grid-cols-12'>
              <div className='col-span-12'>
                <div className='flex justify-end'>
                  <div className='bg-oren rounded-bl-full w-2/5 h-14 md:h-20 md:w-2/6 lg:h-28 scale-110 sm:scale-100'></div>
                </div>
              </div>
              <div className='col-span-3'>
                <div className='flex justify-end'>
                  <Image
                    src='/image/logo.jpg'
                    alt='logoperusahaan'
                    width={1500}
                    height={1500}
                    className='rounded-full xl:w-28 xl:h-28 md:h-28 md:w-28 h-20 w-20 -translate-y-14 md:-translate-x-24 sm:-translate-x-20 translate-x-2'
                  />
                </div>
              </div>
            </div>
            <div className='container -translate-y-16'>
              <div className='italic p-4 pt-0'>
                <div className='bg-oren rounded-full sm:h-24 sm:w-24 h-20 w-20 text-left mt-5 py-auto'>
                  <h1 className='w-56 md:w-72 md:text-4xl text-3xl font-bold text-jacarta-900 py-1 ml-3 bg-clip-text'>
                    Vision, Mission & Motto
                  </h1>
                </div>
                <div className='md:my-12 mt-4 md:text-lg text-xs px-2 text-justify'>
                  <h2 className='md:font-bold md:text-xl font-semibold text-lg mb-1'>
                    Vision
                  </h2>
                  <p className='mb-3'>
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

                  <h2 className='md:font-bold md:text-xl font-semibold text-lg mb-1'>
                    Mission
                  </h2>
                  <p className='mb-3'>
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
            <div className='col-span-12 border lg:-mt-12 -mt-8'>
              <div className='grid grid-cols-5 gap-12'>
                <div className='col-span-2'>
                  <div className='bg-darkblue rounded-tr-full w-40 h-40 md:w-[20rem] md:h-[20rem] lg:w-[32rem] lg:h-[32rem] 2xl:h-[40rem] 2xl:w-[40rem]'>
                    <Image
                      src='/image/kerjasama.jpg'
                      alt='kerjasama'
                      width={1500}
                      height={1500}
                      className='-translate-y-5 translate-x-10 md:translate-x-24 rounded-full md:h-72 md:w-72 h-36 w-36 lg:h-[28rem] lg:w-[28rem] 2xl:h-[32rem] 2xl:w-[32rem] box-border border-[4px] md:border-[10px] border-white border-solid shadow-inner shadow-white'
                    />
                  </div>
                </div>
                <div className='col-span-3 xl:col-span-2 z-10'>
                  <div className='italic text-center md:text-lg text-xs md:p-12'>
                    <h2 className='md:font-bold md:text-xl font-semibold text-lg mb-1 lg:mb-6'>
                      Motto
                    </h2>
                    <p className='mb-3 md:mb-14 '>
                      <span className='text-oren md:font-bold font-semibold text-justify'>
                        Competitive Price, Good Quality, On
                        Time Delivery and Customer
                        Satisfaction is our Commitment.
                      </span>{' '}
                    </p>
                    <p className='cursor-pointer hover:text-oren italic font-semibold text-slate-700 text-xs sm:text-sm'>
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
