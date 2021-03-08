import React from 'react'
import Link from 'next/link'
import { Image, Transformation } from 'cloudinary-react'
import { useRouter } from 'next/router'
import { GoLocation } from 'react-icons/go'
import { BiPhone, BiEnvelope } from 'react-icons/bi'

const Footer = () => {
  const router = useRouter()

  return (
    <footer>
      <div className='lg:px-28 px-8 py-28 bg-pri grid-cols-3 grid'>
        <div className='w-3/4 py-16'>
          <Image
            cloudName='walking-voice-limited'
            publicId='setraco/setraco_xdmw66.webp'
            alt='Standout'
          >
            <Transformation quality='auto' crop='scale' fetchFormat='auto' />
          </Image>
        </div>
        <div className=''>
          <h1 className='text-base mb-4 text-white capitalize font-semibold md:text-2xl'>
            quick links
          </h1>
          <ul className='flex flex-col'>
            <li
              className={
                'font-light h-full text-base my-2 capitalize flex items-center' +
                (router.pathname === '/about' ? ' active' : ' text-gray-300')
              }
            >
              <Link href='/'>
                <a className='text-gray-300 capitalize hover:text-sec'>
                  About us
                </a>
              </Link>
            </li>
            <li
              className={
                'font-light h-full text-base my-2 capitalize flex items-center' +
                (router.pathname === '/services' ? ' active' : ' text-gray-300')
              }
            >
              <Link href='/services'>
                <a className='text-gray-300 capitalize hover:text-sec'>
                  our services
                </a>
              </Link>
            </li>
            <li
              className={
                'font-light h-full text-base my-2  hover:text-sec capitalize flex items-center' +
                (router.pathname === '/location' ? ' active' : ' text-gray-300')
              }
            >
              <Link href='/location'>
                <a className='text-gray-300 capitalize hover:text-sec'>
                  our locations
                </a>
              </Link>
            </li>
            <li
              className={
                'font-light h-full text-base my-2 flex items-center' +
                (router.pathname === '/faq' ? ' active' : ' text-gray-300')
              }
            >
              <Link href='/faq'>
                <a className='text-gray-300 hover:text-sec'>FAQ</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className=''>
          <h1 className='text-base mb-4 text-white capitalize font-semibold md:text-2xl  ml-14'>
            Get in Touch
          </h1>
          <div className='flex items-center mb-4'>
            <div className=''>
              <GoLocation className='text-5xl text-white mr-4' />
            </div>
            <p className='font-light h-full text-base capitalize flex items-center text-gray-300'>
              Setraco Building Plot 526, Shehu Yar'Adua Way Kado District Abuja
            </p>
          </div>
          <div className='flex items-center mb-4'>
            <BiPhone className=' text-5xl mr-4 text-white' />
            <a
              href='tel:+2349055519823'
              className='font-light h-full text-base capitalize flex items-center text-gray-300'
            >
              +234-806-944-7441
            </a>
          </div>
          <div className='flex items-center mb-4'>
            <BiEnvelope className=' text-5xl mr-4 text-white' />
            <p className='font-light h-full text-base capitalize flex items-center text-gray-300'>
              info@setraco.net
            </p>
          </div>
        </div>
      </div>
      <div className='lg:px-28 px-8 py-2 bg-ft divide-x flex'>
        <p className='font-light h-full text-xs capitalize flex items-center text-gray-50 mr-2'>
          © 2021 - Setraco. all rights reserved
        </p>
        <a
          className='font-light h-full text-xs capitalize flex items-center text-gray-50 pl-2 hover:text-sec'
          href='http://walkingvoice.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          website design by walking voice
        </a>
      </div>
    </footer>
  )
}

export default Footer
