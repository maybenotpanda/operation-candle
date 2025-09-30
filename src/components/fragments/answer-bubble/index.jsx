// ** React Imports
import React from 'react'

// ** Elements Imports
import BubbleChat from 'components/elements/bubble-chat'

// ** Assets Imports
import image from 'assets/images/women.png'

const AnswerBubble = (props) => {
  // ! props
  const { phase, data, done } = props

  return (
    <div className='grid gap-2 max-w-[45%] text-right'>
      {phase === "answer" && (
        <BubbleChat key={`a-${data.ids}`} text={data.answer} delay={100} onDone={done} variant="answer" />
      )}
      <img src={image} alt="women answer" className='w-20 ml-auto' />
    </div>
  )
}

export default AnswerBubble