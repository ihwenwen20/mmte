import Image from 'next/image'
import React from 'react'

const Kerjasama = () => {
  return (
    <>
      <div className='bg-darkblue dark:border-white dark:border-r rounded-br-full w-48 h-48 md:w-[20rem] md:h-[20rem] lg:w-[32rem] lg:h-[32rem] 2xl:h-[40rem] 2xl:w-[40rem]'>
        <Image
          src='/image/kerjasama.jpg'
          alt='kerjasama'
          width={1500}
          height={1500}
          className='translate-x-10 translate-y-5 lg:translate-x-40 lg:translate-y-10 rounded-full md:h-72 md:w-72 h-36 w-36 lg:h-[28rem] lg:w-[28rem] 2xl:h-[32rem] 2xl:w-[32rem] box-border border-[4px] md:border-[10px] border-white border-solid shadow-inner shadow-white'
        />
      </div>
    </>
  )
}

export default Kerjasama
