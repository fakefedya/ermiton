import { Header } from '../../components/layout/Header/Header'
import { Footer } from '../../components/layout/Footer/Footer'
import { Outlet } from 'react-router-dom'

import styles from './ErrorLayout.module.css'

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
