// This component is responsible for the right (next) transition arrow of the slide.
// Este componente é responsável pela seta direita (próxima) de transição do slide .

import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { ArrowSlider } from '../SvgsComponents/ArrowSlider'

const CSS_HANDLES = ['Slider-Lel--ButtonNext'] as const

export const NextArrow = (props: any) => {
  const { onClick } = props
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <button className={handles['Slider-Lel--ButtonNext']} onClick={onClick}>
      <ArrowSlider width={40} height={40} />
    </button>
  )
}
