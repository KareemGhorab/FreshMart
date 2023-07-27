import { ReactElement } from 'react'

export type BasicProps = {
	className?: string
	children?: ReactElement
}

export type Product = {
	name: string
	price: number
	discount: number
	totalRating: 0 | 1 | 2 | 3 | 4 | 5
	imageUrl: string
}
