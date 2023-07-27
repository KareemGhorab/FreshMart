import { Product } from '@/types'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import Image from 'next/image'

type Props = {
	product: Product
}

const stars: { id: number; isStar: boolean }[] = [
	{ id: 0, isStar: true },
	{ id: 1, isStar: true },
	{ id: 2, isStar: true },
	{ id: 3, isStar: true },
	{ id: 4, isStar: true },
	{ id: 5, isStar: false },
	{ id: 6, isStar: false },
	{ id: 7, isStar: false },
	{ id: 8, isStar: false },
	{ id: 9, isStar: false },
]

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
			<div>
				{stars
					.slice(5 - totalRating, 10 - totalRating)
					.map(({ isStar, id }) => (
						<FontAwesomeIcon
							icon={faStar}
							key={id}
							className={clsx({
								'text-yellow-400': isStar,
								'text-gray-400': !isStar,
							})}
						/>
					))}
			</div>
			<div className='flex justify-center items-center'>
				<div className='text-app-400'>
					
				</div>
				<div className=''>

				</div>
			</div>
		</article>
	)
}
