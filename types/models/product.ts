import { TImage } from '../app/image'

export type TRating = 0 | 1 | 2 | 3 | 4 | 5

export type TProduct = {
	name: string
	price: number
	discount: number
	totalRating: TRating
	image: TImage
}