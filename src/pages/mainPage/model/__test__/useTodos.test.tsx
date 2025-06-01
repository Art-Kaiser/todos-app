import {
	beforeAll,
	describe,
	expect,
	test,
	vi,
	type MockInstance,
	afterAll,
	afterEach,
} from 'vitest';
import { useTodos } from '../useTodos.tsx';
import { renderHook, act } from '@testing-library/react';

type FakeId = `${string}-${string}-${string}-${string}-${string}`;

describe('useTodos', () => {
	let mockedCrypto: MockInstance<() => FakeId>;
	let count = 0;

	/**
	 * Мок реализации метода randomUUID.
	 * */
	beforeAll(() => {
		mockedCrypto = vi
			.spyOn(crypto, 'randomUUID')
			.mockImplementation(() => `0-0-0-0-${String(++count)}`);
	});

	afterEach(() => {
		count = 0;
	});

	afterAll(() => {
		mockedCrypto.mockReset();
	});

	test('Добавление задач в todoList', () => {
		const { result } = renderHook(() => useTodos());

		/**
		 * Добавление задачи
		 * */
		act(() => {
			result.current.methods.addTodo('todo №1');
		});

		expect(result.current.todoList).toMatchObject({
			'0-0-0-0-1': { title: 'todo №1', completed: false },
		});
	});

	test('Удаление одной задачи из списка', () => {
		const { result } = renderHook(() => useTodos());

		/**
		 * Добавление задач
		 * */
		act(() => {
			result.current.methods.addTodo('todo №1');
			result.current.methods.addTodo('todo №2');
		});

		/**
		 * Удаление задачи
		 * */
		act(() => {
			result.current.methods.removeTodo('0-0-0-0-2');
		});

		expect(result.current.todoList).toStrictEqual({
			'0-0-0-0-1': { title: 'todo №1', completed: false },
		});
	});

	test('Удаление всех завершённых задач', () => {
		const { result } = renderHook(() => useTodos());

		/**
		 * Добавление задач
		 * */
		act(() => {
			result.current.methods.addTodo('todo №1');
			result.current.methods.addTodo('todo №2');
			result.current.methods.addTodo('todo №3');
		});

		/**
		 * Отметка о выполнении
		 **/
		act(() => {
			result.current.methods.completeTodo('0-0-0-0-1');
			result.current.methods.completeTodo('0-0-0-0-3');
		});

		/**
		 * Удаление всех выполненных.
		 * */
		act(() => {
			result.current.methods.clearCompletedTodo();
		});

		expect(result.current.todoList).toStrictEqual({
			'0-0-0-0-2': { title: 'todo №2', completed: false },
		});
	});

	test('Поменять статус задачи', () => {
		const { result } = renderHook(() => useTodos());

		/**
		 * Добавление задач
		 * */
		act(() => {
			result.current.methods.addTodo('todo №1');
			result.current.methods.addTodo('todo №2');
		});

		/**
		 * Отметка о выполнении
		 * */
		act(() => {
			result.current.methods.completeTodo('0-0-0-0-1');
		});

		expect(result.current.todoList).toMatchObject({
			'0-0-0-0-1': { title: 'todo №1', completed: true },
		});
	});
});
