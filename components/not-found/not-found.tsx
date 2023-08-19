import Image from 'next/image'
import clsx from 'clsx'

import styles from './not-found.module.scss'
import HomeButton from './home-button'

type TProps = {
	className?: string
}

const NotFound: React.FC<TProps> = ({
	className = '',
}: TProps): JSX.Element => (
	<div className={clsx(styles['not_found'], className)}>
		<div className={styles['not_found__left']}>
			<Image
				className=''
				src='/not-found/404-left.png'
				alt='404 not found'
				width={530}
				height={203}
				draggable={false}
			/>
			<p className='text-xl'>
				Sorry - The page that you are looking for is not here
			</p>
			<HomeButton />
		</div>
		<Image
			src='/not-found/404-right.jpg'
			alt='Vegetables paper bag'
			width={500}
			height={600}
			draggable={false}
		/>
	</div>
)

export default NotFound
