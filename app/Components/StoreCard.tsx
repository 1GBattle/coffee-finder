import '@/app/styles/StoreCard.module.css'

export default function StoreCard() {
	return (
		<div className='store-card cursor-pointer rounded shadow-lg bg-white h-60'>
			<div className='p-12 m-1 bg-sky-500 rounded-md h-3/5'></div>

			<div className='flex items-start p-1  justify-center flex-col'>
				<div className='text-black text-md'>Store Name</div>
				<div className='text-black text-md'>Store Address</div>
			</div>
		</div>
	)
}
