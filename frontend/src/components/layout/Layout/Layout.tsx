import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import type { ILayoutProps } from './Layout.props'
import styles from './Layout.module.css'

export function Layout({ children }: ILayoutProps) {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	)
}
