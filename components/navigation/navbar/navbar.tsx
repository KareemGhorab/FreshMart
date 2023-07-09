import NavItem from './nav-item'
import { navList } from './types'

export default function Navbar() {
	return (
		<nav className=''>
			{navList.map((item) => (
				<NavItem {...item} key={item.title} />
			))}
		</nav>
	)
}
