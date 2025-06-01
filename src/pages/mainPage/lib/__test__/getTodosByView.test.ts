import { describe, expect } from 'vitest';
import { getTodosByView } from '../getTodosByView.ts';

describe('Фильтрация отображения в getTodosByView', () => {
	const mockTodoList = {
		'0': { title: 'todo №1', completed: false },
		'1': { title: 'todo №2', completed: true },
		'2': { title: 'todo №3', completed: false },
	};

	const mockTodoActive = Object.entries({
		'0': { title: 'todo №1', completed: false },
		'2': { title: 'todo №3', completed: false },
	});

	const mockTodoListCompleted = Object.entries({
		'1': { title: 'todo №2', completed: true },
	});

	test('Фильтрация по сегментам', () => {
		expect(getTodosByView('all', mockTodoList)).toStrictEqual(
			Object.entries(mockTodoList)
		);
		expect(getTodosByView('active', mockTodoList)).toStrictEqual(
			mockTodoActive
		);
		expect(getTodosByView('completed', mockTodoList)).toStrictEqual(
			mockTodoListCompleted
		);
	});
});
