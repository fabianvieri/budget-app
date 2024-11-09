import { db } from '@/db';

export async function getBudgetList() {
	return db.query.budgets.findMany({
		columns: { createdAt: false, updatedAt: false },
	});
}
