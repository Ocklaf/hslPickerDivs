import React from 'react'
import './styles/styles.css'

function Gradient(props) {
  let { hue, saturation, number } = props

  const lightnessIncrease = 100 / number
  let final = []

  for (let i = 0; i < number; i++) {
    let style = { backgroundColor: `hsl(${hue}, ${saturation}%, ${lightnessIncrease * i}%)` }
    final.push(<div className='square' key={'Square' + i} style={style}></div>)
  }

  return (
    <div className='squares'>
      {final}
    </div>
  )
}

export default Gradient