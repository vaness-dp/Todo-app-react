import { Trash2 } from 'lucide-react'

const RemoveBtn = ({ onClick }) => {
	return (
		<button aria-label='Remove todo' onClick={onClick}>
			<Trash2
				size={20}
				color='#9E78CF'
				strokeWidth={1.75}
				className='hover:stroke-[#643c99] transition-all ease-out'
			/>
		</button>
	)
}

export default RemoveBtn
