import { Layout } from './components/layout/Layout/Layout'
import { AppRouter } from './router/AppRouter'

export const App: React.FC = () => {
	return (
		<Layout>
			<AppRouter />
		</Layout>
	)
}
