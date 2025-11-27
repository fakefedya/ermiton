// src/router/index.tsx
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Privacy } from '../pages/Privacy/Privacy'
import { Error } from '../pages/Error/Error'

export const AppRouter: React.FC = () => (
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/privacy' element={<Privacy />} />
		<Route path='*' element={<Error />} />
	</Routes>
)
