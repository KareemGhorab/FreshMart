import NavMenu from './menu/nav-menu'
import NavLogo from './icons/nav-logo'
import NavProfile from './profile/nav-profile'
import styles from './nav.module.scss'

const Navbar = () => (
	<nav className={styles.navbar}>
		<NavMenu />
		<NavLogo />
		<NavProfile />
	</nav>
)

export default Navbar
