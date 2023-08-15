'use client'
import { AiOutlineMenuUnfold, AiOutlineSearch } from 'react-icons/ai'
import Image from 'next/image'

export default function TopBar() {
	return (
		<div className='flex justify-start flex-col gap-2  p-4 text-white text-xl'>
			<div className='text-black flex justify-between'>
				<AiOutlineMenuUnfold className='text-2xl' />

				{/* <div className='flex justify-between gap-5'>
					<Image alt='profile picture' src='/logo.png' width={50} height={50} />
				</div> */}
			</div>

			<div className='mb-8'>
				<h1 className='text-black text-left font text-5xl'>Discover</h1>
				<p className='text-black text-base ml-4 mt-2'>
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
