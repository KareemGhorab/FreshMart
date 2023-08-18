import Carousel from '@/components/carousel/carousel'
import { TImage } from '@/types/app/image'

type TProps = {}

const images: TImage[] = [
	{
		src: '/home/hero1.jpg',
		alt: 'Hero One',
		width: 1920,
		height: 1080,
	},
	{
		src: '/home/hero2.jpg',
		alt: 'Hero Two',
		width: 1920,
		height: 1080,
	},
	{
		src: '/home/hero3.jpg',
		alt: 'Hero Three',
		width: 1920,
		height: 1080,
	},
]

const Hero: React.FC<TProps> = (): JSX.Element => {
	return (
		<header>
			<Carousel images={images} />
		</header>
	)
}

export default Hero
