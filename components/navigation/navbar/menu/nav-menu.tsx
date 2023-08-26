import clsx from 'clsx'
import { navMenu } from '../types'
import NavItem from './nav-item'

const NavMenu: React.FC = (): JSX.Element => (
	<ul className={clsx('flex justify-evenly items-center', 'w-[420px] h-20')}>
		{navMenu.map((item) => (
			<NavItem {...item} key={item.title} />
		))}
	</ul>
)

export default NavMenu
