import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { Image, Transformation } from 'cloudinary-react'
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'

function ArrowLeft(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : ''
  return (
    <div
      className={
        'arrow arrow--left flex justify-center align-center w-16 bg-pri rounded-full ' +
        disabeld
      }
    >
      <BiLeftArrowAlt onClick={props.onClick} className='text-5xl text-sec' />
    </div>
  )
}

function ArrowRight(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : ''
  return (
    <div
      className={
        'arrow arrow--right flex justify-center align-center w-16 bg-pri rounded-full ' +
        disabeld
      }
    >
      <BiRightArrowAlt onClick={props.onClick} className='text-5xl text-sec' />
    </div>
  )
}

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider({
    centered: true,
    loop: true,
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    }
  })
  return (
    <div className='lg:px-28 px-8 py-28 bg-white flex flex-col justify-center'>
      <div className='navigation-wrapper relative'>
        <div
          className='flex justify-between keen-slider h-twenty rounded-xl'
          ref={sliderRef}
        >
          <Image
            cloudName='walking-voice-limited'
            publicId='setraco/idu-3_bvrv25.webp'
            className=' xl:block keen-slider__slide object-cover'
          >
            <Transformation quality='auto' crop='scale' fetchFormat='auto' />
          </Image>
          <Image
            cloudName='walking-voice-limited'
            publicId='setraco/setraco_bridge_fdthz3.webp'
            className=' xl:block keen-slider__slide object-cover'
          >
            <Transformation quality='auto' crop='scale' fetchFormat='auto' />
          </Image>
          <Image
            cloudName='walking-voice-limited'
            publicId='setraco/setraco_road_dual_rkppnm.jpg'
            className=' xl:block keen-slider__slide object-cover'
          >
            <Transformation quality='auto' crop='scale' fetchFormat='auto' />
          </Image>
        </div>
        {slider && (
          <>
            <ArrowLeft
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default Slider
