'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

import styles from './carousel.module.scss'
import { TImage } from '@/types/app/image'
import clsx from 'clsx'

type TProps = {
	images: TImage[]
	className?: string
	delay?: number
	disableOnInteraction?: boolean
	spaceBetween?: number
	loop?: boolean
	effect?: 'slide' | 'fade'
}

export default function Carousel({
	images,
	className = '',
	delay = 2500,
	disableOnInteraction = false,
	spaceBetween = 0,
	loop = true,
	effect = 'slide',
}: TProps) {
	return (
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
						<figure className={styles['carousel__item']}>
							<Image
								className={styles['carousel__image']}
								src={src}
								alt={alt}
								width={width}
								height={height}
							/>
						</figure>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
