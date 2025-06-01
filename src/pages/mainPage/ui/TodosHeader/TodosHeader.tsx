import { type FC, type KeyboardEvent, type ChangeEvent, useState } from 'react';
import { Space, Button, Input, Flex, Typography } from 'antd';

import { TODOS_TEXT } from '../../config';

import styles from './TodosHeader.module.css';

interface ITodosHeader {
	addTodo: (value: string) => void;
}

const TodosHeader: FC<ITodosHeader> = ({ addTodo }) => {
	const [value, setValue] = useState<string>('');

	const [isError, setIsError] = useState<boolean>(false);

	const [errorMessage, setErrorMessage] = useState<string>('');

	/**
	 * Обрабатывает изменение в инпуте.
	 * @param {ChangeEvent<HTMLInputElement>} event
	 * returns {Void}
	 * */
	const handleChange = ({
		target: { value },
	}: ChangeEvent<HTMLInputElement>): void => {
		setValue(value);

		setIsError(false);
	};

	/**
	 * Сохранение текущей задачи.
	 * returns {Void}
	 * */
	const saveTodo = (): void => {
		if (!value) {
			setErrorMessage(TODOS_TEXT.errorEmpty);

			setIsError(true);

			return;
		}

		addTodo(value);

		setValue('');

		setErrorMessage('');

		setIsError(false);
	};

	/**
	 * Сохранение по нажтию на клавишу Enter.
	 * @param {KeyboardEvent<HTMLInputElement>} event
	 * returns {Void}
	 * */
	const handlePressEnter = ({
		key,
	}: KeyboardEvent<HTMLInputElement>): void => {
		if (key !== 'Enter') return;

		saveTodo();
	};

	return (
		<Flex vertical>
			<Space.Compact className={styles.inputContainer}>
				<Input
					placeholder={TODOS_TEXT.whatNeedsDone}
					value={value}
					onChange={handleChange}
					onKeyUp={handlePressEnter}
					status={isError ? 'error' : undefined}
					className={styles.input}
				/>
				<Button
					disabled={!value}
					onClick={saveTodo}
					type={'primary'}
					size={'large'}
				>
					{TODOS_TEXT.saveButton}
				</Button>
			</Space.Compact>
			{isError && (
				<Typography.Text type={'danger'}>
					{errorMessage ?? ''}
				</Typography.Text>
			)}
		</Flex>
	);
};

export default TodosHeader;
