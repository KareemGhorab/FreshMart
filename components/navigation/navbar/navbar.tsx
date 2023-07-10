import NavList from './nav-list/nav-list'
import NavLogo from './nav-logo'
import NavProfile from './nav-profile/nav-profile'
import styles from './nav.module.css'

export default function Navbar() {
	return (
		<nav className='flex justify-between items-center px-5 bg-red-500 w-[1150px] mx-auto relative mt-24'>
			<NavList className={`${styles['nav-section']} bg-yellow-300`} />
			<NavLogo className='absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2' />
			<NavProfile className={`${styles['nav-section']} bg-blue-300`} />
		</nav>
	)
}
