import { useReducer } from 'react';
import { todosReducer } from './todos.reducer.ts';
import { ACTIONS } from '../config';

const initialState = {
	todoList: {},
};

export const useTodos = () => {
	const [{ todoList }, dispatch] = useReducer(todosReducer, initialState);

	return {
		todoList,
		methods: {
			addTodo: (value: string) => {
				dispatch({
					type: ACTIONS.ADD_TODO,
					payload: value,
				});
			},
			removeTodo: (id: string) => {
				dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
			},
			clearCompletedTodo: () => {
				dispatch({ type: ACTIONS.CLEAR_COMPLETED_TODO });
			},
			completeTodo: (id: string) => {
				dispatch({ type: ACTIONS.COMPLETE_TODO, payload: id });
			},
		},
	};
};
