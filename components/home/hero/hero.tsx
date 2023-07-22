import { BasicProps } from '@/types'
import HeroCarousel from './hero-carousel'

export default function Hero({}: BasicProps) {
	return (
		<header>
			<HeroCarousel />
		</header>
	)
}
