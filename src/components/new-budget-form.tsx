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
import SubmitButton from './submit-button';
import { Input } from '@/components/ui/input';

import { useToast } from '@/hooks/use-toast';
import { addNewBudget } from '../lib/actions';
import { createBudgetSchema, createBudgetValues } from '@/lib/validations';

export default function NewBudgetForm() {
	const form = useForm<createBudgetValues>({
		resolver: zodResolver(createBudgetSchema),
		defaultValues: {
			name: '',
			maximumSpending: '',
		},
	});

	const {
		handleSubmit,
		control,
		formState: { isSubmitting },
	} = form;

	const { toast } = useToast();

	async function onSubmit(values: createBudgetValues) {
		try {
			await addNewBudget(values);
			toast({
				title: 'New budget created',
				description: `Budget ${values.name} created`,
			});
		} catch (error) {
			console.error(error);
			toast({
				title: 'Failed to create budget',
				description: 'Please try again',
				variant: 'destructive',
			});
		}
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
								<Input
									placeholder="e.g. Entertainment"
									disabled={isSubmitting}
									{...field}
								/>
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
								<Input
									className="appearance-none"
									type="number"
									disabled={isSubmitting}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<SubmitButton loading={isSubmitting}>Submit</SubmitButton>
			</form>
		</Form>
	);
}
