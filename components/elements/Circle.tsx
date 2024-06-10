'use client'

import React from 'react'

interface CircleProps {
  circleClassName?: string
  pading?: string
  text: string
  text2?: string
}

const Circle: React.FC<CircleProps> = ({
  circleClassName,
  pading,
  text,
  text2
}) => {
  return (
    <div
      className='grid grid-cols-12 
    '>
      <div
        className={`col-span-12 bg-oren rounded-full h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 ${circleClassName}`}>
        <div
          className={`italic w-56 md:w-72 lg:w-96 lg:text-6xl md:text-4xl text-3xl font-bold p-1 ml-1 leading-none ${pading}`}>
          <h1>{text}</h1>
          <p>{text2}</p>
        </div>
      </div>
    </div>
  )
}

export default Circle
