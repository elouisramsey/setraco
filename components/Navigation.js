import React, { useState } from 'react'
import Link from 'next/link'
import { Image, Transformation } from 'cloudinary-react'
import { useRouter } from 'next/router'
import { BiCheckCircle, BiEnvelope } from 'react-icons/bi'
import { createPopper } from '@popperjs/core'

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const router = useRouter()

  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false)
  const btnDropdownRef = React.createRef()
  const popoverDropdownRef = React.createRef()
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start'
    })
    setDropdownPopoverShow(true)
  }
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false)
  }

  return (
    <>
      <header className='w-full bg-hero relative'>
        <nav className='fixed top-0 left-0 w-full z-10'>
          <div className='lg:px-28 px-8 py-2 bg-gray-50'>
            <div className='flex items-center'>
              {' '}
              <div className='mr-4'>
                {' '}
                <a
                  href='mailto: info@setraco.net'
                  className='font-light text-sec text-sm hover:text-pri transition duration-150 ease-in-out'
                >
                  E: info@setraco.net
                </a>
              </div>
              <div className=''>
                <a
                  href='tel:+2348069447441'
                  className='font-light text-sec text-sm hover:text-pri transition duration-150 ease-in-out'
                >
                  T: +234-806-944-744-1
                </a>
              </div>
            </div>
          </div>
          <div className='md:px-28 bg-white flex flex-wrap items-center md:flex-no-wrap justify-between py-4'>
            <div className='ml-8 md:ml-0'>
              <Link href='/'>
                <a>
                  <Image
                    cloudName='walking-voice-limited'
                    publicId='setraco/setraco_logo_ajrls1.webp'
                  >
                    <Transformation
                      quality='auto'
                      crop='scale'
                      fetchFormat='auto'
                      width='260'
                      height='71'
                    />
                  </Image>
                </a>
              </Link>
            </div>
            <div className='flex justify-end items-center'>
              <div className='flex mx-2 items-center border-r my-4 pr-8 border-solid border-gray-400'>
                <BiCheckCircle className='font-bold text-pri text-4xl mr-2' />
                <div className='flex flex-col justify-center'>
                  <p className='font-bold text-pri text-base uppercase'>
                    FAMILY
                  </p>
                  <p className='font-lighter text-gray-400 text-sm capitalize'>
                    oriented
                  </p>
                </div>
              </div>
              <div className='flex mx-2 items-center border-r my-4 pr-8 border-solid border-gray-400'>
                <BiCheckCircle className='font-bold text-pri text-4xl mr-2' />
                <div className='flex flex-col justify-center'>
                  <p className='font-bold text-pri text-base uppercase'>
                    quality
                  </p>
                  <p className='font-lighter text-gray-400 text-sm capitalize'>
                    assured
                  </p>
                </div>
              </div>
              <div className='flex mx-2 items-center my-4'>
                <BiCheckCircle className='font-bold text-pri text-4xl mr-2' />
                <div className='flex flex-col justify-center'>
                  <p className='font-bold text-pri text-base uppercase'>
                    Operational
                  </p>
                  <p className='font-lighter text-gray-400 text-sm capitalize'>
                    Excellence
                  </p>
                </div>
              </div>
              <div className='focus:outline-none text-white text-sm py-2.5 px-5 rounded-sm bg-pri hover:bg-white hover:text-sec flex justify-between hover:shadow-lg justify-center items-center ml-12 transition duration-150 ease-in-out'>
                <BiEnvelope className='text-lg mr-2' />{' '}
                <div className='text-base'>Contact Us</div>
              </div>
            </div>
            <div className='ml-auto md:hidden mr-4'>
              <button
                className='flex items-center h-6 w-6 outline-none focus:outline-none'
                type='button'
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg
                  className='h-full w-full'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={
              'w-full md:flex justify-start bg-pri lg:px-28 px-8 md:h-12' +
              (navbarOpen ? 'block' : ' hidden')
            }
          >
            <ul className='relative inline-flex md:items-center md:h-full w-4/7 justify-between'>
              <li
                className={
                  'font-light h-full text-sm hover:text-sec capitalize flex items-center py-4' +
                  (router.pathname === '/' ? ' active' : ' text-white')
                }
              >
                <Link href='/'>
                  <a className='text-white'>Home</a>
                </Link>
              </li>
              <li className='font-light h-full text-sm capitalize flex items-center relative inline-flex hoverable py-4'>
                <button
                  className='outline-none focus:outline-none text-white font-light text-sm capitalize'
                  style={{ transition: 'all .15s ease' }}
                  type='button'
                  ref={btnDropdownRef}
                  onMouseOver={() => {
                    dropdownPopoverShow
                      ? closeDropdownPopover()
                      : openDropdownPopover()
                  }}
                >
                  about
                </button>
                <div
                  ref={popoverDropdownRef}
                  className={
                    (dropdownPopoverShow ? 'block ' : 'hidden ') +
                    'text-base z-50 bg-white float-left py-8 px-4 list-none text-left rounded-sm shadow-lg mt-3 divide-x divide-gray-400 grid grid-cols-3'
                  }
                  style={{ minWidth: '48rem' }}
                >
                  <ul className='flex flex-col h-full justify-between'>
                    <li
                      className={
                        'font-light h-full text-sm hover:text-sec capitalize flex items-center mb-4' +
                        (router.pathname === '/mission'
                          ? ' activated'
                          : ' text-sublinks')
                      }
                    >
                      <Link href='/mission'>
                        <a className='text-sublinks'>our mission</a>
                      </Link>
                    </li>
                    <li
                      className={
                        'font-light h-full text-sm hover:text-sec capitalize flex items-center mb-4' +
                        (router.pathname === '/vision'
                          ? ' activated'
                          : ' text-sublinks')
                      }
                    >
                      <Link href='/vision'>
                        <a className='text-sublinks'>our vision</a>
                      </Link>
                    </li>
                    <li
                      className={
                        'font-light h-full text-sm hover:text-sec capitalize flex items-center mb-4' +
                        (router.pathname === '/directors'
                          ? ' activated'
                          : ' text-sublinks')
                      }
                    >
                      <Link href='/directors'>
                        <a className='text-sublinks'>our directors</a>
                      </Link>
                    </li>
                    <li
                      className={
                        'font-light h-full text-sm hover:text-sec capitalize flex items-center mb-4' +
                        (router.pathname === '/managers'
                          ? ' activated'
                          : ' text-sublinks')
                      }
                    >
                      <Link href='/managers'>
                        <a className='text-sublinks'>our managers</a>
                      </Link>
                    </li>
                    <li
                      className={
                        'font-light h-full text-sm hover:text-sec capitalize flex items-center mb-4' +
                        (router.pathname === '/staff'
                          ? ' activated'
                          : ' text-sublinks')
                      }
                    >
                      <Link href='/staff'>
                        <a className='text-sublinks'>employees</a>
                      </Link>
                    </li>
                  </ul>
                  <ul className='flex flex-col h-full justify-between pl-6'>
                    <li
                      className={
                        'font-light h-full text-sm hover:text-sec capitalize flex items-center mb-4' +
                        (router.pathname === '/materials'
                          ? ' activated'
                          : ' text-sublinks')
                      }
                    >
                      <Link href='/materials'>
                        <a className='text-sublinks'>raw materials</a>
                      </Link>
                    </li>
                    <li
                      className={
                        'font-light h-full text-sm hover:text-sec capitalize flex items-center mb-4' +
                        (router.pathname === '/capacity'
                          ? ' activated'
                          : ' text-sublinks')
                      }
                    >
                      <Link href='/capacity'>
                        <a className='text-sublinks'>operational capacity</a>
                      </Link>
                    </li>
                    <li
                      className={
                        'font-light h-full text-sm hover:text-sec capitalize flex items-center mb-4' +
                        (router.pathname === '/facilities'
                          ? ' activated'
                          : ' text-sublinks')
                      }
                    >
                      <Link href='/facilities'>
                        <a className='text-sublinks'>facilities</a>
                      </Link>
                    </li>
                    <li
                      className={
                        'font-light h-full text-sm hover:text-sec capitalize flex items-center mb-4' +
                        (router.pathname === '/community'
                          ? ' activated'
                          : ' text-sublinks')
                      }
                    >
                      <Link href='/community'>
                        <a className='text-sublinks'>society and community</a>
                      </Link>
                    </li>
                  </ul>
                  <ul className='flex flex-col h-full justify-between pl-6'>
                    <li
                      className={
                        'font-light h-full text-sm hover:text-sec capitalize flex items-center mb-4' +
                        (router.pathname === '/environment'
                          ? ' activated'
                          : ' text-sublinks')
                      }
                    >
                      <Link href='/environment'>
                        <a className='text-sublinks'>working environment</a>
                      </Link>
                    </li>
                    <li
                      className={
                        'font-light h-full text-sm hover:text-sec capitalize flex items-center mb-4' +
                        (router.pathname === '/awards'
                          ? ' activated'
                          : ' text-sublinks')
                      }
                    >
                      <Link href='/awards'>
                        <a className='text-sublinks'>
                          awards and commendations
                        </a>
                      </Link>
                    </li>
                    <li
                      className={
                        'font-light h-full text-sm hover:text-sec capitalize flex items-center mb-4' +
                        (router.pathname === '/guides'
                          ? ' activated'
                          : ' text-sublinks')
                      }
                    >
                      <Link href='/guides'>
                        <a className='text-sublinks'>guiding principles</a>
                      </Link>
                    </li>
                    <li
                      className={
                        'font-light h-full text-sm hover:text-sec flex items-center mb-4' +
                        (router.pathname === '/faq'
                          ? ' activated'
                          : ' text-sublinks')
                      }
                    >
                      <Link href='/faq'>
                        <a className='text-sublinks'>FAQs</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className={
                  'font-light h-full text-sm hover:text-sec capitalize flex items-center py-4' +
                  (router.pathname === '/services' ? ' active' : ' text-white ')
                }
              >
                <Link href='/services'>
                  <a>service</a>
                </Link>
              </li>
              <li
                className={
                  'font-light h-full text-sm hover:text-sec capitalize flex items-center py-4' +
                  (router.pathname === '/gallery' ? ' active' : ' text-white ')
                }
              >
                <Link href='/project'>
                  <a>projects</a>
                </Link>
              </li>
              <li
                className={
                  'font-light h-full text-sm hover:text-sec capitalize flex items-center py-4' +
                  (router.pathname === '/partnership'
                    ? ' active'
                    : ' text-white ')
                }
              >
                <Link href='/news'>
                  <a>news</a>
                </Link>
              </li>
              <li
                className={
                  'font-light h-full text-sm hover:text-sec capitalize flex items-center py-4' +
                  (router.pathname === '/contact' ? ' active' : ' text-white ')
                }
              >
                <Link href='/contact'>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navigation
