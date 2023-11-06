import React from 'react'
import classnames from 'classnames'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['arrow__Icon'] as const

export function ArrowSlider(props: React.SVGProps<SVGSVGElement>) {
  const handles = useCssHandles(CSS_HANDLES)
  const { width, height, fill, className, ...rest } = props
  const arrowClass = classnames(`${handles.arrow__Icon}`, className)

  return (
    <svg
      className={arrowClass}
      width={width ?? '32'}
      height={height ?? '32'}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M12 6L22 16L12 26"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
