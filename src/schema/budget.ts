import { z } from 'zod';

export const createBudgetSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	maximumSpending: z
		.string()
		.min(1, 'Maximum spending is required')
		.regex(/^\d+$/, 'Must be a number')
		.refine((value) => parseInt(value) > 0, {
			message: 'Must be greater than 0',
		}),
});

export type createBudgetValues = z.infer<typeof createBudgetSchema>;
