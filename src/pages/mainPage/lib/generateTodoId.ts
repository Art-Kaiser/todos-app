/**
 * Генерирует уникальный идентификатор задачи.
 * @returns {string} Уникальный идентификатор.
 * */
export const generateTodoId = (): string => crypto.randomUUID();
