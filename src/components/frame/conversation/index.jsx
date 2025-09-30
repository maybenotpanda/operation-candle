// ** React Imports
import React from 'react'

// ** Fragments
import AnswerBubble from 'components/fragments/answer-bubble'
import QuestionBubble from 'components/fragments/question-bubble'

const Conversation = (props) => {
	// ! props
	const { data, phase, setPhase, onDone } = props

	// ! handle
	const handleQuestionDone = () => {
		setTimeout(() => setPhase('answer'), 1000)
	}

	const handleAnswerDone = () => {
		setTimeout(() => {
			if (onDone) {
				onDone()
			}
			setPhase('question')
		}, 1500)
	}

	return (
		<div className="flex justify-between items-end">
			<QuestionBubble phase={phase} data={data} done={handleQuestionDone} />
			<AnswerBubble phase={phase} data={data} done={handleAnswerDone} />
		</div>
	)
}

export default Conversation
