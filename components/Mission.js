import React from 'react'
import { Image, Transformation } from 'cloudinary-react'

const Mission = () => {
  return (
    <div className='lg:px-28 px-8 py-28 bg-white flex flex-col justify-center mt-52'>
      <p className='text-xl text-sublinks font-light md:leading-7 capitalize flex justify-center'>
        mission
      </p>
      <h1 className='text-sm mb-8 text-pri uppercase font-medium md:text-4xl md:px-20 text-center my-8'>
        conglomerate & lead in the engineering industry
      </h1>
      <div className='grid-cols-2 grid gap-3'>
        <div>
          <Image
            cloudName='walking-voice-limited'
            publicId='setraco/pexels-andrea-piacquadio-3931131_ne0yhx.webp'
            alt='Standout'
          >
            <Transformation quality='auto' crop='scale' fetchFormat='auto' />
          </Image>
        </div>
        <div className='flex flex-col'>
          <p className='text-lg my-2 font-light text-sublinks'>
            Setraco Nigeria Limited is a leading engineering company with over
            35 years working experience in delivering value-added civil and
            infrastructural projects in Nigeria. Setraco was established in 1977
            and started by constructing township and district roads in what was
            then Bendel State. <br />
            <br />
            Over the years the company has rapidly grown to become one of the
            largest construction companies in Nigeria specialized in roads and
            bridges. With a presence today in over 15 states; Setraco has played
            a key role in developing Nigeria’s infrastructure. Setraco ensures
            that all projects are successfully completed to specification and in
            line with the company’s sense of responsibility towards our Clients
            and host communities.
          </p>
          <div className='focus:outline-none text-white text-sm py-2.5 px-5 rounded-sm bg-pri hover:bg-white hover:text-sec flex justify-between hover:shadow-lg justify-center items-center my-6 transition duration-150 ease-in-out w-1/3'>
            <div className='text-base flex justify-center items-center w-full'>
              Learn More
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
