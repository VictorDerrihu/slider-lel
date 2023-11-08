// This component is responsible for the left (previous) transition arrow of the slide.
// Este componente é responsável pela seta esquerda (anterior) de transição do slide .

import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { ArrowSlider } from '../SvgsComponents/ArrowSlider'

const CSS_HANDLES = ['Slider-Lel--ButtonPrev'] as const

export const PrevArrow = (props: any) => {
  const { onClick } = props
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <button className={handles['Slider-Lel--ButtonPrev']} onClick={onClick}>
      <ArrowSlider width={40} height={40} />
    </button>
  )
}
