import prisma from '@/lib/db';
import BudgetItem from '@/components/budget-item';

export default async function Home() {
	const budgets = await prisma.budget.findMany({});

	return (
		<div className="container mx-auto">
			<div className="flex flex-col gap-4">
				{budgets.map((budget) => (
					<BudgetItem key={budget.id} {...budget} />
				))}
			</div>
		</div>
	);
}
