import { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useDispatch } from 'react-redux'

import AddIcon from '@material-ui/icons/Add'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'

import List from './components/TodoList'
import { addTodo, resetList } from './redux/todoSlice'

function App() {
	const dispatch = useDispatch()

	const [todoInput, setTodoInput] = useState('')

	const [showInput, setShowInput] = useState(false)

	const handleSubmit = (event) => {
		dispatch(addTodo(todoInput))
		setShowInput(false)
		setTodoInput('')
		event.preventDefault()
	}

	return (
		<div className='App'>
			<Grid container justifyContent='center'>
				<Grid item xs={5}>
					<Typography variant='h2' align='center'>
						Cules Todo list
					</Typography>

					<List />

					<Grid container justifyContent='space-between'>
						<Grid item>
							<IconButton onClick={() => setShowInput(true)}>
								<AddIcon />{' '}
							</IconButton>
						</Grid>
						<Grid item>
							<IconButton onClick={() => dispatch(resetList())}>
								<RotateLeftIcon />{' '}
							</IconButton>
						</Grid>
					</Grid>

					{showInput && (
						<form onSubmit={handleSubmit}>
							<TextField
								value={todoInput}
								onChange={(event) => setTodoInput(event.target.value)}
								fullWidth
							/>
							<Button
								type='submit'
								variant='contained'
								color='primary'
								style={{ display: 'block', margin: '1rem 0' }}
							>
								Add
							</Button>
						</form>
					)}
				</Grid>
			</Grid>
		</div>
	)
}

export default App
