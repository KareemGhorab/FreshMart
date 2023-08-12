import Image from 'next/image'
import Link from 'next/link'

import styles from '../nav.module.scss'

const NavLogo: React.FC = (): JSX.Element => (
	<h1 className={styles['navbar__logo']}>
		<Link href='/'>
			<Image
				className='w-full'
				src='/logo.png'
				alt='FreshMart Logo'
				width='176'
				height='100'
			></Image>
		</Link>
	</h1>
)

export default NavLogo
