import { TBasicProps } from '@/types/basic'
import HeroCarousel from './hero-carousel'

export default function Hero({}: TBasicProps) {
	return (
		<header>
			<HeroCarousel />
		</header>
	)
}
