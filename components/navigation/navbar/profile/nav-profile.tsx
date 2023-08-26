import NavCart from '../icons/nav-cart'
import NavUser from '../icons/nav-user'
import ControlText from '@/components/controls/control-text'

//TODO Search functionality

const NavProfile: React.FC = (): JSX.Element => (
	<div className='flex justify-end items-center gap-5'>
		<ControlText variant='search' placeholder='Search' value='' />
		<NavCart />
		<NavUser />
	</div>
)

export default NavProfile
