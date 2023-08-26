import clsx from 'clsx'
import Image from 'next/image'
import SectionHeader from '@/components/ui/header/section-header/section-header'
import AboutSectionInfoItem from './about-section-info-item'

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
	<section
		className={clsx(
			'bg-app-400 text-white w-full flex justify-center items-center flex-col pb-72 relative',
			className
		)}
	>
		<SectionHeader title='Why Choose Us' />
		<div
			className={clsx(`grid grid-cols-2 gap-10 relative pt-5
								after:w-full after:border-dashed after:border-t after:bg-white after:absolute after:top-1/2 after:-translate-y-1/2
								before:h-full before:border-dashed before:border-r before:bg-white before:absolute before:right-1/2`)}
		>
			{infoItems.map((item, idx) => (
				<AboutSectionInfoItem
					key={item.title}
					{...item}
					orientation={idx % 2 === 0 ? 'right' : 'left'}
				/>
			))}
		</div>
		<Image
			className={clsx('absolute bottom-0 translate-y-1/4')}
			src='/home/about.png'
			alt='Vegetables bag'
			width={524}
			height={338}
		/>
	</section>
)

export default AboutSection
