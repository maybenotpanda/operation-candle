// ** React Imports
import React, { useState, useEffect } from 'react'

// ** Frame Imports
import Conversation from 'components/frame/conversation'
import Form from 'components/frame/form'

// ** Assets Imports
import data from 'assets/data/conversation.json'
import background from 'assets/images/background.jpg'
import Message from 'components/frame/message'
import Cover from 'components/frame/cover'

const HomePage = () => {
	// ! hooks
	// * state
	const [current, setCurrent] = useState(1)
	const [phase, setPhase] = useState('question')
	const [formData, setFormData] = useState({})
	const [showForm, setShowForm] = useState(false)
	const [gameOver, setGameOver] = useState(false)
	const [timer, setTimer] = useState(60)
	const [cover, setCover] = useState(true)

	const item = data.find((d) => d.ids === current)

	// * effect
	useEffect(() => {
		if (!item?.form?.time || !showForm || gameOver) return

		if (timer <= 0) {
			setGameOver(true)
			return
		}

		const interval = setInterval(() => setTimer((prev) => prev - 1), 1000)
		return () => clearInterval(interval)
	}, [timer, showForm, item, gameOver])

	useEffect(() => {
		const target = new Date('2025-10-01T00:00:00+07:00')

		const checkTime = () => {
			const now = new Date()
			if (now >= target) {
				window.location.href = 'https://operation-candle.duckxpanda.com'
			}
		}

		const interval = setInterval(checkTime, 1000)
		return () => clearInterval(interval)
	}, [])

	const getTextWithName = (text) => {
		if (!text) return ''
		return text.replace(/\$\{name\}/g, formData['name'] || '')
	}

	const items = {
		...item,
		question: getTextWithName(item.question),
		answer: getTextWithName(item.answer)
	}

	const handleNext = (extraData = {}) => {
		if (Object.keys(extraData).length > 0) {
			setFormData((prev) => ({ ...prev, ...extraData }))
			console.log('User Answer:', extraData[item.form.name])
			console.log('Correct Answer:', item.form.correct)
			if (item?.form?.correct && extraData[item.form.name] !== item.form.correct) {
				setGameOver(true)
				return
			}
		}

		const nextItem = data.find((d) => d.ids === current + 1)
		if (nextItem) {
			setCurrent(nextItem.ids)
			setPhase('question')
			setShowForm(false)
			setTimer(60)
		} else {
			setGameOver(true)
			console.log('Conversation finished ✅', formData)
		}
	}

	return cover ? (
		<Cover cover={cover} setCover={setCover} />
	) : (
		<div
			className="bg-fixed bg-center bg-cover py-2 overflow-hidden h-screen w-screen flex justify-center"
			style={{ backgroundImage: `url(${background})` }}>
			<div className="container px-4 lg:px-0 grid">
				{showForm && item?.form?.status && <Form item={item.form} onSubmit={handleNext} />}
				<Conversation
					data={items}
					phase={phase}
					setPhase={setPhase}
					onDone={() => {
						if (item?.form?.status && !showForm) setShowForm(true)
						else if (!item?.form?.status) handleNext()
					}}
				/>
			</div>
			{gameOver && (
				<Message
					onClick={() => {
						setCurrent(1)
						setFormData({})
						setPhase('question')
						setShowForm(false)
						setGameOver(false)
						setTimer(60)
					}}
				/>
			)}
		</div>
	)
}

export default HomePage
