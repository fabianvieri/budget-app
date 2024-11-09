import BudgetItem from '@/components/budget-item';
import { getBudgetList } from '@/lib/queries';

export default async function Home() {
	const budgets = await getBudgetList();

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
