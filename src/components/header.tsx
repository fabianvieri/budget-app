import Link from 'next/link';

import { Button } from './ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from './ui/dialog';

import NewBudgetForm from './new-budget-form';

export default function Header() {
	return (
		<header className="p-3 shadow-md">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="text-2xl font-bold">
					<Link href="/">Budgets</Link>
				</h1>
				<div className="space-x-2">
					<Dialog>
						<DialogTrigger asChild>
							<Button>Add Budget</Button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-[500px]">
							<DialogHeader>
								<DialogTitle>Add New Budget</DialogTitle>
								<DialogDescription>
									Create your own custom budget
								</DialogDescription>
							</DialogHeader>
							<NewBudgetForm />
						</DialogContent>
					</Dialog>
					<Button variant="outline">Add Expense</Button>
				</div>
			</div>
		</header>
	);
}
