import { Layout } from './components/layout/Layout/Layout'
import { ToastContainer } from './components/ui/Toast/Toast'
import { AppRouter } from './router/AppRouter'

export function App() {
	return (
		<>
			<Layout>
				<AppRouter />
			</Layout>
			<ToastContainer />
		</>
	)
}
