import { Header } from '../../components/layout/Header/Header'
import { Footer } from '../../components/layout/Footer/Footer'
import { Outlet } from 'react-router-dom'

import styles from './DefaultLayout.module.css'

export function DefaultLayout() {
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
