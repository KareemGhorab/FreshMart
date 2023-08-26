import Link from 'next/link'
import { TNavItem } from '../types'

type TProps = TNavItem

const NavItem: React.FC<TProps> = ({ href, title }: TProps) => (
	<li>
		<Link className='uppercase hover:text-app-400' href={href}>
			{title}
		</Link>
	</li>
)
export default NavItem
