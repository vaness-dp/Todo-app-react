import { Plus } from 'lucide-react'
const AddBtn = ({ onClick }) => {
	return (
		<button
			aria-label='Add todo'
			type='button'
			className='form-btn'
			onClick={onClick}
		>
			<Plus color='white' strokeWidth={1.75} />
		</button>
	)
}

export default AddBtn
