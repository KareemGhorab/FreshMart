import NavList from './nav-list/nav-list'
import NavLogo from './nav-logo'
import NavProfile from './nav-profile/nav-profile'
import styles from './nav.module.css'

export default function Navbar() {
	return (
		<nav className='bg-white rounded-lg flex justify-between items-center px-6 py-3 w-[1150px] absolute right-1/2 transform translate-x-1/2 mt-24 z-50'>
			<NavList className={`${styles['nav-section']}`} />
			<NavLogo className='absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2' />
			<NavProfile className={`${styles['nav-section']}`} />
		</nav>
	)
}
