import { React, useState } from "react"

function Range(props) {
  let { min, max, name, startValue, callMe } = props

  let [value, setSelected] = useState(startValue)

  return (
    <div>
      <label htmlFor={name}>{name}:</label>

      <input
        type="range"
        value={value}
        id={name}
        min={min}
        max={max}
        onChange={(e) => {
          setSelected(e.target.value)
          callMe(e.target.value, name)
        }
        }>
      </input>

      <span>{value}</span>

    </div>
  )
}

export default Range