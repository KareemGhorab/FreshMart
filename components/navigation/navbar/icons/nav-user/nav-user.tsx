'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import LoadingSpinner from '@/components/ui/loading-spinner/loading-spinner'
import { useBoolean } from '@/hooks/useBoolean'
import NavUserMenu from './nav-user-menu'

//TODO user profile

const NavUser: React.FC = (): JSX.Element => {
	const {
		value: showMenu,
		toggle: toggleMenu,
		setFalse: hideMenu,
	} = useBoolean(false)
	const { data, status } = useSession()
	const router = useRouter()

	const isAuthenticated = status === 'authenticated'
	const isLoading = status === 'loading'

	return (
		<div className='relative'>
			<button
				onClick={
					isAuthenticated
						? toggleMenu
						: () => router.push('/auth/login')
				}
				disabled={isLoading}
			>
				{isLoading ? (
					<LoadingSpinner
						size='xl'
						className='text-app-400 w-8 h-8'
					/>
				) : (
					<FontAwesomeIcon
						icon={faUserCircle}
						className={clsx('w-8 h-8', {
							'text-app-400': isAuthenticated,
							'text-gray-400': !isAuthenticated,
						})}
					/>
				)}
			</button>
			{isAuthenticated && showMenu ? (
				<NavUserMenu onDismiss={hideMenu} />
			) : null}
		</div>
	)
}
export default NavUser
