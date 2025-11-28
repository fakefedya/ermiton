/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from 'react'
import type { IToastMessage, IToastItem } from './Toast.props'

import styles from './Toast.module.css'
import cn from 'classnames'

let listeners: ((msg: IToastMessage) => void)[] = []
let idCounter = 0

export const toast = {
	success(text: string) {
		const msg: IToastMessage = { id: idCounter++, type: 'success', text }
		listeners.forEach((l) => l(msg))
	},
	error(text: string) {
		const msg: IToastMessage = { id: idCounter++, type: 'error', text }
		listeners.forEach((l) => l(msg))
	},
	subscribe(callback: (msg: IToastMessage) => void) {
		listeners.push(callback)
		return () => {
			listeners = listeners.filter((l) => l !== callback)
		}
	},
}

export function ToastContainer() {
	const [items, setItems] = useState<IToastItem[]>([])

	useEffect(() => {
		return toast.subscribe((msg) => {
			setItems((prev) => [...prev, msg])

			// автоудаление через 3 секунды
			setTimeout(() => {
				setItems((prev) => prev.filter((i) => i.id !== msg.id))
			}, 3000)
		})
	}, [])

	return (
		<div className={styles.container}>
			{items.map((item) => (
				<div
					key={item.id}
					className={cn(styles.toast, {
						[styles.success]: item.type === 'success',
						[styles.error]: item.type === 'error',
					})}
				>
					{item.text}
				</div>
			))}
		</div>
	)
}
