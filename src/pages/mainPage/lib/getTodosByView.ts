import { SEGMENTS, type SegmentType } from '../config';
import type { ITodo, TodoData } from '../model';

/**
 * Получаем задачи по виду.
 * @param {SegmentType} view - Вид.
 * @param {TodoData} todoList - Задачи.
 * @returns {[string, ITodo][]} - Массив кортежей.
 * */
export const getTodosByView = (
	view: SegmentType,
	todoList: TodoData
): [string, ITodo][] => {
	const prepareTodos = Object.entries<ITodo>(todoList);

	if (view !== SEGMENTS.ALL) {
		return prepareTodos.filter(([_, { completed }]) =>
			view === SEGMENTS.ACTIVE ? !completed : completed
		);
	}

	return prepareTodos;
};
