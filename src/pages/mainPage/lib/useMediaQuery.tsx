import { useEffect, useRef, useState } from 'react';

/**
 * Отслеживает изменения размеров окна через медиазапросы.
 * @param {string} query - Медиазапрос.
 * @return {boolean} - Достигнут ли указанный размер окна.
 * */
export const useMediaQuery = (query: string): boolean => {
	const [isMatchesQuery, setIsMatchesQuery] = useState(false);

	const mediaQueryList = useRef(window.matchMedia(query));

	useEffect(() => {
		setIsMatchesQuery(mediaQueryList.current.matches);

		const handler = (event: MediaQueryListEvent) => {
			setIsMatchesQuery(event.matches);
		};

		mediaQueryList.current.addEventListener('change', handler);

		return () => {
			mediaQueryList.current.removeEventListener('change', handler);
		};
	}, [query]);

	return isMatchesQuery;
};
