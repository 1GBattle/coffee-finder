import StoreCard from './StoreCard'
import { createApi } from 'unsplash-js'

async function getData() {
	try {
		const res = await fetch(
			'https://api.foursquare.com/v3/places/search?query=coffee&limit=25',
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'fsq33N6bRBjXHooh5UNBtA5648khQ2WpFb1Ro7yGUs+2neg='
				}
			}
		)

		const data = (await res.json()) as { results: any[] }

		return { data }
	} catch (err: any) {
		throw new Error(err)
	}
}

export default async function StoreList() {
	const { data } = await getData()

	return (
		<div className='grid grid-cols-2 gap-4 p-4'>
			{data.results.map((store: any) => {
				return <StoreCard name={store.name} address={store.location.address} />
			})}
		</div>
	)
}
