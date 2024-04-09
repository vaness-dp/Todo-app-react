import { useEffect, useRef, useState } from 'react'

const useTodoForm = addTodo => {
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

	return {
		inputValue,
		inputRef,
		handleSubmit,
		handleChange,
	}
}

export default useTodoForm
