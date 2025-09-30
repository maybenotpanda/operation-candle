// ** React Imports
import React, { useState } from 'react'

// ** Utils Imports
import { Each } from 'config/utils/each'

// ** Styles Imports
import { HiddenRadio, PixelRadio, RadioText } from './styles'

const Radio = (props) => {
  // ! props
  const { options = [], value: propValue, onChange } = props

  const [choice, setChoice] = useState(propValue || '')

  const handleChange = (val) => {
    setChoice(val)
    if (onChange) onChange(val)
  }

  return (
    <div className='grid grid-cols-2 gap-4'>
      <Each of={options} render={item =>
        <label className='font-pixel flex items-center gap-3 cursor-pointer select-none'>
          <HiddenRadio
            type="radio"
            name="pilih"
            value={item.value}
            checked={choice === item.value}
            onChange={() => handleChange(item.value)}
          />
          <PixelRadio />
          <RadioText>{item.label}</RadioText>
        </label>
      } />
    </div>
  )
}

export default Radio