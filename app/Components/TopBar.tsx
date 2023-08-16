'use client'

export default function TopBar() {
	return (
		<div className='flex justify-start flex-col gap-2 p-2 text-white text-xl'>
			<div className='mb-4'>
				<h1 className='text-black text-left font text-5xl'>Discover</h1>
				<p className='text-black text-base ml-10 mt-2'>
					Coffee Shops in <span>City Name</span>
				</p>
			</div>

			<div>
				<input
					className=' text-black placeholder:italic w-full h-12 rounded p-1'
					placeholder='City'
				/>
			</div>
		</div>
	)
}
