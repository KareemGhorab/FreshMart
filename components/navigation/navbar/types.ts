export const navMenu: TNavItem[] = [
	{ title: 'Home', href: '/' },
	{ title: 'Products', href: '/products', subList: [] },
	{ title: 'Blog', href: '/blog' },
	{ title: 'About Us', href: '/about' },
	{ title: 'Contact', href: '/contact' },
]

export type TNavItem = {
	title: string
	href: string
	subList?: TNavItem[]
}
