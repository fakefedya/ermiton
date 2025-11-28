// src/features/contact/Form.tsx (или ContactForm.tsx)
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from '../../components/ui/Toast/Toast'
import { Input } from '../../components/ui/Input/Input'
import { Button } from '../../components/ui/Button/Button'
import { contactSchema, type ContactFormValues } from './validation'
import { sendContactForm } from '../../api/contactApi'

import styles from './Form.module.css'
import buttonStyles from '../../components/ui/Button/Button.module.css'

// import { sendContactForm } from '../../api/contactApi'; // подключишь, когда будет бэкенд

export function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<ContactFormValues>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: '',
			email: '',
		},
		mode: 'onBlur',
	})

	const onSubmit = async (values: ContactFormValues) => {
		try {
			const response = await sendContactForm(values)

			if (!response.success) {
				toast.error(response.message || 'Не удалось отправить заявку')
				return
			}

			toast.success('Заявка отправлена! Проверьте почту.')
			reset()
		} catch (e) {
			console.error(e)
			toast.error('Ошибка отправки. Попробуйте позже.')
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.form}>
			<div className={styles['form-heading']}>
				Укажите свои контактные данные, и мы свяжемся с вами
			</div>

			<div className={styles.field}>
				<Input
					id='name'
					autoComplete='name'
					placeholder='Имя'
					{...register('name')}
					aria-invalid={!!errors.name}
					aria-describedby={errors.name ? 'name-error' : undefined}
				/>
				{errors.name && (
					<span id='name-error' className={styles.error}>
						{errors.name.message}
					</span>
				)}
			</div>

			<div className={styles.field}>
				<Input
					id='email'
					type='email'
					autoComplete='email'
					placeholder='Почта'
					{...register('email')}
					aria-invalid={!!errors.email}
					aria-describedby={errors.email ? 'email-error' : undefined}
				/>
				{errors.email && (
					<span id='email-error' className={styles.error}>
						{errors.email.message}
					</span>
				)}
			</div>

			<Button
				type='submit'
				className={buttonStyles['contact-form-button']}
				disabled={isSubmitting}
			>
				{isSubmitting ? 'Отправка…' : 'Отправить'}
			</Button>
		</form>
	)
}
