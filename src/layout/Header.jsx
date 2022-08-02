import { Navbar } from '../modules/Navigation'
const Header = () => {
	const styledClass = ['fixed', 'w-full', 'shadow-xl', 'z-50']
	return (
		<header className={styledClass.join(' ')}>
			<Navbar />
		</header>
	)
}

export default Header
