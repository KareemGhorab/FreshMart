import clsx from 'clsx'

import styles from './about-section.module.scss'

type TProps = {
	title: string
	paragraph: string
	orientation: 'right' | 'left'
	className?: string
}

const AboutSectionInfoItem: React.FC<TProps> = ({
	title,
	paragraph,
	orientation,
	className = '',
}: TProps): JSX.Element => (
	<div
		className={clsx(
			styles['about_section__info__item'],
			{
				[styles['about_section__info__item--right']]:
					orientation === 'right',
				[styles['about_section__info__item--left']]:
					orientation === 'left',
			},
			className
		)}
	>
		<h3 className={clsx(styles['about_section__info__item__heading'])}>
			{title}
		</h3>
		<p className={clsx(styles['about_section__info__item__paragraph'])}>
			{paragraph}
		</p>
	</div>
)

export default AboutSectionInfoItem
