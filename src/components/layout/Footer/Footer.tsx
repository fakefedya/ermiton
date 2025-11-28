import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.text}>© {new Date().getFullYear()} Ermiton</div>
				<Link to={'/privacy'} className={styles.link}>
					Политика конфиденциальности
				</Link>
			</div>
		</footer>
	)
}
