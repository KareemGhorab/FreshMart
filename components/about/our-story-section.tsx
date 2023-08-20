import {
	faCertificate,
	faHeartPulse,
	faLeaf,
	faSeedling,
} from '@fortawesome/free-solid-svg-icons'
import SectionHeader from '../ui/header/section-header/section-header'
import StoryItem, { TStoryItem } from './story-item'
import ShinyContainer from '../ui/shiny-container/shiny-container'
import Image from 'next/image'

const storyItems: TStoryItem[] = [
	{
		icon: faLeaf,
		iconClassName: 'text-app-400',
		title: 'Always Fresh',
		paragraph:
			'With FreshMart, freshness is our promise to you. We diligently work with local farmers, and suppliers to bring you the freshest products.',
		className: 'col-start-1 col-span-1 row-start-1 row-span-1',
	},
	{
		icon: faHeartPulse,
		iconClassName: 'text-red-500',
		title: 'Always Fresh',
		paragraph:
			'With FreshMart, freshness is our promise to you. We diligently work with local farmers, and suppliers to bring you the freshest products.',
		className: 'col-start-1 col-span-1 row-start-2 row-span-1',
	},
	{
		icon: faSeedling,
		iconClassName: 'text-app-400',
		title: 'Always Fresh',
		paragraph:
			'With FreshMart, freshness is our promise to you. We diligently work with local farmers, and suppliers to bring you the freshest products.',
		className: 'col-start-3 col-span-1 row-start-1 row-span-1',
	},
	{
		icon: faCertificate,
		iconClassName: 'text-yellow-400',
		title: 'Always Fresh',
		paragraph:
			'With FreshMart, freshness is our promise to you. We diligently work with local farmers, and suppliers to bring you the freshest products.',
		className: 'col-start-3 col-span-1 row-start-2 row-span-1',
	},
]

type TProps = {
	className?: string
}

const OurStorySection: React.FC<TProps> = ({
	className = '',
}: TProps): JSX.Element => (
	<section className='w-container px-8'>
		<SectionHeader
			variant='primary'
			title='Welcome to FreshMart'
			paragraph='Welcome to FreshMart, where we pride ourselves in delivering the freshest and highest quality groceries to our valued customers. As you step into our store, prepare to embark on a delightful culinary journey filled with an abundance of fresh produce, delectable meats, gourmet cheeses, and a wide range of pantry staples. Our dedicated team is here to assist you in finding exactly what you need for your healthy meals, special occasions, and everyday necessities. With our well-organized aisles, sourced directly from local farmers and trusted suppliers, your shopping experience is guaranteed to be convenient, inspiring, and truly enjoyable. So come on in, explore our vast selection, and discover the joy of shopping at FreshMart.'
		/>
		<div className='grid grid-cols-3 col-start-1 gap-10'>
			{storyItems.map((item) => (
				<StoryItem key={item.title} {...item} />
			))}
			<div className='col-start-2 col-span-1 row-start-1 row-span-3'>
				<ShinyContainer className='bg-app-600 text-center flex flex-col gap-4 text-white px-5 pt-20 pb-32 relative'>
					<h3 className='font-semibold text-xl'>Our Story</h3>
					<p>
						Our story at FreshMart began with a vision to provide
						our community with fresh and quality groceries in a
						convenient and friendly environment. It all started in a
						small corner store back in 2005.
					</p>
					<p>
						Over the years, we have grown and expanded, always
						staying true to our core values of freshness,
						affordability, and exceptional customer service. We
						prioritize sourcing the finest local produce and
						partnering with trusted suppliers to ensure our
						customers only receive the best. We believe that
						everyone deserves access to nutritious food.
					</p>
					<div className='w-0 h-0 border-b-[50px] border-x-[200px] border-x-transparent border-b-white absolute bottom-0 left-1/2 -translate-x-1/2' />
					<Image
						className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3'
						src='/ui/lemons.png'
						alt='lemons'
						width={250}
						height={213}
					/>
				</ShinyContainer>
			</div>
		</div>
	</section>
)

export default OurStorySection
