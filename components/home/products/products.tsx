'use client'

import { Product } from '@/types/models/product'
import SectionHeader from '../../ui/header/section-header'
import ProductsTab from '../../ui/tabs/tab'
import { tabs } from './types'

const dummyProducts: Product[] = []

export default function Arrivals() {
	const handleSelection = (title: string): void => {}

	return (
		<section>
			<SectionHeader
				title='New Arrivals'
				paragraph='Check Out Our Fresh and Healthy Collection'
			/>
			<nav className='flex justify-evenly'>
				{tabs.map((tab) => (
					<ProductsTab
						onSelect={handleSelection}
						title={tab.title}
						key={tab.title}
					>
						<div className='w-[50px] h-[30px]'>{tab.icon}</div>
					</ProductsTab>
				))}
			</nav>
		</section>
	)
}
