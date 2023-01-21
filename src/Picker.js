import { React, useState } from "react"
import Range from "./Range"
import Gradient from "./Gradient"

function Picker() {
  let [hueValue, setHue] = useState(0)
  let [saturationValue, setSaturation] = useState(100)
  let [stepsValue, setSteps] = useState(10)

  function gradientValues(value, id) {  
    if (id === 'Hue') setHue(value)
    else if (id === 'Saturation') setSaturation(value)
    else setSteps(value)
  }

  return (
    <>
      <Range name="Hue" startValue={0} min={0} max={360} callMe={gradientValues} />
      <Range name="Saturation" startValue={100} min={0} max={100} callMe={gradientValues} />
      <Range name="Steps" startValue={10} min={5} max={100} callMe={gradientValues} />
      <Gradient hue={hueValue} saturation={saturationValue} number={stepsValue}/>
    </>
  )
}

export default Picker