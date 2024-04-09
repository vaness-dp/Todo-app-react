import { useEffect, useRef, useState } from 'react'

const useTodoItem = ({ title, id, removeTodo, saveEditing }) => {
	const [isChecked, setIsChecked] = useState(false)
	const [isEditing, setIsEditing] = useState(false)
	const [value, setValue] = useState(title)
	const editTitleInputRef = useRef(null)

	const handleSave = () => {
		value.trim() === ''
			? removeTodo(id)
			: (saveEditing(id, value), setIsEditing(false))
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
	}

	useEffect(() => {
		if (isEditing && editTitleInputRef.current) {
			editTitleInputRef.current.focus()
		}
	}, [isEditing])

	return {
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
	}
}

export default useTodoItem
