// ** React Imports
import React from 'react'

// ** Styles Imports
import { PixelInput } from './styles'

const Input = ({ label, ...props }) => {
	return (
		<label className="flex flex-col gap-2">
			<PixelInput className="font-pixel" {...props} />
		</label>
	)
}

export default Input
