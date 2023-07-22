'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination';

import styles from './hero.module.css'

export default function HeroCarousel() {
	return (
		<div className='relative'>
			
			<Swiper
				className='h-screen max-h-[1200px]'
				spaceBetween={0}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				loop={true}
				effect='fade'
				modules={[Autoplay, Pagination, EffectFade]}
				>
				<SwiperSlide>
					<figure className={styles['carousel-item']}>
						<Image
							className={styles['carousel-image']}
							src='/home/hero1.jpg'
							alt='Hero'
							width={1920}
							height={1080}
							/>
					</figure>
				</SwiperSlide>
				<SwiperSlide>
					<figure className={styles['carousel-item']}>
						<Image
							className={styles['carousel-image']}
							src='/home/hero2.jpg'
							alt='Hero'
							width={1920}
							height={1080}
							/>
					</figure>
				</SwiperSlide>
				<SwiperSlide>
					<figure className={styles['carousel-item']}>
						<Image
							className={styles['carousel-image']}
							src='/home/hero3.jpg'
							alt='Hero'
							width={1920}
							height={1080}
							/>
					</figure>
				</SwiperSlide>
				<div className='bg-white absolute right-0 left-0 bottom-0 z-[5]'>
				</div>
			</Swiper>
		</div>
	)
}
