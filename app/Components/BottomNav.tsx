import { AiOutlineHome } from 'react-icons/ai'
import '@/app/styles/BottomNav.module.css'

export default function BottomNav() {
	return (
		<div className='bottom-nav flex justify-center items-center bottom-nav p-1 h-1/4 sticky top-0 bottom-0 bg-slate-400'>
			<div className='icons-container flex justify-between items-center w-10/12'>
				<AiOutlineHome className='text-4xl' />
				<AiOutlineHome className='text-4xl' />
				<AiOutlineHome className='text-4xl' />
			</div>
		</div>
	)
}
