import { ContactForm } from '../../../../features/contact/Form'
import styles from './CTA.module.css'
import cn from 'classnames'

export function CTA() {
	return (
		<section className={cn(styles.section, styles.benefits)} id='cta'>
			<h2 className={styles.heading}>Обратная связь</h2>
			<div className={styles.card}>
				<ContactForm />
			</div>
		</section>
	)
}
