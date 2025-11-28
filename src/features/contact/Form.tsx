// src/features/contact/Form.tsx (или ContactForm.tsx)
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '../../components/ui/Input/Input'
import { Button } from '../../components/ui/Button/Button'

import styles from './Form.module.css'
import buttonStyles from '../../components/ui/Button/Button.module.css'

import { contactSchema, type ContactFormValues } from './validation'
// import { sendContactForm } from '../../api/contactApi'; // подключишь, когда будет бэкенд

export function ContactForm() {
	const [serverError, setServerError] = useState<string | null>(null)
	const [isSuccess, setIsSuccess] = useState(false)

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
		setServerError(null)
		setIsSuccess(false)

		try {
			// TODO: сюда подключишь реальный вызов API
			// const response = await sendContactForm(values);
			// if (!response.success) {
			//   setServerError(response.message || 'Не удалось отправить заявку');
			//   return;
			// }

			console.log('ВАЛИДНЫЕ ДАННЫЕ ФОРМЫ:', values) // временно
			setIsSuccess(true)
			reset()
		} catch (error) {
			console.error(error)
			setServerError('Произошла ошибка при отправке. Попробуйте позже.')
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
					placeholder='ваше ФИО'
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
					placeholder='ваш e-mail'
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

			{serverError && (
				<div className={styles['server-error']}>{serverError}</div>
			)}

			{isSuccess && (
				<div className={styles.success}>
					Заявка отправлена. Мы свяжемся с вами по указанному email.
				</div>
			)}

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
