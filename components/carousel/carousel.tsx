'use client'

import Image from 'next/image'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

import styles from './carousel.module.scss'
import { TImage } from '@/types/app/image'

type TProps = {
	images: TImage[]
	className?: string
	delay?: number
	disableOnInteraction?: boolean
	spaceBetween?: number
	loop?: boolean
	effect?: 'fade'
}

const Carousel: React.FC<TProps> = ({
	images,
	className = '',
	delay = 2500,
	disableOnInteraction = false,
	spaceBetween = 0,
	loop = true,
	effect = 'fade',
}: TProps) => (
	<div className={clsx(styles['carousel__wrapper'], className)}>
		<Swiper
			className={clsx(styles.carousel)}
			spaceBetween={spaceBetween}
			centeredSlides={true}
			autoplay={{
				delay: delay,
				disableOnInteraction: disableOnInteraction,
			}}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			loop={loop}
			effect={effect}
			modules={[Autoplay, Pagination, EffectFade]}
		>
			{images.map(({ src, alt, width, height }) => (
				<SwiperSlide key={src}>
					<div className={styles['carousel__item']}>
						<Image
							className={styles['carousel__image']}
							src={src}
							alt={alt}
							width={width}
							height={height}
						/>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	</div>
)

export default Carousel
