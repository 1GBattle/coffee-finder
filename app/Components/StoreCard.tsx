import '@/app/styles/StoreCard.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { createApi } from 'unsplash-js'

interface Props {
	name: string
	address: string
}

async function getPhoto() {
	const unsplash = createApi({
		accessKey: 'RjIuJSEzsl8xpKWLCVcO0hN7DZOfT7nP6WcxducijgE'
	})

	const photo = await unsplash.photos
		.getRandom({ query: 'coffee shop' })
		.then((result) => {
			if (result.errors) {
				throw new Error('error occurred getting random photo')
			}

			return result.response as { urls: { full: string } }
		})

	return photo
}

export default async function StoreCard({ name, address }: Props) {
	const photo = await getPhoto()

	return (
		<Link
			href={'/'}
			className='store-card cursor-pointer rounded shadow-lg bg-white h-80'>
			<div className='flex justify-center p-0 w-full h-3/5 rounded'>
				<Image
					className='w-full h-full'
					alt='Coffee Store'
					src={photo.urls.full}
					width={150}
					height={250}
				/>
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
