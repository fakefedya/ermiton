import styles from './Brands.module.css'
import cn from 'classnames'

const brands: string[] = [
	'КАМАЗ',
	'ЯМЗ',
	'ГАЗ',
	'УАЗ',
	'ВАЗ',
	'УРАЛ',
	'КРАЗ',
	'Createk',
	'Wayteko',
	'Shaanxi',
	'Howo',
	'DongFeng',
	'SHACMAN',
	'Faw',
	'Shantui',
	'LiuGong',
	'ZL30/LW300',
	'ZL50/LW500',
	'SDLG',
	'XGMA',
	'Mitsuber',
	'Deutz',
	'Steyr',
	'Yuchai',
]

export function Brands() {
	return (
		<section className={cn(styles.section, styles.brands)}>
			<div className={styles['page-header']}>
				<h2 className={styles.heading}>Огромный ассортимент</h2>
				<span className={styles.subheading}>
					Более 3000 наименований для спецтехники, фронтальных погрузчиков,
					бульдозеров, грейдеров и др.
				</span>
			</div>
			<div className={styles['brand-list']}>
				{brands.map((el) => (
					<div className={styles.item}>{el}</div>
				))}
			</div>
		</section>
	)
}
