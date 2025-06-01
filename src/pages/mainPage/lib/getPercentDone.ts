/**
 * Получает процент выполненных задач.
 * @param {number} allValues - Все значения.
 * @param {number} part - Часть значений для которых считается процент.
 * @returns {number} - Процент выполненнх задач
 * */
export const getPercentDone = (allValues: number, part: number): number => {
	return Math.ceil(
		(100 * (Math.abs(allValues) - Math.abs(part))) / Math.abs(allValues)
	);
};
