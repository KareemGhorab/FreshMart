import clsx from 'clsx'
import { TCurrency } from '@/types/locale'
import { playfair_display } from '@/components/fonts'

import styles from './price.module.scss'

type TProps = {
	price: number
	currency: TCurrency
	deleted?: boolean
	className?: string
}

const Price: React.FC<TProps> = ({
	price,
	className = '',
	deleted = false,
	currency,
}: TProps): JSX.Element => (
	<strong
		className={clsx(
			styles.price,
			playfair_display.className,
			{
				[styles['price--normal']]: !deleted,
				[styles['price--deleted']]: deleted,
			},
			className
		)}
	>
		{currency} <span className={clsx('text-xl')}>{price.toFixed(2)}</span>
	</strong>
)

export default Price
