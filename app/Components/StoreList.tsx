import StoreCard from './StoreCard'
import { AiOutlineMenuUnfold } from 'react-icons/ai'

async function getData() {
	try {
		const res = await fetch(
			'https://api.foursquare.com/v3/places/search?query=coffee',
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'fsq33N6bRBjXHooh5UNBtA5648khQ2WpFb1Ro7yGUs+2neg='
				}
			}
		)

		return res.json()
	} catch (err: any) {
		throw new Error(err)
	}
}

export default async function StoreList() {
	const data = await getData()

	console.log('data', data)

	const stores = [
		{
			name: 'Store 1',
			address: 'Address 1'
		},
		{
			name: 'Store 2',
			address: 'Address 2'
		},
		{
			name: 'Store 3',
			address: 'Address 3'
		},
		{
			name: 'Store 1',
			address: 'Address 1'
		},
		{
			name: 'Store 2',
			address: 'Address 2'
		},
		{
			name: 'Store 3',
			address: 'Address 3'
		}
	]

	return (
		<div className='grid grid-cols-2 gap-4 p-4'>
			{stores.map((store) => (
				<StoreCard />
			))}
		</div>
	)
}
