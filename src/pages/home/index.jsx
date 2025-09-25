// ** React Imports
import React from 'react'

// ** Frame Imports
import flower1 from 'assets/images/flower1.png'
import flower2 from 'assets/images/flower2.png'
// import Frame from 'components/frame/home'

const HomePage = () => {
	return (
		<div className="h-screen flex justify-center items-center bg-[#E1E2E2]">
			<div className="grid gap-4 px-5">
				<h4 className="text-center text-[#545454]">THE WEDDING OF</h4>
				<h1 className="text-center text-header text-[#865D3D]">MW & Reza</h1>
				<h4 className="text-center text-[#545454]">Lokasi Acara : </h4>
				<div className="grid gap-5">
					<button className="bg-[#0D2C46] text-white py-2 hover:bg-[#0D2C46]">Lokasi Akad</button>
					<button className="bg-[#0D2C46] text-white py-2 hover:bg-[#0D2C46]">Lokasi Resepsi</button>
					<button className="bg-[#0D2C46] text-white py-2 hover:bg-[#0D2C46]">Lokasi Unduh Mantu</button>
				</div>
				   <div className="absolute bottom-0 left-0  image-left">
        <img className="w-36 bg-cover" src={flower1} alt="flower 1" />
      </div>
      <div className="absolute bottom-0 right-0 image-right">
        <img className="w-36 bg-cover" src={flower2} alt="Flower 2" />
      </div>
			</div>
		</div>
	)
}

export default HomePage
