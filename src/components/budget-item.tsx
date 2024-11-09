import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';
import { Budget } from '@/db/schema';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { currencyFormatter } from '@/lib/utils';

export default function BudgeItem({ name, maximumSpending }: Budget) {
	return (
		<Card>
			<CardHeader>
				<div className="flex justify-between">
					<CardTitle className="text-xl">{name}</CardTitle>
					<div className="flex items-center gap-1">
						<span className="font-bold text-xl">
							{currencyFormatter(parseInt(maximumSpending))}
						</span>
						<span className="text-muted-foreground">/</span>
						<span className="text-muted-foreground text-sm">
							{currencyFormatter(parseInt(maximumSpending))}
						</span>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<Progress value={10} />
			</CardContent>
			<CardFooter>
				<div className="ml-auto flex gap-2">
					<Button variant="outline">Add Expense</Button>
					<Button variant="secondary">View Expense</Button>
				</div>
			</CardFooter>
		</Card>
	);
}
