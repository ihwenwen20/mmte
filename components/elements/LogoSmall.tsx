import Image from 'next/image'
import React from 'react'

const LogoSmall = () => {
  return (
    <>
      <div className='flex justify-end m-2'>
        <Image
          src='/image/logo.jpg'
          alt='logoperusahaan'
          width={1500}
          height={1500}
          className='rounded-full 2xl:w-72 2xl:h-72 lg:w-56 lg:h-56 md:w-40 md:h-40 sm:h-28 sm:w-28 h-20 w-20 translate-y-2 -translate-x-3 md:-translate-x-10 md:translate-y-2 lg:-translate-x-14 lg:translate-y-6'
        />
      </div>
    </>
  )
}

export default LogoSmall
