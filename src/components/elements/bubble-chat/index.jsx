// ** React Imports
import React, { useEffect, useState } from 'react'

// ** Styles Imports
import { PixelBubble } from './styles'

const BubbleChat = ({ text, delay = 50, onDone, variant = 'question' }) => {
	// ! hooks
	// * state
	const [displayed, setDisplayed] = useState('')

	// * effect
	useEffect(() => {
		if (!text) {
			setDisplayed('')
			if (onDone) onDone()
			return
		}

		let i = 0
		let doneCalled = false
		const interval = setInterval(() => {
			setDisplayed(text.slice(0, i + 1))
			i++
			if (i === text.length && !doneCalled) {
				doneCalled = true
				clearInterval(interval)
				if (onDone) onDone()
			}
		}, delay)

		return () => clearInterval(interval)
	}, [text, delay, onDone])

	return displayed ? (
		<PixelBubble $variant={variant}>
			<span className="font-pixel">{displayed}</span>
		</PixelBubble>
	) : null
}

export default BubbleChat
