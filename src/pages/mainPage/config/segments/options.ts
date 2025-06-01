import { SEGMENTS } from './constants.ts';
import TODOS_TEXT from '../todosText.json';

export const SEGMENT_OPTIONS = [
	{ value: SEGMENTS.ALL, label: TODOS_TEXT.all },
	{ value: SEGMENTS.ACTIVE, label: TODOS_TEXT.active },
	{ value: SEGMENTS.COMPLETED, label: TODOS_TEXT.completed },
];
