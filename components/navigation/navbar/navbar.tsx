import { TPropsWithUser } from '@/types/user'
import NavMenu from './menu/nav-menu'
import NavLogo from './icons/nav-logo'
import NavProfile from './profile/nav-profile'

const Navbar: React.FC = (): JSX.Element => (
	<nav className='bg-white rounded-lg flex justify-between items-center px-6 py-3 w-[1150px] absolute right-1/2 transform translate-x-1/2 mt-24 z-50'>
		<NavMenu />
		<NavLogo />
		<NavProfile />
	</nav>
)

export default Navbar
