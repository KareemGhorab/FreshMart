'use client'

import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { runToast } from '@/utils/toast/toast'

type TMenuItem = {
	label: string
	onClick: React.MouseEventHandler
}

type TProps = {
	onDismiss: () => void
}

const NavUserMenu: React.FC<TProps> = ({ onDismiss }): JSX.Element => {
	const router = useRouter()

	const menuItems: TMenuItem[] = [
		{
			label: 'My Wishlist',
			onClick: () => router.push('/profile/wishlist'),
		},
		{
			label: 'My Orders',
			onClick: () => router.push('/profile/orders'),
		},
		{
			label: 'My Profile',
			onClick: () => router.push('/profile'),
		},
		{
			label: 'Logout',
			onClick: () =>
				signOut({ redirect: false })
					.then(() => router.replace('/'))
					.catch((err) => runToast(err.error, 'error')),
		},
	]

	return (
		<div className='absolute w-40 bg-app-400 text-white text-lg flex flex-col gap-6 px-3 py-5 -translate-x-[100%] rounded-xl'>
			{menuItems.map((mi) => (
				<button
					key={mi.label}
					onClick={mi.onClick}
					className='hover:scale-125 transition-transform duration-75'
				>
					{mi.label}
				</button>
			))}
		</div>
	)
}
export default NavUserMenu
