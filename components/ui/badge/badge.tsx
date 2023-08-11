import clsx from 'clsx'

import styles from './badge.module.scss'

type TProps = {
	variant: 'cart'
	className?: string
	onClick?: React.MouseEventHandler
} & React.PropsWithChildren

const Badge = ({ variant, className = '', children }: TProps) => (
	<div
		className={clsx(
			styles.badge,
			{
				[styles['badge--cart']]: variant === 'cart',
			},
			className
		)}
	>
		{children}
	</div>
)

export default Badge
