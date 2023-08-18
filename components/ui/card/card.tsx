import Image from 'next/image'
import clsx from 'clsx'
import Rating from '@/components/ui/rating/rating'
import Price from '@/components/ui/price/price'
import { TProduct } from '@/types/models/product'

import styles from './card.module.scss'

type TProps = {
	product: TProduct
	className?: string
}

const Card = ({
	product: {
		name,
		price,
		discount,
		totalRating,
		image: { src, alt, width, height },
	},
	className = '',
}: TProps) => (
	<article className={clsx(styles.card, className)}>
		
	</article>
)

export default Card
