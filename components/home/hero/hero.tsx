import { BasicProps } from '@/types/basic'
import HeroCarousel from './hero-carousel'

export default function Hero({}: BasicProps) {
	return (
		<header>
			<HeroCarousel />
		</header>
	)
}
