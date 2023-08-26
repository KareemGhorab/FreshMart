import Image from 'next/image'
import Link from 'next/link'

const NavLogo: React.FC = (): JSX.Element => (
	<h1 className='absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white rounded-full h-[170px] w-44 flex justify-center items-center'>
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
