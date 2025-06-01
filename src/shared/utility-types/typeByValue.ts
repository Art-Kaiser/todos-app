/**
 * Получение объединённого типа по основанию значений свойств объекта.
 * */
export type TypeByValue<O extends object> = O[keyof O];
