// ** React Imports
import React, { useRef } from 'react'

// ** Styles Imports
import { StyledButton } from './styles'

// ** Assets Imports
import sound from 'assets/music/click.mp3'

const Button = ({ children, onClick, ...props }) => {
  const clickSoundRef = useRef(null)

  const handleClick = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0
      clickSoundRef.current.play().catch(err => {
        console.warn("Gagal play audio:", err)
      })
    }

    if (typeof onClick === 'function') {
      onClick()
    }
  }
  return (
    <StyledButton className='font-pixel text-white relative cursor-pointer px-5 py-3 w-fit justify-self-end' onClick={handleClick} {...props}>
      <span>
        {children}
      </span>
      <audio ref={clickSoundRef} src={sound} preload="auto" />
    </StyledButton>
  )
}

export default Button

