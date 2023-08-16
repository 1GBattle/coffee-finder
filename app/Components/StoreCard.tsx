import '@/app/styles/StoreCard.module.css'

interface Props {
	name: string
	address: string
}

export default function StoreCard({ name, address }: Props) {
	return (
		<div className='store-card cursor-pointer rounded shadow-lg bg-white h-80'>
			<div className='p-12 m-1 bg-sky-500 rounded-md h-3/5'></div>

			<div className='w-full flex gap-1 p-3 justify-between flex-col h-2/5 '>
				<div className='text-black text-md font-semibold italic text-center'>
					{name}
				</div>
				<div className='text-black text-md text-center'>{address}</div>
				<div>Store Rating</div>
			</div>
		</div>
	)
}
