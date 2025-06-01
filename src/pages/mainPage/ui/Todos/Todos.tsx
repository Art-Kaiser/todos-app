import { useState, lazy, Suspense } from 'react';
import { List, Flex } from 'antd';
import VirtualList from 'rc-virtual-list';

import { useTodos } from '../../model';

import { TodosFooterSkeleton } from '../TodosFooter/TodosFooter.skeleton.tsx';
import { TodosHeaderSkeleton } from '../TodosHeader/TodosHeader.skeleton.tsx';
import { TodoSkeleton } from '../Todo/Todo.skeleton.tsx';

import { getCountActiveItems, getPercentDone, getTodosByView } from '../../lib';
import { SEGMENTS, type SegmentType } from '../../config';

import styles from './Todos.module.css';

const TodosHeader = lazy(() => import('../TodosHeader/TodosHeader.tsx'));
const Todo = lazy(() => import('../Todo/Todo.tsx'));
const TodosFooter = lazy(() => import('../TodosFooter/TodosFooter.tsx'));

export const Todos = () => {
	const {
		todoList,
		methods: { addTodo, removeTodo, completeTodo, clearCompletedTodo },
	} = useTodos();

	const [view, setView] = useState<SegmentType>(SEGMENTS.ALL);

	const activeItems = getCountActiveItems(todoList);

	return (
		<Flex
			vertical
			align={'center'}
			justify={'center'}
			className={styles.container}
		>
			<List
				bordered
				itemLayout='horizontal'
				size='small'
				className={styles.todosList}
				header={
					<Suspense fallback={<TodosHeaderSkeleton />}>
						<TodosHeader addTodo={addTodo} />
					</Suspense>
				}
				footer={
					<Suspense fallback={<TodosFooterSkeleton />}>
						<TodosFooter
							countNotCompleted={activeItems}
							clearCompletedTodo={clearCompletedTodo}
							changeView={setView}
							percentDone={getPercentDone(
								Object.keys(todoList).length,
								activeItems
							)}
						/>
					</Suspense>
				}
			>
				<VirtualList
					data={getTodosByView(view, todoList)}
					height={300}
					itemHeight={25}
					itemKey={([key, _]) => key}
				>
					{([key, value]) => (
						<List.Item>
							<Suspense fallback={<TodoSkeleton />}>
								<Todo
									removeTodo={removeTodo}
									onClick={completeTodo}
									id={key}
									{...value}
								/>
							</Suspense>
						</List.Item>
					)}
				</VirtualList>
			</List>
		</Flex>
	);
};
