import '@/app/styles/StoreCard.module.css'

export default function StoreCard() {
	return (
		<div className='store-card cursor-pointer rounded shadow-lg bg-white h-64'>
			<div className='p-12 m-1 bg-sky-500 rounded-md h-3/5'></div>

			<div className='w-full flex gap-1 p-1  justify-center flex-col'>
				<div className='text-black text-md font-semibold italic text-center'>
					Store Name
				</div>
				<div className='text-black text-md'>Store Address</div>
				<div>Store Rating</div>
			</div>
		</div>
	)
}
