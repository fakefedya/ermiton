import { httpClient } from './httpClient'
import type { ContactFormValues } from '../features/contact/validation'

export interface ContactResponse {
	success: boolean
	message?: string
}

export async function sendContactForm(
	payload: ContactFormValues
): Promise<ContactResponse> {
	const { data } = await httpClient.post<ContactResponse>(
		'/contact.php',
		payload
	)
	return data
}
