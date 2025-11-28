import styles from './Benefits.module.css'
import cn from 'classnames'

export function Benefits() {
	return (
		<section className={cn(styles.section, styles.benefits)}>
			<div className={styles['page-header']}>
				<h2 className={styles.heading}>Надёжные условия</h2>
				<span className={styles.subheading}>
					Гарантии, специальные цены и преимущества для оптовых клиентов.
				</span>
			</div>
			<div className={styles.wrapper}>
				<div className={cn(styles.benefit, styles.first)}>
					<div className={styles['benefit-heading']}>
						Предоставим гарантию в соответствии с законодательством на всю
						продукцию.
					</div>
					<div className={styles['benefit-text']}>Клиентам, партнерам</div>
				</div>
				<div className={cn(styles.benefit, styles.second)}>
					<div className={styles['benefit-heading']}>
						Предложим специальные цены, отсрочки платежа, акции и скидки.
					</div>
					<div className={styles['benefit-text']}>B2B, СТО, Тех. центрам</div>
				</div>
				<div className={cn(styles.benefit, styles.third)}>
					<div className={styles['benefit-heading']}>
						Дадим множество уникальных преимуществ, которые помогут вам успешно
						развивать ваш бизнес.
					</div>
					<div className={styles['benefit-text']}>Партнерам</div>
				</div>
			</div>
		</section>
	)
}
