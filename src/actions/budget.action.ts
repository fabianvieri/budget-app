'use server';

import prisma from '@/lib/db';
import { createBudgetSchema, createBudgetValues } from '@/schema/budget';

export async function addNewBudget(values: createBudgetValues) {
	const { name, maximumSpending } = createBudgetSchema.parse(values);
	await prisma.budget.create({
		data: {
			name,
			maximumSpending: parseInt(maximumSpending),
		},
	});
}
