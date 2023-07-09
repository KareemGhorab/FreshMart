export const navList: NavItemType[] = [
	{ title: 'Home', href: '/' },
	{ title: 'Products', href: '/products', subList: [] },
	{ title: 'Blog', href: '/blog' },
	{ title: 'About Us', href: '/about' },
	{ title: 'Contact', href: '/contact' },
]

export type NavItemType = {
	title: string
	href: string
	subList?: NavItemType[]
}
