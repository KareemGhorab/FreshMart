import CategoryItem, { TCategoryItem } from './category-item'

// TODO: Links
const categoryItems: TCategoryItem[] = [
	{
		image: {
			src: '/categories/banner-1.jpg',
			alt: 'banner-1',
			width: 480,
			height: 716,
		},
		title: 'Snapple Natural',
		paragraph:
			'Enjoy our all new Snapple Natural juice which comes in a multitude of flavors.',
		className: 'col-start-1 col-span-1 row-start-1 row-span-2',
		link: { href: '#' },
	},
	{
		image: {
			src: '/categories/banner-2.jpg',
			alt: 'banner-2',
			width: 960,
			height: 358,
		},
		title: 'Bell Pepper',
		paragraph:
			"If it's Bell Pepper you need, then you can reply on us to serve the highest quality.",
		className: 'col-start-2 col-span-2 row-start-1 row-span-1',
		link: { href: '#' },
	},
	{
		image: {
			src: '/categories/banner-3.jpg',
			alt: 'banner-3',
			width: 480,
			height: 358,
		},
		title: 'Bananas',
		paragraph:
			"If you haven't tried FreshMart's iconic Bananas then you are missing out.",
		className: 'col-start-4 col-span-1 row-start-1 row-span-1',
		link: { href: '#' },
	},
	{
		image: {
			src: '/categories/banner-4.jpg',
			alt: 'banner-4',
			width: 480,
			height: 358,
		},
		title: 'Yellow Lemons',
		paragraph:
			'Enhance the flavor of your dishes with our exceptionally delicious yet sour Yellow Lemons.',
		className: 'col-start-2 col-span-1 row-start-2 row-span-1',
		link: { href: '#' },
	},
	{
		image: {
			src: '/categories/banner-5.jpg',
			alt: 'banner-5',
			width: 960,
			height: 358,
		},
		title: 'Green Cabbages',
		paragraph:
			'Looking to fix the best salads for your diet? we can help you with that with our health and tasty Green Cabbages.',
		className: 'col-start-3 col-span-2 row-start-2 row-span-1',
		link: { href: '#' },
	},
]

const CategoriesSection: React.FC = (): JSX.Element => (
	<section
		className={
			'grid grid-cols-4 grid-rows-2 text-white max-w-container mx-auto'
		}
	>
		{categoryItems.map((item) => (
			<CategoryItem {...item} key={item.title} />
		))}
	</section>
)

export default CategoriesSection
