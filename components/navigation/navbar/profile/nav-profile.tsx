import clsx from 'clsx'
import NavCart from '../icons/nav-cart'
import NavUser from '../icons/nav-user'

import styles from '../nav.module.scss'
import ControlText from '@/components/controls/control-text'

//TODO Search functionality

const NavProfile: React.FC = (): JSX.Element => (
	<div className={styles['navbar__profile']}>
		<ControlText variant='search' placeholder='Search' value='' />
		<NavCart />
		<NavUser />
	</div>
)

export default NavProfile
