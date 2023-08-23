import clsx from 'clsx'
import FooterBadge from './sections/footer-badge'
import FooterNav from './sections/footer-nav/footer-nav'
import FooterContact from './sections/footer-contact/footer-contact'
import FooterNewsletter from './sections/footer-newsletter'
import { TPropsWithClassName } from '@/types/app/props/props'

import styles from './footer.module.scss'

const Footer: React.FC = (): JSX.Element => (
	<footer className={clsx(styles.footer, 'mx-auto')}>
		<FooterBadge />
		<FooterNav />
		<FooterNewsletter />
		<FooterContact />
	</footer>
)

export default Footer
