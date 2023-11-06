import React from 'react'

import { ArrowSlider } from '../SvgsComponents/ArrowSlider'

export const NextArrow = (props: any) => {
  const { onClick } = props

  return (
    <button onClick={onClick}>
      <ArrowSlider width={40} height={40} />
    </button>
  )
}
