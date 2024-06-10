import React from 'react'
import Circle from '@/components/elements/Circle'
import FooterPage from '@/components/elements/FooterPage'
import Kerjasama from '@/components/elements/Kerjasama'
import LogoSmall from '@/components/elements/LogoSmall'

const CompanyValuesPage = () => {
  return (
    <section id='company-values'>
      <div className='flex flex-col border-b'>
        <div className='grid grid-rows-2 grid-flow-col'>
          <div className='row-span-2'>
            <Kerjasama />
          </div>
          <div className='row-span-1 '>
            <LogoSmall />
          </div>
        </div>
        <div className='italic lg:mx-40 -translate-y-14 -z-50 md:-translate-y-44 lg:-translate-y-60 sm:-translate-y-48 '>
          <Circle
            circleClassName='col-start-6 lg:col-start-7 2xl:col-start-7'
            pading='tracking-tighter m-2 md:m-6 md:ml-2 lg:my-10 2xl:my-8'
            text='Company'
            text2='Values'
          />

          <div className='flex justify-center 2xl:mt-24 mt-8 ml-16 md:mt-16 md:ml-36 lg:ml-64 md:-mb-16 lg:mt-24 lg:-mb-44 lg:w-5/6'>
            <div className='grid grid-cols-1 uppercase italic w-full -ml-3 2xl:w-5/6 2xl:ml-24'>
              <div className='bg-oren rounded-full w-full lg:h-28 h-14 md:h-20 flex justify-center items-center text-lg md:text-2xl lg:text-3xl font-bold'>
                ethics
              </div>
              <div className='bg-transparent rounded-full lg:h-28 h-14 md:h-20 flex justify-center items-center text-lg md:text-2xl lg:text-3xl font-bold'>
                profesional
              </div>
              <div className='bg-oren rounded-full lg:h-28 h-14 md:h-20 flex justify-center items-center text-lg md:text-2xl lg:text-3xl font-bold'>
                persistent
              </div>
              <div className='bg-transparent rounded-full lg:h-28 h-14 md:h-20 flex justify-center items-center text-lg md:text-2xl lg:text-3xl font-bold'>
                proactive
              </div>
              <div className='bg-oren rounded-full lg:h-28 h-14 md:h-20 flex justify-center items-center text-lg md:text-2xl lg:text-3xl font-bold'>
                respect
              </div>
              <div className='bg-transparent rounded-full lg:h-28 h-14 md:h-20 flex justify-center items-center text-lg md:text-2xl lg:text-3xl font-bold'>
                employee development
              </div>
            </div>
          </div>
        </div>
        <FooterPage />
      </div>
    </section>
  )
}

export default CompanyValuesPage
