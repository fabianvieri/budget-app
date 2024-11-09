import { pgTable, text, timestamp, numeric, serial } from 'drizzle-orm/pg-core';

const createdAt = timestamp('created_at').notNull().defaultNow();
const updatedAt = timestamp('updated_at')
	.notNull()
	.defaultNow()
	.$onUpdate(() => new Date());

export const budgets = pgTable('budgets', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	maximumSpending: numeric('maximum_spending', {
		precision: 15,
		scale: 2,
	}).notNull(),
	createdAt,
	updatedAt,
});

export type Budget = typeof budgets.$inferInsert;
