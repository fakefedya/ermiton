import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'

import styles from '../layouts/Default/DefaultLayout.module.css'

const pageVariants = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -20 },
}
const pageTransition = {
	duration: 0.35,
}

export function AnimatedOutlet() {
	const location = useLocation()

	return (
		<AnimatePresence mode='wait'>
			<motion.div
				className={styles.motionDiv}
				key={location.pathname}
				variants={pageVariants}
				initial='initial'
				animate='animate'
				exit='exit'
				transition={pageTransition}
			>
				<Outlet />
			</motion.div>
		</AnimatePresence>
	)
}
