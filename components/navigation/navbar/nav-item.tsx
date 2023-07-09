import { BasicProps } from '@/types'
import { NavItemType } from './types'
import Link from 'next/link'

export default function NavItem({
	href,
	title,
	className,
}: NavItemType & BasicProps) {
	return (
		<li className={`${className}`}>
			<Link href={href}>{title}</Link>
		</li>
	)
}
