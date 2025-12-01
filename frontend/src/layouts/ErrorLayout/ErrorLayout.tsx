import { Header } from '../../components/layout/Header/Header'
import { Footer } from '../../components/layout/Footer/Footer'
import styles from './ErrorLayout.module.css'
import { Outlet } from 'react-router-dom'

export function ErrorLayout() {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
