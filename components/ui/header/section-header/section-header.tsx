import { amatic_SC } from '@/components/fonts'

import styles from './section-header.module.scss'
import clsx from 'clsx'

type TProps = {
	title: string
	paragraph?: string
	className?: string
	variant?: 'none' | 'primary'
}

const SectionHeader: React.FC<TProps> = ({
	title,
	paragraph,
	variant = 'none',
	className = '',
}: TProps) => (
	<header className={clsx(styles['section_header'], className)}>
		<h2
			className={clsx(
				amatic_SC.className,
				styles['section_header__heading'],
				{
					[styles['section_header__heading--primary']]:
						variant === 'primary',
				}
			)}
		>
			{title}
		</h2>
		{paragraph && (
			<>
				<div className='my-2' />
				<p
					className={clsx(styles['section_header__paragraph'], {
						[styles['section_header__paragraph--primary']]:
							variant === 'primary',
					})}
				>
					{paragraph}
				</p>
			</>
		)}
	</header>
)

export default SectionHeader
