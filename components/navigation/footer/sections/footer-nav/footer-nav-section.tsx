import clsx from 'clsx'
import Link from 'next/link'
import { TLink, TPropsWithClassName } from '@/types/props'

export type TFooterNavSection = {
	title: string
	links: TLink[]
}

type TProps = TFooterNavSection & TPropsWithClassName

const FooterNavSection: React.FC<TProps> = ({
	title,
	links,
	className,
}: TProps): JSX.Element => (
	<section className={clsx(className)}>
		<h4>{title}</h4>
		<ul>
			{links.map(({ label, link: { href } }) => (
				<li key={label}>
					<Link href={href}>{label}</Link>
				</li>
			))}
		</ul>
	</section>
)

export default FooterNavSection
