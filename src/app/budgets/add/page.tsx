import { Metadata } from 'next';
import NewBudgetForm from './new-budget-form';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export const metadata: Metadata = {
	title: 'Add new budget',
};

export default function AddBudget() {
	return (
		<main className="p-3 my-5">
			<div className="container mx-auto">
				<Card className="w-1/2 mx-auto">
					<CardHeader>
						<CardTitle className="text-xl font-bold">Add New Budget</CardTitle>
						<CardDescription>Create your own custom budget</CardDescription>
					</CardHeader>
					<CardContent>
						<NewBudgetForm />
					</CardContent>
				</Card>
			</div>
		</main>
	);
}
