import React from 'react'
import { BiRightArrowCircle } from 'react-icons/bi'

const Hero = () => {
  return (
    <>
      <div className='hero h-screen' />
      <div className='grid-cols-3 grid w-4/5 my-0 mx-auto -my-24'>
        <div className='flex flex-col factory pt-24 pb-8 px-6 justify-center z-5 transition duration-500 ease-in-out'>
          <h1 className='font-bold text-white text-4xl capitalize of opacity-40 transition duration-500 ease-in-out'>
            our factory
          </h1>
          <p className='text-lg my-2 font-light text-white of opacity-40 transition duration-500 ease-in-out'>
            3 verified versions
          </p>
          <div className='flex justify-end'>
            <BiRightArrowCircle className='font-bold text-white text-8xl my-4 of opacity-40 transition duration-500 ease-in-out' />
          </div>
        </div>
        <div className='flex flex-col project pt-24 pb-8 px-6 justify-center z-5 transition duration-500 ease-in-out'>
          <h1 className='font-bold text-white text-4xl capitalize of opacity-40 transition duration-500 ease-in-out'>
            our projects
          </h1>
          <p className='text-lg my-2 font-light text-white of opacity-40 transition duration-500 ease-in-out'>
            over 200 projects
          </p>
          <div className='flex justify-end'>
            <BiRightArrowCircle className='font-bold text-white text-8xl my-4 of opacity-40 transition duration-500 ease-in-out' />
          </div>
        </div>
        <div className='flex flex-col office pt-24 pb-8 px-6 justify-center z-5 transition duration-500 ease-in-out'>
          <h1 className='font-bold text-white text-4xl capitalize of opacity-40 transition duration-500 ease-in-out'>
            our offices
          </h1>
          <p className='text-lg my-2 font-light text-white of opacity-40 transition duration-500 ease-in-out'>
            6 verified locations
          </p>
          <div className='flex justify-end'>
            <BiRightArrowCircle className='font-bold text-white text-8xl my-4 of opacity-40 transition duration-500 ease-in-out' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
