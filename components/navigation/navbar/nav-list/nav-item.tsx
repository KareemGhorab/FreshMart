import { TBasicProps } from '@/types'
import { NavItemType } from '../types'
import Link from 'next/link'

export default function NavItem({
	href,
	title,
	className,
}: NavItemType & TBasicProps) {
	return (
		<li className={`${className}`}>
			<Link className='uppercase' href={href}>
				{title}
			</Link>
		</li>
	)
}
