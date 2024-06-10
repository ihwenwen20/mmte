import React from 'react'

const FooterPage = () => {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-12 '>
        <div className='flex justify-between'>
          <div className='flex flex-grow justify-center text-center sm:items-center cursor-pointer hover:text-oren italic font-semibold text-slate-700 dark:text-oren text-xs sm:text-sm md:text-lg'>
            www.mmtecontractor.com
          </div>
          {/* <div className='bg-oren rounded-tl-full w-3/6 h-20 -mt-8 sm:mt-0 md:mt-8 md:h-28 lg:h-36 2xl:h-44 2xl:w-2/5 2xl:mt-0'></div> */}
          <div className='bg-oren rounded-tl-full w-3/6 h-20 -mt-8 sm:mt-0 md:mt-8 md:h-28 lg:h-36 2xl:h-44 2xl:w-2/5 2xl:mt-0'></div>
        </div>
      </div>
    </div>
  )
}

export default FooterPage
