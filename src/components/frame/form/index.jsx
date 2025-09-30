// ** React Imports
import React, { useState } from 'react'

// ** Elements Imports
import Input from 'components/elements/input'
import Button from 'components/elements/button'
import Radio from 'components/elements/radio'

const Form = (props) => {
	// ! props
	const { item, onSubmit } = props

	// ! hooks
	// * state
	const [value, setValue] = useState('')

	// ! handle
	const handleSubmit = () => {
		if (!value) return
		onSubmit({ [item.name]: value })
		setValue('')
	}

	return (
		<div className='bg-[#cfcfcf] w-full h-fit grid gap-4 p-4 mt-6'>
			<h3 className='text-center font-pixel'>{item.label}</h3>
			{item.type === 'input' ? (
				<Input placeholder={item.placeholder}
					value={value}
					onChange={e => setValue(e.target.value)} />
			) : item.type === 'radio' ?
				<Radio options={item.options}
					value={value}
					onChange={setValue} />
				: null
			}
			<Button onClick={handleSubmit}>Kirim</Button>
		</div>
	)
}

export default Form
