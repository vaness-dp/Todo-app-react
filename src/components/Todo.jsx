/* eslint-disable react/prop-types */
import cn from 'classnames'
import { useEffect, useRef, useState } from 'react'
import EditButton from './buttons/EditButton'
import RemoveBtn from './buttons/RemoveButton'
import SaveButton from './buttons/SaveButton'

const Todo = ({ title, id, removeTodo, saveEditing }) => {
	const [isChecked, setIsChecked] = useState(false)
	const [isEditing, setIsEditing] = useState(false)
	const [value, setValue] = useState(title)
	const editTitleInputRef = useRef(null)

	const handleSave = () => {
		saveEditing(id, value)
		setIsEditing(false)
	}

	const handleChange = e => {
		setValue(e.target.value)
	}

	const handleBlur = () => {
		if (value.trim() === '') {
			removeTodo(id)
		}
	}

	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			toggleChecked()
		}
	}

	const handleSaveKeyDown = e => {
		if (e.key === 'Enter') {
			handleSave()
		}
	}

	const toggleChecked = () => {
		setIsChecked(prev => !prev)
		setTimeout(() => {
			removeTodo(id)
		}, 1000)
	}

	useEffect(() => {
		if (isEditing && editTitleInputRef.current) {
			editTitleInputRef.current.focus()
		}
	}, [isEditing])

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
