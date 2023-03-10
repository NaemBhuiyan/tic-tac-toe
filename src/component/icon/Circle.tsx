import React from 'react'

type Prop = {
  icon: string
}

const Circle = ({ icon }: Prop) => {
  if (icon == 'circle') {
    return <img className='icon' src={require('../../assets/image/circle.png')} alt='' />
  }
  if (icon == 'cross') {
    return <img className='icon' src={require('../../assets/image/close.png')} alt='' />
  }
  return null
}

export default Circle
