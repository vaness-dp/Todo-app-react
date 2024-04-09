/* eslint-disable react/prop-types */
import cn from 'classnames'
import useTodoItem from './hooks/useTodoItem'
import EditButton from './buttons/EditButton'
import RemoveBtn from './buttons/RemoveButton'
import SaveButton from './buttons/SaveButton'

const Todo = ({ title, id, removeTodo, saveEditing }) => {
	const {
		isChecked,
		isEditing,
		value,
		editTitleInputRef,
		toggleChecked,
		handleChange,
		handleBlur,
		handleKeyDown,
		handleSaveKeyDown,
		setIsEditing,
		handleSave,
	} = useTodoItem({ id, title, removeTodo, saveEditing })

	return (
		<div className='todo-wrapper'>
			<label
				className={cn('flex cursor-pointer', {
					'line-through': isChecked,
				})}
			>
				<input
					type='checkbox'
					checked={isChecked}
					onChange={toggleChecked}
					onKeyDown={handleKeyDown}
					className='mr-3'
				/>
				{isEditing ? (
					<input
						type='text'
						ref={editTitleInputRef}
						className='bg-transparent w-80 outline-none border-b-[1px] border-[#9E78CF]'
						value={value}
						onChange={handleChange}
						onKeyDown={handleSaveKeyDown}
						onBlur={handleBlur}
					/>
				) : (
					<p className='text-[#9E78CF]'>{title}</p>
				)}
			</label>
			<div className='flex'>
				{isEditing ? (
					<SaveButton onClick={handleSave} />
				) : (
					<EditButton
						onClick={() => {
							setIsEditing(!isEditing)
						}}
					/>
				)}

				<RemoveBtn
					onClick={() => {
						if (confirm('Are you sure?')) {
							removeTodo(id)
						}
					}}
				/>
			</div>
		</div>
	)
}

export default Todo
