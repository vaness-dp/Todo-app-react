/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from 'react'
import Todo from './components/Todo.jsx'
import TodoForm from './components/TodoForm.jsx'

const App = () => {
	const [tasks, setTasks] = useState([])

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

	return (
		<div className='app'>
			<h1 className='text-2xl font-bold text-center mb-10'>Todo App</h1>
			<TodoForm addTodo={addTodo} />
			{tasks.map(task => (
				<Todo
					key={task.id}
					id={task.id}
					title={task.title}
					removeTodo={removeTodo}
					saveEditing={saveEditing}
				/>
			))}
		</div>
	)
}

export default App
