'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { createBudgetSchema, createBudgetValues } from '@/schema/budget';
import { Button } from '@/components/ui/button';

export default function NewBudgetForm() {
	const form = useForm<createBudgetValues>({
		resolver: zodResolver(createBudgetSchema),
		defaultValues: {
			name: '',
			maximumSpending: 100,
		},
	});

	const { handleSubmit, control } = form;

	async function onSubmit(values: createBudgetValues) {
		console.log(values);
	}
	return (
		<Form {...form}>
			<form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
				<FormField
					control={control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Budget Name</FormLabel>
							<FormControl>
								<Input placeholder="e.g. Entertainment" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name="maximumSpending"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Budget Maximum Spending</FormLabel>
							<FormControl>
								<Input className="appearance-none" type="number" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
