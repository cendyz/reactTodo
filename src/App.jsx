import { useState } from 'react'
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { nanoid } from 'nanoid'

const setLocalStorage = items => {
	localStorage.setItem('list', JSON.stringify(items))
}

const getLocalStorage = () => {
	let list = localStorage.getItem('list')

	if (list) {
		list = JSON.parse(localStorage.getItem('list'))
	} else {
		list = []
	}
	return list
}

const defaultList = JSON.parse(localStorage.getItem('list') || '')

const App = () => {
	getLocalStorage()
	const [item, setItem] = useState('')
	const [tasks, setTask] = useState(defaultList)
	const [complete, setComplete] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		if (!item) return
		const newItem = {
			id: nanoid(),
			name: item,
			completed: false,
		}

		setTask([...tasks, newItem])
		setLocalStorage([...tasks, newItem])
		setItem('')
	}

	const handleComplete = id => {
		const newItems = tasks.map(task => {
			if (task.id === id) {
				return { ...task, completed: !task.completed }
			}
			return task
		})
		setTask(newItems)
		setLocalStorage(newItems)
	}

	const handleDelete = id => {
		const updatedList = tasks.filter(item => item.id !== id)
		setTask(updatedList)
		setLocalStorage(updatedList)
	}

	return (
		<section className='container'>
			<form className='form' onSubmit={handleSubmit}>
				<input
					type='text'
					className='input'
					value={item}
					onChange={e => setItem(e.target.value)}
				/>
				<button type='submit' className='btn'>
					Add quest
				</button>
			</form>
			<div className='items'>
				{tasks.map(item => {
					const { completed, name, id } = item
					return (
						<div className='item-box' key={nanoid()}>
							<div className='left-box'>
								<input
									type='checkbox'
									className='check'
									checked={completed}
									onChange={() => handleComplete(id)}
								/>
								<p
									className='quest'
									style={{
										textDecoration: item.completed && 'line-through',
									}}>
									{name}
								</p>
							</div>
							<button
								type='button'
								className='delete-btn'
								onClick={() => handleDelete(id)}>
								Delete
							</button>
						</div>
					)
				})}
			</div>
		</section>
	)
}
export default App
