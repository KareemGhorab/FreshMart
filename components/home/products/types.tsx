import { ReactElement } from 'react'
import Image from 'next/image'

import styles from './products.module.css'

export const tabs: ProductsTab[] = [
	{
		title: 'All Products',
		icon: (
			<Image
				className={styles['icon']}
				src='/icons/all.png'
				alt='Fruit basket'
				width={50}
				height={30}
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
				width={50}
				height={30}
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
				width={50}
				height={30}
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
				width={50}
				height={30}
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
				width={50}
				height={30}
			/>
		),
	},
]

export type ProductsTab = {
	title: string
	icon: ReactElement
}
