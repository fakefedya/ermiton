import { Link } from 'react-router-dom'
import styles from './Error.module.css'
import cn from 'classnames'

export function Error() {
	return (
		<section className={cn(styles.section, styles.error)}>
			<h2 className={styles.heading}>Страница не найдена</h2>
			<Link to={'/'} className={styles.action}>
				На главную
			</Link>
		</section>
	)
}
