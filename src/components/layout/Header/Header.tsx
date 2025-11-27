import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<header>
			<div></div>
			<nav>
				<Link to='/'>Главная</Link>
				<Link to='/privacy'>Политика конфиденциальности</Link>
			</nav>
		</header>
	)
}
