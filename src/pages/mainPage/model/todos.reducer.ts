import type { IActions, IState } from './todos.interfaces.ts';
import type { TodoData } from './todo.types.ts';
import { ACTIONS } from '../config';
import { createTodoItem } from '../lib';

export const todosReducer = (
	state: IState<TodoData>,
	{ type, payload }: IActions
) => {
	switch (type) {
		case ACTIONS.ADD_TODO:
			const [key, value] = createTodoItem(payload);

			return {
				...state,
				todoList: {
					...state.todoList,
					[key]: value,
				},
			};
		case ACTIONS.DELETE_TODO: {
			if (!payload) return { ...state };

			const copyTodoList = { ...state.todoList };

			delete copyTodoList[payload];

			return {
				...state,
				todoList: copyTodoList,
			};
		}
		case ACTIONS.CLEAR_COMPLETED_TODO: {
			const copyTodoList = { ...state.todoList };

			for (const key in copyTodoList) {
				if (copyTodoList[key].completed) {
					delete copyTodoList[key];
				}
			}

			return {
				...state,
				todoList: copyTodoList,
			};
		}
		case ACTIONS.COMPLETE_TODO: {
			if (!payload) {
				return { ...state };
			}

			return {
				...state,
				todoList: {
					...state.todoList,
					[payload]: {
						...state.todoList[payload],
						completed: !state.todoList[payload].completed,
					},
				},
			};
		}
		default:
			return state;
	}
};
