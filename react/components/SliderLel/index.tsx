// This component is primarily responsible for the properties, classes, and the entire slider.
// Este componente é o principal responsavel pelas propriedades , classes e todo o slider .

import React from 'react'
import { useListContext } from 'vtex.list-context'
import Slider from 'react-slick'
import { useCssHandles } from 'vtex.css-handles'
import { useDevice } from 'vtex.device-detector'

import { NextArrow } from '../NextArrow'
import { PrevArrow } from '../PrevArrow'
import { AppendDots } from '../AppendDots'
import { CustomPaging } from '../CustomPaging'

interface SlickSliderProps {
  autoplay?: boolean
  autoplaySpeed?: number
  infinite?: boolean
  speed?: number
  centerMode?: boolean
  dotsEnable?: boolean
  arrowsEnable?: boolean
  slidesToShow?: number
  slidesToScroll?: number
  centerPadding?: string
  slidesToShowTablet?: number
  slidesToScrollTablet?: number
  centerPaddingTablet?: string
  slidesToShowPhone?: number
  slidesToScrollPhone?: number
  centerPaddingPhone?: string
  draggable?: boolean
  pauseOnHover?: boolean
  rtl?: boolean
}
const CSS_HANDLES = [
  'Slider-lel',
  'Slider-lel--ArrowFalse',
  'dots-lel',
  'items-slider',
] as const

export const SliderLel: StorefrontFunctionComponent<SlickSliderProps> = ({
  children,
  autoplay,
  autoplaySpeed,
  infinite,
  speed,
  dotsEnable,
  centerMode,
  arrowsEnable,
  draggable,
  pauseOnHover,
  rtl,
  centerPadding,
  centerPaddingPhone,
  centerPaddingTablet,
  slidesToScroll,
  slidesToScrollPhone,
  slidesToScrollTablet,
  slidesToShow,
  slidesToShowPhone,
  slidesToShowTablet,
}) => {
  const { device } = useDevice()
  const list = useListContext()?.list ?? []
  const slides = React.Children.toArray(children).concat(list)
  const settingsSlides = {
    autoplay,
    autoplaySpeed,
    infinite,
    speed,
    dots: dotsEnable,
    pauseOnHover,
    rtl,
    centerMode,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (
      dots: React.ReactElement<
        unknown,
        string | React.JSXElementConstructor<unknown>
      >
    ) => <AppendDots dots={dots} />,

    customPaging: () => (
      <div>
        <CustomPaging />
      </div>
    ),
  }

  let deviceSlides = {}

  if (device === 'phone') {
    deviceSlides = {
      slidesToShow: slidesToShowPhone
        ? slidesToShowPhone > 1 && slidesToShowPhone >= slides.length
          ? slides.length - 1
          : slidesToShowPhone
        : null,
      slidesToScroll: slidesToScrollPhone,
      centerPadding: centerPaddingPhone,
    }
  }

  if (device === 'tablet') {
    deviceSlides = {
      slidesToShow: slidesToShowTablet
        ? slidesToShowTablet > 1 && slidesToShowTablet >= slides.length
          ? slides.length - 1
          : slidesToShowTablet
        : null,
      slidesToScroll: slidesToScrollTablet,
      centerPadding: centerPaddingTablet,
    }
  }

  if (device === 'desktop') {
    deviceSlides = {
      draggable,
      slidesToShow: slidesToShow
        ? slidesToShow > 1 && slidesToShow >= slides.length
          ? slides.length - 1
          : slidesToShow
        : null,
      slidesToScroll,
      centerPadding,
    }
  }

  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div style={{ width: '100%' }}>
      <div>
        <Slider
          {...settingsSlides}
          {...deviceSlides}
          dotsClass={handles['dots-lel']}
          className={
            arrowsEnable
              ? handles['Slider-lel']
              : handles['Slider-lel--ArrowFalse']
          }
        >
          {slides.map((item, index: number) => (
            <div className={handles['items-slider']} key={index}>
              {item}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

SliderLel.getSchema = () => {
  return {
    title: 'SliderLel - Config',
  }
}
