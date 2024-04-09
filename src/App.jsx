/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import Todo from './components/Todo.jsx'
import TodoForm from './components/TodoForm.jsx'
import useTodoList from './components/hooks/useTodoList.jsx'

const App = () => {
	const { tasks, addTodo, removeTodo, saveEditing } = useTodoList()

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
