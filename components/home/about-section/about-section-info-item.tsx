import clsx from 'clsx'

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
			'w-96',
			{
				'text-right': orientation === 'right',
				'text-left': orientation === 'left',
			},
			className
		)}
	>
		<h3 className={clsx('text-xl font-medium')}>{title}</h3>
		<p className={clsx('text-base leading-5')}>{paragraph}</p>
	</div>
)

export default AboutSectionInfoItem
