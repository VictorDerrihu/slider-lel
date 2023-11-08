// This component is responsible for the main block of the 'dots'.
// Este componente é responsável pelo bloco principal dos 'dots' .

import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import styles from '../SliderLel/styles/styles.css'

const CSS_HANDLES = ['AppendDots--DivMain', 'AppendDots--Ul'] as const

interface AppendDotsProps {
  dots: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}

export const AppendDots: React.FC<AppendDotsProps> = ({ dots }) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div
      className={handles['AppendDots--DivMain']}
      style={{
        backgroundColor: '#ffffff0',
        borderRadius: '10px',
        padding: '10px',
      }}
    >
      <ul
        className={`${handles['AppendDots--Ul']} ${styles['AppendDots-active']}`}
      >
        {' '}
        {dots}{' '}
      </ul>
    </div>
  )
}
