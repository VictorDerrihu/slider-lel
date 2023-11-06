import React from 'react'
import { useListContext } from 'vtex.list-context'
import { useDevice } from 'vtex.device-detector'
import Slider from 'react-slick'
import { useCssHandles } from 'vtex.css-handles'

import { NextArrow } from '../NextArrow'
import { ArrowSlider } from '../SvgsComponents/ArrowSlider'

interface SlickSliderProps {
  arrowsDesk: boolean
  arrowsPhone: boolean
  arrowsTablet: boolean
  autoplay: boolean
  autoplaySpeed: number
  centerModeDesk: boolean
  centerModePhone: boolean
  centerModeTablet: boolean
  centerPaddingDesk: string
  centerPaddingPhone: string
  centerPaddingTablet: string
  slidesToShowDesk: number
  slidesToShowPhone: number
  slidesToShowTablet: number
}
const CSS_HANDLES = ['Slider-lel'] as const

export const SliderLel: StorefrontFunctionComponent<SlickSliderProps> = ({
  children,
  arrowsDesk,
  arrowsPhone,
  arrowsTablet,
  autoplay,
  autoplaySpeed,
  centerModeDesk,
  centerModePhone,
  centerModeTablet,
  centerPaddingDesk,
  centerPaddingPhone,
  centerPaddingTablet,
  slidesToShowDesk,
  slidesToShowPhone,
  slidesToShowTablet,
}) => {
  const { device } = useDevice()
  const handles = useCssHandles(CSS_HANDLES)
  const list = useListContext()?.list ?? []
  const slides = React.Children.toArray(children).concat(list)
  let settingsSlides = {}

  if (device === 'phone') {
    settingsSlides = {
      arrows: arrowsPhone,
      autoplay,
      autoplaySpeed,
      centerMode: centerModePhone,
      centerPadding: centerPaddingPhone,
      slidesToShow: slidesToShowPhone,
      nextArrow: <NextArrow />,
      prevArrow: <NewPrevArrow />,
    }
  }

  if (device === 'tablet') {
    settingsSlides = {
      arrows: arrowsTablet,
      autoplay,
      autoplaySpeed,
      centerMode: centerModeTablet,
      centerPadding: centerPaddingTablet,
      slidesToShow: slidesToShowTablet,
      nextArrow: <NewNextArrow />,
      prevArrow: <NewPrevArrow />,
    }
  }

  if (device === 'desktop') {
    settingsSlides = {
      arrows: arrowsDesk,

      autoplaySpeed,
      centerMode: centerModeDesk,
      centerPadding: centerPaddingDesk,
      slidesToShow: 3,
      slidesToScroll: 3,
      draggable: false,
      nextArrow: <NewNextArrow />,
      prevArrow: <NewPrevArrow />,
      dots: true,
    }
  }

  // eslint-disable-next-line no-console
  console.log(slidesToShowDesk, autoplay, centerModeDesk)
  function NewNextArrow(props: any) {
    const { onClick } = props

    return (
      <button onClick={onClick}>
        <ArrowSlider width={40} height={40} />
      </button>
    )
  }

  function NewPrevArrow(props: any) {
    const { onClick } = props

    return (
      <button onClick={onClick}>
        <ArrowSlider width={40} height={40} />
      </button>
    )
  }

  // eslint-disable-next-line no-console
  console.log(settingsSlides, 'Teste 2')

  return (
    <div style={{ width: '100vw' }}>
      <div>
        <Slider
          {...settingsSlides}
          autoplay={false}
          className={handles['Slider-lel']}
        >
          {slides.map((item, index: number) => (
            <div key={index}>{item}</div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

SliderLel.getSchema = () => {
  return {
    title: 'SlickSlider',
  }
}
