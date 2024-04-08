import { FilePenLine } from 'lucide-react'

const EditButton = ({ onClick }) => {
	return (
		<button aria-label='Edit todo' className='mr-2 pt-[1px]' onClick={onClick}>
			<FilePenLine
				size={20}
				color='#9E78CF'
				strokeWidth={1.75}
				className='hover:stroke-[#643c99] transition-all ease-out'
			/>
		</button>
	)
}

export default EditButton
