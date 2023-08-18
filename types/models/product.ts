import { ImageProps } from 'next/image'

export type TRating = 0 | 1 | 2 | 3 | 4 | 5

export type TProduct = {
	name: string
	slug: string
	price: number
	discount: number
	totalRating: TRating
	image: ImageProps
}
