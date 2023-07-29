export type Rating = 0 | 1 | 2 | 3 | 4 | 5

export type Product = {
	name: string
	price: number
	discount: number
	totalRating: Rating
	imageUrl: string
}
