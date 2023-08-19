import clsx from 'clsx'
import SectionHeader from '@/components/ui/header/section-header/section-header'

import styles from './about-section.module.scss'
import AboutSectionInfoItem from './about-section-info-item'
import Image from 'next/image'

const infoItems: { title: string; paragraph: string }[] = [
	{
		title: '100% Natural',
		paragraph:
			'At FreshMart, we take pride in offering you products that are 100% natural. From farm-fresh fruits and vegetables to organic meats and dairy.',
	},
	{
		title: 'Fresh Products',
		paragraph:
			'With FreshMart, freshness is our promise to you. We diligently work with local farmers, and suppliers to bring you the freshest products.',
	},
	{
		title: 'Premium Quality',
		paragraph:
			'Welcome to FreshMart, your go-to destination for premium quality products. We source the finest ingredients, carefully selecting each item to meet our exceptional standards.',
	},
	{
		title: 'Super Healthy',
		paragraph:
			'Discover a world of super healthy options at FreshMart. Our extensive selection of organic, gluten-free, and plant-based products caters to all dietary needs and preferences.',
	},
]

type TProps = {
	className?: string
}

const AboutSection: React.FC<TProps> = ({
	className = '',
}: TProps): JSX.Element => (
	<section className={clsx(styles['about_section'], className)}>
		<SectionHeader title='Why Choose Us' />
		<div className={clsx(styles['about_section__info'])}>
			{infoItems.map((item, idx) => (
				<AboutSectionInfoItem
					key={item.title}
					{...item}
					orientation={idx % 2 === 0 ? 'right' : 'left'}
				/>
			))}
		</div>
		<Image
			className={clsx(styles['about_section__footer'])}
			src='/home/about.png'
			alt='Vegetables bag'
			width={524}
			height={338}
		/>
	</section>
)

export default AboutSection
