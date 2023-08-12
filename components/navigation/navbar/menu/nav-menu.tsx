import clsx from 'clsx'
import { navMenu } from '../types'
import NavItem from './nav-item'

import styles from '../nav.module.scss'

const NavMenu: React.FC = (): JSX.Element => (
	<ul className={clsx(styles['navbar__menu'], styles['navbar__section'])}>
		{navMenu.map((item) => (
			<NavItem {...item} key={item.title} />
		))}
	</ul>
)

export default NavMenu
