import { useEffect, useRef, useState } from 'react'
import AddButton from './buttons/AddButton'
// eslint-disable-next-line react/prop-types
const TodoForm = ({ addTodo }) => {
	const [inputValue, setInputValue] = useState('')
	const inputRef = useRef(null)

	useEffect(() => {
		inputRef.current.focus()
	}, [])

	const handleSubmit = e => {
		e.preventDefault()
		addTodo(inputValue)
		setInputValue('')
	}

	const handleChange = e => {
		setInputValue(e.target.value)
	}

	return (
		<form className='flex justify-between mb-8' onSubmit={handleSubmit}>
			<input
				className='form-input'
				type='text'
				value={inputValue}
				onChange={handleChange}
				placeholder='Add a new task'
				ref={inputRef}
			/>
			<AddButton onClick={handleSubmit} />
		</form>
	)
}

export default TodoForm
