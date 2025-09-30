// ** React Imports
import React from 'react'

// ** Elements Imports
import BubbleChat from 'components/elements/bubble-chat'

// ** Assets Imports
import image from 'assets/images/men.png'

const QuestionBubble = (props) => {
	// ! props
	const { phase, data, done } = props

	return (
		<div className="grid gap-2 max-w-[45%]">
			{phase === 'question' && (
				<BubbleChat key={`q-${data.ids}`} text={data.question} delay={100} onDone={done} />
			)}
			<img src={image} alt="men questions" className="w-20" />
		</div>
	)
}

export default QuestionBubble
