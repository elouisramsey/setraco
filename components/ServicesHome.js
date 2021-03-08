import React from 'react'
import { Image, Transformation } from 'cloudinary-react'

const ServicesHome = () => {
  return (
    <div className='lg:px-28 px-8 py-28 bg-white flex flex-col justify-center'>
      <div className='flex flex-col justify-center'>
        <h1 className='text-sm mb-8 text-pri uppercase font-medium md:text-4xl md:px-20 text-center my-8'>
          our services
        </h1>
        <div className='grid grid-cols-3 gap-2'>
          <div className='rounded-xl'>
            <Image
              cloudName='walking-voice-limited'
              publicId='setraco/setraco_roads_adhd9s.webp'
              alt='Standout'
            >
              <Transformation quality='auto' crop='scale' fetchFormat='auto' />
            </Image>
          </div>
          <div className='rounded-xl'>
            <Image
              cloudName='walking-voice-limited'
              publicId='setraco/magnificent-panorama-large-river-huge-modern-concrete-bridge-car-traffic-stone-embankment-iron-fence-repair-work-203471103_hpwsyk.webp'
              alt='Standout'
            >
              <Transformation quality='auto' crop='scale' fetchFormat='auto' />
            </Image>
          </div>
          <div className='rounded-xl'>
            <Image
              cloudName='walking-voice-limited'
              publicId='setraco/quarrying-2-new_mrjyuq.webp'
              alt='Standout'
            >
              <Transformation quality='auto' crop='scale' fetchFormat='auto' />
            </Image>
          </div>
        </div>
        <div className='focus:outline-none text-white text-sm py-2.5 px-5 rounded-sm bg-pri hover:bg-white hover:text-sec flex justify-between hover:shadow-lg justify-center items-center my-6 transition duration-150 ease-in-out w-1/5 my-24 mx-auto'>
          <div className='text-base flex justify-center items-center w-full'>
            More Services
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesHome
