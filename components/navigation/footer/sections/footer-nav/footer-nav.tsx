import clsx from 'clsx'
import { TPropsWithClassName } from '@/types/props'
import FooterNavSection, { TFooterNavSection } from './footer-nav-section'

const navSections: TFooterNavSection[] = [
	{
		title: 'Products',
		links: [
			{
				label: 'Store',
				link: {
					href: '#',
				},
			},
			{
				label: 'New products',
				link: {
					href: '#',
				},
			},
			{
				label: 'Best sellers',
				link: {
					href: '#',
				},
			},
		],
	},
	{
		title: 'About us',
		links: [
			{
				label: 'More about us',
				link: {
					href: '#',
				},
			},
			{
				label: 'Delivery and returns',
				link: {
					href: '#',
				},
			},
			{
				label: 'Legal issues',
				link: {
					href: '#',
				},
			},
		],
	},
	{
		title: 'Your account',
		links: [
			{
				label: 'Your profile',
				link: {
					href: '#',
				},
			},
			{
				label: 'Your addresses',
				link: {
					href: '#',
				},
			},
		],
	},
]

type TProps = TPropsWithClassName

const FooterNav: React.FC<TProps> = ({ className }: TProps): JSX.Element => (
	<nav className={clsx(className)}>
		{navSections.map(({ title, links }) => (
			<FooterNavSection key={title} title={title} links={links} />
		))}
	</nav>
)

export default FooterNav
