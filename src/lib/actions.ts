'use server';

import { db } from '@/db';
import { budgets } from '@/db/schema';
import { createBudgetSchema, createBudgetValues } from './validations';
import { revalidatePath } from 'next/cache';

export async function addNewBudget(values: createBudgetValues) {
	const data = createBudgetSchema.parse(values);
	await db.insert(budgets).values(data);
	revalidatePath('/');
}
