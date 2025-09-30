// ** React Imports
import React from 'react'

// ** Assets Imports
import background from 'assets/images/cover.jpg'
import Button from 'components/elements/button'

const Cover = ({ setCover }) => {
	return (
		<div
			className="bg-fixed bg-center bg-cover py-2 overflow-hidden h-screen w-screen flex justify-center items-center gap-4"
			style={{ backgroundImage: `url(${background})` }}>
			<div className="container px-4 lg:px-0 grid">
				<div className="bg-[#cfcfcf] h-fit grid py-11 px-4 gap-4 mt-6 justify-items-center content-center">
					<h3 className="text-center font-pixel">Ayok bermain</h3>
					<div>
						<Button onClick={() => setCover(false)}>Start</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cover
