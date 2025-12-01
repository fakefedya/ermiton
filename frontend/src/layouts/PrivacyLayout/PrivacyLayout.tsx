import { AnimatedOutlet } from '../../router/AnimatedOutlet'
import { Header } from '../../components/layout/Header/Header'
import { Footer } from '../../components/layout/Footer/Footer'

import styles from './PrivacyLayout.module.css'

export function PrivacyLayout() {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>
				<AnimatedOutlet />
			</main>
			<Footer />
		</div>
	)
}
