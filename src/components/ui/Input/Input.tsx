import { forwardRef } from 'react'
import cn from 'classnames'
import styles from './Input.module.css'
import type { IInputProps } from './Input.props'

export const Input = forwardRef<HTMLInputElement, IInputProps>(
	({ type = 'text', className, ...props }, ref) => {
		return (
			<input
				ref={ref}
				type={type}
				className={cn(styles.input, className)}
				{...props}
			/>
		)
	}
)

Input.displayName = 'Input'
