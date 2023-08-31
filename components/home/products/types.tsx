import { ReactElement } from 'react'
import Image from 'next/image'

import styles from './products.module.css'

const WIDTH = 50
const HEIGHT = 30

export const tabs: ProductsTab[] = [
	{
		title: 'All Products',
		icon: (
			<Image
				className={styles['icon']}
				src='/icons/all.png'
				alt='Fruit basket'
				width={WIDTH}
				height={HEIGHT}
			/>
		),
	},
	{
		title: 'Vegetables',
		icon: (
			<Image
				className={styles['icon']}
				src='/icons/vegetables.png'
				alt='Broccoli'
				width={WIDTH}
				height={HEIGHT}
			/>
		),
	},
	{
		title: 'Fruits',
		icon: (
			<Image
				className={styles['icon']}
				src='/icons/fruits.png'
				alt='Grapes'
				width={WIDTH}
				height={HEIGHT}
			/>
		),
	},
	{
		title: 'Bread',
		icon: (
			<Image
				className={styles['icon']}
				src='/icons/bread.png'
				alt='Bread'
				width={WIDTH}
				height={HEIGHT}
			/>
		),
	},
	{
		title: 'Juices',
		icon: (
			<Image
				className={styles['icon']}
				src='/icons/juice.png'
				alt='Juice cup'
				width={WIDTH}
				height={HEIGHT}
			/>
		),
	},
]

export type ProductsTab = {
	title: string
	icon: ReactElement
}
