import StoreCard from './StoreCard'

export default function StoreList() {
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
		<div className='grid grid-cols-2 gap-1'>
			{stores.map((store) => (
				<StoreCard />
			))}
		</div>
	)
}
