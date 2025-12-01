import { ToastContainer } from './components/ui/Toast/Toast'
import { AppRouter } from './router/AppRouter'

export function App() {
	return (
		<>
			<AppRouter />
			<ToastContainer />
		</>
	)
}
