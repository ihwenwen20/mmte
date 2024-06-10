import React from 'react'
import { customersLogo } from '@/constans/data'
import Image from 'next/image'

const CustomersPage = () => {
  return (
    <>
      <section id='customers'>
        <div className='bg-darkblue text-white py-4'>
          <h2 className='text-center text-2xl mb-2 font-bold leading-8'>
            Our Clients
          </h2>
          <p className='text-center text-lg font-extralight leading-8 '>
            We are trusted by the world’s most innovative
            teams
          </p>

          <div className='group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]'>
            <div className='animate-slide-left group-hover:animation-pause inline-block w-max space-x-8'>
              {customersLogo.map((client, index) => (
                <Image
                  key={index}
                  className='mx-4 inline h-16 text-white'
                  src={client.src}
                  alt={client.alt}
                />
              ))}
            </div>

            {/* <!-- Duplicate of the above for infinite effect (you can use javascript to duplicate this too) --> */}
            <div className='animate-slide-left group-hover:animation-pause inline-block w-max ml-10'>
              {/* <!-- Ensure that the images cover entire screen width for a smooth transition --> */}
              {customersLogo.map((client, index) => (
                <Image
                  key={index}
                  className='mx-4 inline h-16 text-white'
                  src={client.src}
                  alt={client.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CustomersPage
