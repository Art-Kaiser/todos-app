import { Button, Flex, Segmented, Progress, Typography } from 'antd';
import { type FC } from 'react';

import { TODOS_TEXT, SEGMENT_OPTIONS } from '../../config';

import type { SegmentType } from '../../config';

import styles from './TodosFooter.module.css';

interface ITodosFooter {
	countNotCompleted: number;
	clearCompletedTodo: () => void;
	changeView: (value: SegmentType) => void;
	percentDone: number;
}

const TodosFooter: FC<ITodosFooter> = ({
	countNotCompleted,
	clearCompletedTodo,
	changeView,
	percentDone,
}) => {
	return (
		<>
			<Flex justify={'space-between'} align={'center'} gap={'small'}>
				<Typography.Text type={'secondary'} className={styles.text}>
					{countNotCompleted ?? 0} {TODOS_TEXT.itemsLeft}
				</Typography.Text>
				<Segmented<SegmentType>
					className={styles.segments}
					options={SEGMENT_OPTIONS}
					onChange={changeView}
					size={'small'}
				/>
				<Button
					type={'text'}
					onClick={clearCompletedTodo}
					size={'small'}
				>
					<Typography.Text type={'secondary'} className={styles.text}>
						{TODOS_TEXT.clearCompleted}
					</Typography.Text>
				</Button>
			</Flex>
			<Flex vertical>
				<Progress className={styles.text} percent={percentDone} />
			</Flex>
		</>
	);
};

export default TodosFooter;
