import { createSlice } from '@reduxjs/toolkit'

const initialState = { tasks: [] }

const todoSlice = createSlice({
	name: 'todo list',
	initialState,
	reducers: {
		addTodo: (state, { payload }) => {
			state.tasks.push(payload)
		},
		removeTodo: (state, { payload }) => {
			state.tasks.splice(payload, 1)
		},
		resetList: () => initialState,
	},
})

export const { addTodo, removeTodo, resetList } = todoSlice.actions

export default todoSlice.reducer
