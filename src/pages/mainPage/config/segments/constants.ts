import type { TypeByValue } from '../../../../shared';

export const SEGMENTS = {
	ALL: 'all',
	ACTIVE: 'active',
	COMPLETED: 'completed',
} as const;

export type SegmentType = TypeByValue<typeof SEGMENTS>;
