import '@/app/styles/StoreCard.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { createApi } from 'unsplash-js'

interface Props {
	name: string
	address: string
	photo: string
}

export default async function StoreCard({ name, address, photo }: Props) {
	return (
		<Link
			href={'/'}
			className='store-card cursor-pointer rounded shadow-lg bg-white h-64'>
			<div className='flex justify-center p-0 w-full h-3/5 rounded'>
				{photo && (
					<Image
						className='w-full h-full rounded'
						alt='Coffee Store'
						src={photo}
						width={150}
						height={250}
					/>
				)}
			</div>

			<div className='w-full flex gap-1 p-3 justify-around flex-col h-2/5 '>
				<div className='text-black text-md font-semibold italic text-center'>
					{name}
				</div>
				<div className='text-black text-md text-center'>{address}</div>
			</div>
		</Link>
	)
}
