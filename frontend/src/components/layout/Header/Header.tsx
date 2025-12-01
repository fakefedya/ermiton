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
				<a
					href='/documents/kp.pdf'
					download
					className={cn(styles.link, styles.kp)}
				>
					Получить КП
				</a>
				<a
					href='https://wa.me/+79313576999'
					target='_blank'
					className={cn(styles.link, styles.wa)}
				>
					WhatsApp
				</a>
			</nav>
		</header>
	)
}
