import type { IButtonProps } from './Button.props'
import styles from './Button.module.css'
import cn from 'classnames'

export function Button({ children, className, ...props }: IButtonProps) {
	return (
		<button className={cn(styles.button, className)} {...props}>
			{children}
		</button>
	)
}
