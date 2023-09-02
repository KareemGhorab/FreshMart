import clsx from 'clsx'
import Link from 'next/link'
import { TLink, TPropsWithClassName } from '@/types/props'
import {
	IconDefinition,
	faBars,
	faBasketShopping,
	faHome,
	faNewspaper,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './admin-sidebar.module.scss'

type TAdminSidebarLink = {
	icon: IconDefinition
} & TLink

const links: TAdminSidebarLink[] = [
	{
		icon: faHome,
		label: 'Home',
		link: {
			href: '/admin',
		},
	},
	{
		icon: faBasketShopping,
		label: 'Products',
		link: {
			href: '/admin/products',
		},
	},
	{
		icon: faNewspaper,
		label: 'Blog',
		link: {
			href: '/admin/blog',
		},
	},
]

type TProps = TPropsWithClassName

const AdminSidebar: React.FC<TProps> = ({ className }): JSX.Element => (
	<>
		<input
			type='checkbox'
			id='toggler'
			className={clsx(styles['check_toggler'], 'hidden')}
		/>
		<aside className='flex transition-all duration-300 fixed'>
			<label
				role='button'
				htmlFor='toggler'
				className='rounded-r-full relative w-10 h-10 bg-app-400 order-1 flex justify-center items-center text-white'
			>
				<FontAwesomeIcon icon={faBars} size='lg' />
			</label>
			<div
				className={clsx(
					'bg-app-400 w-sidebar h-screen flex justify-center',
					className
				)}
			>
				<ul className='h-full flex flex-col justify-center text-white text-left gap-10'>
					{links.map(({ icon, label, link: { href } }) => (
						<li
							key={label}
							className='flex gap-2 text-2xl hover:scale-105 w-fit'
						>
							<FontAwesomeIcon icon={icon} />
							<Link href={href}>{label}</Link>
						</li>
					))}
				</ul>
			</div>
		</aside>
	</>
)

export default AdminSidebar
