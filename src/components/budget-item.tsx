import React from 'react';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import type { Budget } from '@prisma/client';
import { currencyFormatter } from '@/lib/utils';

export default function BudgeItem({ name, maximumSpending }: Budget) {
	return (
		<Card>
			<CardHeader>
				<div className="flex justify-between">
					<CardTitle className="text-xl">{name}</CardTitle>
					<div className="flex items-center gap-1">
						<span className="font-bold text-xl">
							{currencyFormatter(maximumSpending)}
						</span>
						<span className="text-muted-foreground">/</span>
						<span className="text-muted-foreground text-sm">
							{currencyFormatter(maximumSpending)}
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
