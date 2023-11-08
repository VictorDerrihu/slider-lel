import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['CustomPaging--DivMain'] as const

// This component is specifically responsible for each 'dot'.
// Este component é responsável especificamente por cada 'dot'.

export const CustomPaging = () => {
  const handles = useCssHandles(CSS_HANDLES)

  return <div className={handles['CustomPaging--DivMain']}></div>
}
