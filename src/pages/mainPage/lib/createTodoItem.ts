import { generateTodoId } from './generateTodoId.ts';
import type { TodoTuple } from '../model';

/**
 * Создаёт задачу с уникальным идентификатором.
 * @param {string} value - Текстовое значение.
 * @returns {TodoTuple}
 * */
export const createTodoItem = (value: string = ''): TodoTuple => {
	return [
		generateTodoId(),
		{
			title: value,
			completed: false,
		},
	];
};
