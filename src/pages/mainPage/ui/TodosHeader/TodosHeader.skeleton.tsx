import { Skeleton, Flex } from 'antd';

export const TodosHeaderSkeleton = () => {
	return (
		<Flex justify={'space-between'} gap={'small'}>
			<Skeleton.Input active size={'large'} block />
			<Skeleton.Button active size={'large'} />
		</Flex>
	);
};
