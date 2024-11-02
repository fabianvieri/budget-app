import BudgetItem from './budget-item';

export default function BudgetList() {
	return (
		<div>
			<BudgetItem title="Entertainment" total={1200} totalUsed={200} />
		</div>
	);
}
