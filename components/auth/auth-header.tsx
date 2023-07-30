import clsx from 'clsx'
import { TBasicProps } from '@/types/basic'
import { IMAGE_UI } from '@/config/config'
import Image from 'next/image'
import { amatic_SC } from '../fonts'

type TProps = {
	title: string
}

const AuthHeader = ({
	title,
	className = '',
}: TProps & TBasicProps): JSX.Element => {
	return (
		<header className={clsx(className, 'w-full h-fit relative')}>
			<Image
				src={`${IMAGE_UI}/bg-auth.jpg`}
				alt=''
				width={1920}
				height={380}
				className='absolute inset-0 w-full h-full -z-10'
			/>
			<div className='py-48'></div>
			<h2
				className={clsx(
					'text-5xl font-semibold text-white w-fit mx-auto'
				)}
			>
				{title}
			</h2>
			<div className='py-32'></div>
		</header>
	)
}

export default AuthHeader
