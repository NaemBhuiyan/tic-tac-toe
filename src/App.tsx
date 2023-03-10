import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Circle from './component/icon/Circle'

function App() {
  const [iconState, setIconState] = useState(Array.from({ length: 9 }, () => ''))

  const handleClick = (index: number) => {
    console.log('clicked')

    if (index % 2 === 0) {
      iconState[index] = 'circle'
    } else {
      iconState[index] = 'cross'
    }
    setIconState([...iconState])
  }
  console.log(iconState)

  return (
    <div className='App'>
      <header className='App-header'>
        {iconState.map((box, index) => (
          <div
            key={index}
            className='box'
            onClick={() => !iconState.every((item) => !!item) && handleClick(index)}
          >
            <Circle idx={index} icon={box} />
          </div>
        ))}
      </header>
    </div>
  )
}

export default App
