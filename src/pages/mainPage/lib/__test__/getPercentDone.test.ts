import { describe, expect } from 'vitest';
import { getPercentDone } from '../getPercentDone.ts';

describe('Подсчёт процентов выполнения getPercentDone', () => {
	test('Валидные значения', () => {
		expect(getPercentDone(10, 10)).toBe(0);
		expect(getPercentDone(10, 5)).toBe(50);
		expect(getPercentDone(10, 2)).toBe(80);
		expect(getPercentDone(10, 0)).toBe(100);
		expect(getPercentDone(9, 6)).toBe(34);
	});

	test('Не валидные значения', () => {
		expect(getPercentDone(10, -1)).toBe(90);
		expect(getPercentDone(-10, 2)).toBe(80);
		expect(getPercentDone(-10, -1)).toBe(90);
	});
});
