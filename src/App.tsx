import React, { useState } from 'react'
import './App.css'
import Circle from './component/icon/Circle'

function App() {
  const [countClick, setCountClick] = useState(1)
  const [iconBoxes, setIconBoxes] = useState(Array.from({ length: 9 }, () => ''))

  const handleClick = (index: number) => {
    if (countClick % 2 === 0) {
      if (!iconBoxes[index]) {
        iconBoxes[index] = 'circle'
        setCountClick((pre) => pre + 1)
      }
    } else {
      if (!iconBoxes[index]) {
        iconBoxes[index] = 'cross'
        setCountClick((pre) => pre + 1)
      }
    }
    setIconBoxes([...iconBoxes])
  }

  return (
    <div className='App'>
      <header className='App-header'>
        {iconBoxes.map((box, index) => (
          <div
            key={index}
            className='box'
            onClick={() => !iconBoxes.every((item) => !!item) && handleClick(index)}
          >
            <Circle idx={index} icon={box} />
          </div>
        ))}
      </header>
    </div>
  )
}

export default App
