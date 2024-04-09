import useTodoForm from './hooks/useTodoForm'
import AddButton from './buttons/AddButton'
// eslint-disable-next-line react/prop-types
const TodoForm = ({ addTodo }) => {
	const { inputValue, inputRef, handleSubmit, handleChange } =
		useTodoForm(addTodo)

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
