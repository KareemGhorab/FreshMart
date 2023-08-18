import { TProduct } from '@/types/models/product'
import Image from 'next/image'
import clsx from 'clsx'
import Rating from '../rating/rating'

import styles from './product-item.module.scss'
import Price from '../price/price'

type TProps = { className?: string } & TProduct

const ProductItem: React.FC<TProps> = ({
	discount,
	image,
	name,
	price,
	totalRating,
	className = '',
}: TProps): JSX.Element => (
	<article className={clsx(styles.product_item, className)}>
		<Image {...image} alt={image.alt || 'Product'} />
		<h4>{name}</h4>
		<Rating rating={totalRating} />
		<footer className={clsx(styles['product_item__footer'])}>
			{discount && (
				<Price currency='EGP' price={price} deleted={!!discount} />
			)}
			<Price currency='EGP' price={price} />
		</footer>
	</article>
)

export default ProductItem
