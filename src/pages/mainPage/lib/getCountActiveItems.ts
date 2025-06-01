import type { TodoData } from '../model';

/**
 * Возвращает кол-во активных задач
 * @param {TodoData} todos - Задачи.
 * @returns {number}
 * */
export const getCountActiveItems = (todos: TodoData): number => {
	let activeItems = 0;

	for (const key in todos) {
		if (!todos[key].completed) {
			activeItems += 1;
		}
	}
	return activeItems;
};
