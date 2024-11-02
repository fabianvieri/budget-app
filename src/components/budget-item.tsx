import React from 'react';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { currencyFormatter } from '@/lib/utils';
import { Progress } from './ui/progress';
interface BudgetItemProps {
	title: string;
	total: number;
	totalUsed: number;
}
export default function BudgetItem({
	title,
	total,
	totalUsed,
}: BudgetItemProps) {
	return (
		<Card>
			<CardHeader>
				<div className="flex justify-between">
					<CardTitle className="text-xl">{title}</CardTitle>
					<div className="flex items-center gap-1">
						<span className="font-bold text-xl">
							{currencyFormatter(totalUsed)}
						</span>
						<span className="text-muted-foreground">/</span>
						<span className="text-muted-foreground text-sm">
							{currencyFormatter(total)}
						</span>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<Progress value={71} />
			</CardContent>
			<CardFooter>
				<div className="ml-auto flex gap-2">
					<Button>Add Expense</Button>
					<Button variant="outline">View Expense</Button>
				</div>
			</CardFooter>
		</Card>
	);
}
