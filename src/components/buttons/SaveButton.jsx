import { FileCheck } from 'lucide-react'

const SaveButton = ({ onClick }) => {
	return (
		<button aria-label='Save todo' className='mr-2 pt-[1px]' onClick={onClick}>
			<FileCheck
				size={20}
				color='#9E78CF'
				strokeWidth={1.75}
				className='hover:stroke-[#643c99] transition-all ease-out'
			/>
		</button>
	)
}

export default SaveButton
