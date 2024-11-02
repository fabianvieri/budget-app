'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/utils';

const WARNING_THRESHOLD = 70;

const Progress = React.forwardRef<
	React.ElementRef<typeof ProgressPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
	const progressValue = value || 0;
	const backgroundColor =
		progressValue > WARNING_THRESHOLD ? 'bg-destructive' : 'bg-primary';

	return (
		<ProgressPrimitive.Root
			ref={ref}
			className={cn(
				'relative h-2 w-full overflow-hidden rounded-full bg-primary/20',
				className
			)}
			{...props}
		>
			<ProgressPrimitive.Indicator
				className={`h-full w-full flex-1 transition-all ${backgroundColor}`}
				style={{ transform: `translateX(-${100 - (progressValue || 0)}%)` }}
			/>
		</ProgressPrimitive.Root>
	);
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
