import { createApi } from 'unsplash-js'
import StoreCard from './StoreCard'

async function getPhotos() {
	const unsplash = createApi({
		accessKey: 'RjIuJSEzsl8xpKWLCVcO0hN7DZOfT7nP6WcxducijgE'
	})

	return (await unsplash.photos
		.getRandom({ query: 'coffee shop', count: 24 })
		.then((result) => {
			if (result.errors) {
				throw new Error('error occurred getting random photo')
			}

			return result.response
		})) as any[]
}

async function getData() {
	try {
		const res = await fetch(
			'https://api.foursquare.com/v3/places/search?query=coffee&limit=24',
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'fsq33N6bRBjXHooh5UNBtA5648khQ2WpFb1Ro7yGUs+2neg='
				}
			}
		)

		const data = (await res.json()) as { results: any[] }

		return data
	} catch (err: any) {
		throw new Error(err)
	}
}

export default async function StoreList() {
	const data = await getData()
	let photos: any[] = await getPhotos()

	return (
		<div className='grid grid-cols-2 gap-4 p-4'>
			{data.results.map((store: any, i: number) => {
				return (
					<StoreCard
						name={store.name}
						address={store.location.address}
						photo={photos[i].urls.full}
					/>
				)
			})}
		</div>
	)
}
