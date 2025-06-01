import { Flex, Skeleton, Space } from 'antd';

export const TodosFooterSkeleton = () => {
	return (
		<Flex justify={'space-between'} gap={'middle'}>
			<Skeleton.Button active size={'small'} />
			<Flex>
				<Space>
					<Skeleton.Button active size={'small'} />
					<Skeleton.Button active size={'small'} />
					<Skeleton.Button active size={'small'} />
				</Space>
			</Flex>
			<Skeleton.Button active size={'small'} block={true} />
		</Flex>
	);
};
