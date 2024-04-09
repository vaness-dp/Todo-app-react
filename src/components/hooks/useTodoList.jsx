import { useState } from 'react'
const useTodoList = () => {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			title: 'Learn JavaScript',
		},
		{
			id: 2,
			title: 'Learn React',
		},
		{
			id: 3,
			title: 'Learn TypeScript',
		},
	])

	const addTodo = title => {
		if (title.trim() !== '') {
			setTasks([
				{
					id: new Date(),
					title: title.trim(),
				},
				...tasks,
			])
		}
	}

	const removeTodo = id => {
		setTasks(tasks.filter(task => task.id !== id))
	}

	const saveEditing = (id, value) => {
		setTasks(
			tasks.map(task =>
				task.id === id
					? {
							...task,
							title: value,
					  }
					: task
			)
		)
	}

	return {
		tasks,
		addTodo,
		removeTodo,
		saveEditing,
	}
}

export default useTodoList
