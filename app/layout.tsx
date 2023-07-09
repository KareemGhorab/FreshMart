import type { Metadata } from 'next'
import { Amatic_SC, Josefin_Sans } from 'next/font/google'

import Navbar from '@/components/navigation/navbar/navbar'
import './globals.css'

export const amatic_SC = Amatic_SC({
	weight: ['400', '700'],
	subsets: ['latin'],
})
const josefin_sans = Josefin_Sans({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'FreshMart',
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
      <Navbar />
			<body className={josefin_sans.className}>{children}</body>
		</html>
	)
}
