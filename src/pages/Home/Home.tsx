import { Benefits } from './sections/Benefits/Benefits'
import { Brands } from './sections/Brands/Brands'
import { CTA } from './sections/CTA/CTA'
import { Hero } from './sections/Hero/Hero'

export function Home() {
	return (
		<>
			<Hero />
			<Brands />
			<Benefits />
			<CTA />
		</>
	)
}
