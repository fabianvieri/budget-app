import Link from 'next/link';
import { Button } from './ui/button';

export default function Header() {
	return (
		<header className="p-3 shadow-md">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="text-2xl font-bold">
					<Link href="/">Budgets</Link>
				</h1>
				<div className="space-x-2">
					<Button asChild>
						<Link href="/budgets/add">Add Budget</Link>
					</Button>
					<Button variant="outline">Add Expense</Button>
				</div>
			</div>
		</header>
	);
}
