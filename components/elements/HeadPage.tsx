import React from 'react'
import LogoSmall from './LogoSmall'

const HeadPage = () => {
  return (
    <>
      <div className='grid grid-cols-12'>
        <div className='col-span-12 '>
          <div className='flex justify-between'>
            <div className='flex flex-grow justify-center text-center sm:items-center cursor-pointer hover:text-oren italic font-semibold text-slate-700 text-xs sm:text-sm md:text-lg'>
              <LogoSmall />
            </div>
            <div className='bg-oren rounded-bl-full w-3/6 h-20 md:h-28 2xl:h-44 2xl:w-2/5'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeadPage
