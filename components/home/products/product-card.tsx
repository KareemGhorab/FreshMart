import Image from 'next/image'
import Rating from '@/components/ui/rating/rating'
import { Product } from '@/types/product'
import Price from '@/components/ui/price/price'

type Props = {
	product: Product
}

export default function ProductCard({
	product: { name, price, discount, imageUrl, totalRating },
}: Props) {
	return (
		<article className='flex flex-col items-center justify-center'>
			<figure>
				<Image
					src={imageUrl}
					alt={name}
					width={200}
					height={200}
					className='w-full h-full'
				/>
			</figure>
			<figcaption>{name}</figcaption>
			<Rating rating={totalRating} />
			<Price price={price} discount={discount} />
		</article>
	)
}
