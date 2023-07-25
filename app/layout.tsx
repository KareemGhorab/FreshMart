import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import Navbar from '@/components/navigation/navbar/navbar'

const josefin_sans = Josefin_Sans({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'FreshMart - Organic and Fresh Food',
	description:
		'Welcome to FreshMart, your one-stop destination for farm-fresh vegetables and fruits. At FreshMart, we are passionate about bringing you the highest quality produce, handpicked from local farms and delivered straight to your doorstep. Our wide selection includes an array of vibrant vegetables and juicy fruits, carefully cultivated to ensure exceptional taste and nutritional value. With a commitment to freshness and sustainability, we prioritize supporting local farmers and promoting a healthy lifestyle. Explore our online store and experience the joy of wholesome, flavorful produce at FreshMart. Shop with us today and transform your meals into culinary delights!',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={josefin_sans.className}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
