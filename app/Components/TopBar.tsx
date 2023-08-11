export default function TopBar() {
	return (
		<div className='flex justify-center  h-12 bg-sky-500 p-1 text-white text-xl'>
			<input
				className='p-1 text-black rounded-md border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500'
				placeholder='City'
			/>
		</div>
	)
}
