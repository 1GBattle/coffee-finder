import { AiOutlineHome } from 'react-icons/ai'
import '@/app/styles/BottomNav.module.css'

export default function BottomNav() {
	return (
		<div className='bottom-nav flex justify-between items-center bottom-nav p-1 h-12 sticky top-0 bottom-0 '>
			<AiOutlineHome className='text-3xl' />
		</div>
	)
}
