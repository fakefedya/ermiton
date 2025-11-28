import styles from './Hero.module.css'
import cn from 'classnames'

export function Hero() {
	return (
		<section className={cn(styles.section, styles.hero)}>
			<div className={styles.card} id='hero'>
				<div className={styles.image}>
					<img src='./images/logo.png' alt='Логотип компании' />
				</div>
				<h1 className={styles.heading}>Оптовый поставщик автозапчастей</h1>
				<p className={styles.paragraph}>
					Поставляем от дилеров напрямую. Ориентируемся на долгосрочное
					сотрудничество.
				</p>
				<a href='/#cta' className={styles.action}>
					<div className={styles['action-button']}>Связаться</div>
				</a>
			</div>
		</section>
	)
}
