import { ACTIONS } from '../config';
import type { TypeByValue } from '../../../shared';

export interface IActions {
	type: TypeByValue<typeof ACTIONS>;
	payload?: string;
}

export interface ITodo {
	title: string;
	completed: boolean;
}

export interface IState<T> {
	todoList: T;
}
