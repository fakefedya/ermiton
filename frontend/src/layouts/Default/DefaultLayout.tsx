import { Header } from '../../components/layout/Header/Header'
import { Footer } from '../../components/layout/Footer/Footer'
// import type { IDefaultLayoutProps } from './DefaultLayout.props'
import styles from './DefaultLayout.module.css'
import { Outlet } from 'react-router-dom'

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
