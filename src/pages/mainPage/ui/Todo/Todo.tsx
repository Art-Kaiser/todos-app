import { type FC, type JSX } from 'react';
import cn from 'classnames';
import { Button, Flex, Typography } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

import styles from './Todo.module.css';

interface ITodo {
	id: string;
	title: string;
	completed: boolean;
	removeTodo: (id: string) => void;
	onClick: (id: string) => void;
}

const Todo: FC<ITodo> = ({ id, title, completed, removeTodo, onClick }) => {
	/**
	 * Возвращает иконку галочки или null
	 * @param {boolean} isCompleted - Завершено?
	 * @returns {JSX.Element | null}
	 * */
	const getIconForCompleted = (isCompleted: boolean): JSX.Element | null =>
		isCompleted ? <CheckOutlined className={styles.checkIcon} /> : null;

	return (
		<Flex
			justify={'space-between'}
			align={'center'}
			className={styles.todo}
		>
			<Flex align={'center'} gap={'large'}>
				<Button
					onClick={() => onClick(id)}
					shape='circle'
					icon={getIconForCompleted(completed)}
				/>
				<Typography.Text
					onClick={() => onClick(id)}
					className={cn(styles.todoText, {
						[styles.todoCompleted]: completed,
					})}
				>
					{title}
				</Typography.Text>
			</Flex>
			<Flex>
				<Button
					size={'small'}
					onClick={() => removeTodo(id)}
					icon={<CloseOutlined className={styles.closeIcon} />}
				/>
			</Flex>
		</Flex>
	);
};

export default Todo;
