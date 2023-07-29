import { BasicProps } from '@/types/basic'
import { navList } from '../types'
import NavItem from './nav-item'

export default function NavList({ className = '' }: BasicProps) {
	return (
		<ul className={`flex justify-between items-center ${className}`}>
			{navList.map((item) => (
				<NavItem {...item} key={item.title} />
			))}
		</ul>
	)
}
