import { z } from 'zod';

const requiredString = z.string().min(1, 'Required');

export const createBudgetSchema = z.object({
	name: requiredString.max(100),
	maximumSpending: z.number(),
});

export type createBudgetValues = z.infer<typeof createBudgetSchema>;
