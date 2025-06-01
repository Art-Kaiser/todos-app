import type { ITodo } from './todos.interfaces.ts';

export type TodoData = Record<string, ITodo>;

export type TodoTuple = readonly [string, ITodo];
