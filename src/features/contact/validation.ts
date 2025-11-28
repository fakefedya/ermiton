import { z } from 'zod'

export const contactSchema = z.object({
	name: z.string().min(2, 'Некорректное имя').max(100, 'Слишком длинное имя'),
	email: z.string().min(1, 'Введите email').email('Некорректный email'),
})

export type ContactFormValues = z.infer<typeof contactSchema>
