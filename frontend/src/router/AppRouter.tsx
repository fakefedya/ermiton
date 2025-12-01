import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Privacy } from '../pages/Privacy/Privacy'
import { Error } from '../pages/Error/Error'
import { DefaultLayout } from '../layouts/Default/DefaultLayout'
import { ErrorLayout } from '../layouts/ErrorLayout/ErrorLayout'
import { PrivacyLayout } from '../layouts/PrivacyLayout/PrivacyLayout'

export function AppRouter() {
	return (
		<Routes>
			<Route element={<DefaultLayout />}>
				<Route path='/' element={<Home />} />
			</Route>

			<Route element={<PrivacyLayout />}>
				<Route path='/privacy' element={<Privacy />} />
			</Route>

			<Route element={<ErrorLayout />}>
				<Route path='*' element={<Error />} />
			</Route>
		</Routes>
	)
}
