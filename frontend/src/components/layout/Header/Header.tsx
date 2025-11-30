import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import cn from 'classnames'

export const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<Link to={'/'} className={cn(styles.link, styles.home)}>
					<img src='./icons/home.svg' alt='Иконка домой' />
				</Link>
				<Link to={'/privacy'} className={cn(styles.link, styles.kp)}>
					Получить КП
				</Link>
				<Link to={'/asd'} className={cn(styles.link, styles.wa)}>
					WhatsApp
				</Link>
			</nav>
		</header>
	)
}
