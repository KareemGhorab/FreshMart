import Link from 'next/link'
import { TNavItem } from '../types'

import styles from '../nav.module.scss'

type TProps = TNavItem

const NavItem: React.FC<TProps> = ({ href, title }: TProps) => (
	<li>
		<Link className={styles['navbar__menu__item']} href={href}>
			{title}
		</Link>
	</li>
)
export default NavItem
