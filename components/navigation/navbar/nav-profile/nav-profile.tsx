import { BasicProps } from '@/types'
import NavSearch from './nav-search'
import NavCart from './nav-cart'
import NavUser from './nav-user'

export default function NavProfile({ className }: BasicProps) {
	return (
		<div
			className={`flex justify-end items-center gap-5 ${className}`}
		>
			<NavSearch />
			<NavCart />
			<NavUser />
		</div>
	)
}
