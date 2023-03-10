import React from 'react'

type Prop = {
  idx: number
  icon: string
}

const Circle = ({ idx, icon }: Prop) => {
  if (icon == 'circle') {
    return <img className='icon' src={require('../../assets/image/circle.png')} alt='' />
  }
  if (icon == 'cross') {
    return <img className='icon' src={require('../../assets/image/close.png')} alt='' />
  }
  return null
}

export default Circle
