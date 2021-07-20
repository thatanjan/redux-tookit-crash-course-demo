import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = { tasks: [], loading: false }

export const asyncTodo = createAsyncThunk('todo/asyncTodo', async (todo) => {
	const data = await new Promise((resolve) => {
		setTimeout(() => {
			resolve(todo)
		}, 5000)
	})

	return data
})

const todoSlice = createSlice({
	name: 'todo list',
	initialState,
	reducers: {
		addTodo: (state, { payload, type }) => {
			console.log(type)
			state.tasks.push(payload)
		},
		removeTodo: (state, { payload }) => {
			state.tasks.splice(payload, 1)
		},
		resetList: () => initialState,
	},
	extraReducers: (builder) => {
		builder.addCase(asyncTodo.pending, (state) => {
			state.loading = true
		})
		builder.addCase(asyncTodo.fulfilled, (state, { payload }) => {
			state.loading = false
			state.tasks.push(payload)
		})
	},
})

export const { addTodo, removeTodo, resetList } = todoSlice.actions

export default todoSlice.reducer
