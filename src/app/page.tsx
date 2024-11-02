import BudgetList from '@/components/budget-list';

export default function Home() {
	return (
		<main className="p-3 my-5">
			<div className="container mx-auto">
				<BudgetList />
			</div>
		</main>
	);
}
