import Circle from '@/components/elements/Circle'
import FooterPage from '@/components/elements/FooterPage'
import LogoSmall from '@/components/elements/LogoSmall'
import React from 'react'

const AboutPage = () => {
  return (
    <>
      <section id='about'>
        <div className='flex flex-col border'>
          <div className='grid grid-rows-2 grid-flow-col'>
            <div className='row-span-2 '>
              <LogoSmall />
            </div>
          </div>

          <div className='italic -translate-y-4'>
            <div className='ml-3 mb-2 md:ml-8 md:mb-4 lg:ml-20 lg:mb-6 2xl:ml-72 2xl:mb-4 py-1 px-3 w-28 md:w-36 text-center rounded-md text-xs md:text-sm font-medium uppercase tracking-wider border border-default-400/50 text-default-950'>
              our About
            </div>
            <Circle
              circleClassName='col-start-2 2xl:col-start-3 md:-ml-6'
              pading='m-2 ml-2 md:m-4 lg:m-6 2xl:m-6'
              text='About the Company'
            />

            <div className='container p-9 mb-12 md:p-12'>
              <p className='text-justify md:text-xl text-sm'>
                <span className='text-oren uppercase md:font-bold font-semibold'>
                  PT MEDIA MITRA TEKHNIK ENGINEERING
                </span>{' '}
                <span>
                  has been legally established on May 5 2003
                  in Jakarta, with the issuance of the
                  Decree of the Ministry of Law and Human
                  Rights of the Republic of Indonesia
                  Number:
                </span>{' '}
                <span className='text-oren uppercase md:font-bold font-semibold'>
                  C-15266.HT.01.01.TH.2003
                </span>{' '}
                <span>
                  concerning the Ratification of Limited
                  Liability Companies. With Taxpayer
                  Identification Number
                </span>{' '}
                <span className='text-oren uppercase md:font-bold font-semibold'>
                  02.273.169.9-032.000
                </span>{' '}
                <span>
                  and has been confirmed as a Taxable
                  Entrepreneur.
                </span>{' '}
              </p>
            </div>
          </div>

          <FooterPage />
        </div>
      </section>
    </>
  )
}

export default AboutPage
