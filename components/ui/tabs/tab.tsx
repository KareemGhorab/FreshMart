import clsx from 'clsx'
import Image from 'next/image'

import styles from './tab.module.scss'

type TProps = {
	variant: 'painted'
	title: string
	onSelect: (title: string) => void
} & React.PropsWithChildren

const Tab = ({ variant, title, onSelect, children }: TProps) => {
	const isPainted = variant === 'painted'

	return (
		<button
			onClick={() => onSelect(title)}
			className={clsx('group', styles.tag, {
				[styles['card--painted']]: variant,
			})}
		>
			<div className={clsx(styles['tag__image-wrapper'])}>
				<div
					className={clsx(
						styles['tag__paint-cover'],
						'group-hover:scale-x-0'
					)}
				/>
				<Image
					className='w-full h-full'
					src='/ui/tab.png'
					alt='Green background paint'
					width={135}
					height={37}
				/>
			</div>
			<div className={clsx(styles['tag__title'])}>
				<figure>{children}</figure>
				<figcaption className='font-medium'>{title}</figcaption>
			</div>
		</button>
	)
}

export default Tab
