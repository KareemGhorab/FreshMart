import { TBasicProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

export default function NavLogo({ className = '' }: TBasicProps) {
	return (
		<figure
			className={`bg-white rounded-full h-[170px] w-44 flex justify-center items-center ${className}`}
		>
			<Link href='/'>
				<Image
					className='w-full'
					src='/logo.png'
					alt='FreshMart Logo'
					width='176'
					height='100'
				></Image>
			</Link>
		</figure>
	)
}
